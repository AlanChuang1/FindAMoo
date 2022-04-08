import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, Alert, View, SafeAreaView, Button, useWindowDimensions } from 'react-native';
import axios from 'axios';


//import cors from 'cors';
const Separator = () => (
  <View style={styles.separator} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

let GetUserId = null; 

const iAxios = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 1000
})
//axios.use(cor())

function getCall() {
  console.log("Trying GET...");
  if (GetUserId != null) {
    axios.get('http://localhost:5000/users/get_user/' + GetUserId).then(
      (response) => {
        console.log(response.status, response.statusText, response.data); 
      }
    ).catch(
      (response) => {
        console.log("Request failed."); 
      }
    )
  } else {
    console.log("Please enter an ID first."); 
  }
}

function loginAuth() {
	console.log("Trying GoogleAuth...");
  window.open('http://localhost:5000/users/auth/google', "_self");
  // 	axios.get('http://localhost:5000/users/auth/google').then(
  //   	(response) => {
  //     	console.log(response.status, response.statusText, response.data); 
  //   	}
  // 	).catch(
	// 	(response) => {
  //     	console.log("Request failed."); 
  //   	}
  // )
}

function StateText({ value, trueText, falseText}) {
  //console.log("Rendering for value: " + value); 
  return (
    <View>
      {
        value ? 
        <Text style={styles.title}> { trueText } </Text> : 
        <Text style={styles.title}> { falseText } </Text>
      }
    </View>
  )
}

//{defaultValue ? <Text style={styles.title}>{trueText}</Text> : <Text style={styles.title}>{falseText}</Text>}
function StateButton({ title, defaultValue, trueText, falseText }) {
  const [bool, setBool] = useState(defaultValue); 
  const onClick = () => {
    setBool(!bool);
  }
  return(
    <View>
      <StateText value={ bool } trueText={ trueText } falseText={ falseText } />
      <Button 
        title={ title } 
        onPress={ onClick }
      />
    </View>
  )
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button 
          title="LOGIN" 
          onPress={() => loginAuth() } 
        />
        <Separator/>

        <Button
          title="GET"
          onPress={() => { getCall() }}
        />
        <TextInput
          style={{
            height: 40, 
            borderColor: 'gray', 
            borderWidth: 1
          }}
          placeholder="ID here"
          onFocus={() => {
            GetUserId = null; 
          }}
          onChangeText = {(newText) => {
            GetUserId = newText; 
          }}
        />

      </View>
    </SafeAreaView>
  );
}