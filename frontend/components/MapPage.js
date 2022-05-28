import StatusBar from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps'; 
import MapStyle from './css/maps.style.js'; 

import CowPinPointPng from './images/CowPinPointMini.png'; 

export default function MapPage() {
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
            <Marker 
                key={1}
                coordinate={
                {
                    latitude: 38.53950696389684, 
                    longitude:-121.76022477901134
                }
                }
                title={"bow wow im a cow"}
                description={"moo i guess"}
                image={CowPinPointPng}
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
