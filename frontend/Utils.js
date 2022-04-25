import AsyncStorage from '@react-native-async-storage/async-storage'; 

// Saves value, to the key in AsyncStorage. Value is expected to be a string.
const saveData = async (key, value) => {
	try { 
		await AsyncStorage.setItem(key, value);
	} catch (err) {
		console.log("Failed to save data to local storage: " + err);
	}
}

// Gets the value with the key in AsyncStorage. 
const getData = async (key) => {
	try {
		let cert = await AsyncStorage.getItem(key);
        return cert;
	} catch (err) {
        console.log("Failed to get data from async: " + err);
	}
	return null;
}
// Removes the data with the key in AsyncStorage. 
const removeData = async (key) => {
	try {
		await AsyncStorage.removeItem(key);
		return true;
	} catch (exception) {
		return false;
	}
	
}


// Saves credentials of logged user to see if they are logged in.
export const saveCredentials = async (credentials) => {
	console.log("Testing save credentials...");
	saveData('credentials', credentials);
}
export const checkCrendentials = async () => {
    console.log("Getting user credentials...");
	return getData('credentials');
}
export const logout = async () => {
	removeData('credentials');
	
	console.log(checkCrendentials);
}

// 
export const saveUserData = async (userData) => {
	saveData('userData', userData);
}
export const getUserData = async (userData) => {
	return getData('userData');
}