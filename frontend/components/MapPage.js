import StatusBar from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, LogBox, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geofence from 'react-native-expo-geofence';
import * as Location from "expo-location";
import * as TaskManager from "expo-task-manager";
import MapStyle from './css/maps.style.js';
import CowPinPointPng from './images/CowPinPointMini.png';
var region = {
  latitude: 38.546719,
  longitude: -121.744339,
  latitudeDelta: 0.0171,
  longitudeDelta: 0.0108
};
const LOCATION_TASK_NAME = "LOCATION_TASK_NAME"
const ENTER_TASK_NAME = "ENTER_TASK_NAME"
let foregroundSubscription = null
TaskManager.defineTask(LOCATION_TASK_NAME, async ({ data, error }) => {
  if (error) {
    console.error(error)
    return
  }
  if (data) {
    // Extract location coordinates from data
    const { locations } = data
    const location = locations[0]
    if (location) {
      console.log("Location in background", location.coords)
    }
  }
})
TaskManager.defineTask(ENTER_TASK_NAME, async ({ data: { eventType, region }, error }) => {
  if (error) {
    console.error(error)
    return
  }
  if (eventType === Location.GeofencingEventType.Enter) {
    console.log("You've entered region:", region);
}})
export default function MapPage() {
    const [distance, setDistance] = useState(1000)
    const [showCircle, setshowCircle] = useState(true)
    const [markers, setMarkers] = useState([])
    const [position, setPosition] = useState(null)
    var locationPoints = [
      { key: 1, latitude: position?.latitude, longitude: position?.longitude, title: 'ARC' },
      { key: 2, latitude: 38.5397, longitude: -121.7495, title: 'Shields' },
      { key: 3, latitude: 38.5439, longitude: -121.7500, title: "MU" },
    ]
    Geofence.Log = true;
    LogBox.ignoreAllLogs();
    function updateMarkers ()
    {
      setMarkers(Geofence.filterByProximity(region, locationPoints, distance/1000));
    }
    useEffect(() => {
      const requestPermissions = async () => {
        const foreground = await Location.requestForegroundPermissionsAsync()
        if (foreground.granted) await Location.requestBackgroundPermissionsAsync()
      }
      requestPermissions()
    }, [])
    const startForegroundUpdate = async () => {
      // Check if foreground permission is granted
      const { granted } = await Location.getForegroundPermissionsAsync()
      if (!granted) {
        console.log("location tracking denied")
        return
      }
      // Make sure that foreground location tracking is not running
      foregroundSubscription?.remove()
      // Start watching position in real-time
      foregroundSubscription = await Location.watchPositionAsync(
        {
          // For better logs, we set the accuracy to the most sensitive option
          accuracy: Location.Accuracy.BestForNavigation,
        },
        location => {
          setPosition(location.coords)
        }
      )
      console.log(position?.longitude)
    }
    const startBackgroundUpdate = async () => {
      // Don't track position if permission is not granted
      const { granted } = await Location.getBackgroundPermissionsAsync()
      if (!granted) {
        console.log("location tracking denied")
        return
      }
      // Make sure the task is defined otherwise do not start tracking
      const isTaskDefined = await TaskManager.isTaskDefined(LOCATION_TASK_NAME)
      if (!isTaskDefined) {
        console.log("Task is not defined")
        return
      }
      // Don't track if it is already running in background
      const hasStarted = await Location.hasStartedLocationUpdatesAsync(
        LOCATION_TASK_NAME
      )
      if (hasStarted) {
        console.log("Already started")
        return
      }
      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME,
      {
        // For better logs, we set the accuracy to the most sensitive option
        accuracy: Location.Accuracy.BestForNavigation,
        // Make sure to enable this notification if you want to consistently track in the background
        showsBackgroundLocationIndicator: true,
        foregroundService: {
          notificationTitle: "Location",
          notificationBody: "Location tracking in background",
          notificationColor: "#fff",
        },
      })
    }
  //startForegroundUpdate(); 
  return (
    <View style={styles.container}>
      <MapView
          style={styles.map}
          provider="google"
          region={
              {
              latitude: 38.5415889280458,
              longitude: -121.76205582444689,
              latitudeDelta: 0.092,
              longitudeDelta: 0.092,
              }
          }
          customMapStyle={MapStyle}
          >
          {
            showCircle ?
            <MapView.Circle
              center={region}
              radius={distance}
              strokeColor='transparent'
              fillColor="rgba(0, 100, 180, 0.2)"/> : null
          }
          {/*
            <MapView.Marker
              coordinate={region}
              title="me"
              description={null}>
              <View style={styles.meStyle}/>
            </MapView.Marker>
          */}

          {
            markers.map((marker, index) => (
              <MapView.Marker
                key={index}
                coordinate={marker}
                title={marker.title}
                description={null}
              />
            ))
          }
          <Marker
              key={1}
              coordinate={region}
              title={"bow wow im a cow"}
              description={"moo i guess"}
              image={CowPinPointPng}     // on press -> cow caught page
          />
      </MapView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});