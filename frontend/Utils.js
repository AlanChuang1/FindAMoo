import AsyncStorage from '@react-native-async-storage/async-storage'; 

// Utils.js is for holding helper functions that will be used by multiple components/js files. 

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

// Saving user data (cows, id, etc) and removing user. 
export const saveUserData = async (userData) => {
	saveData('userData', userData);
}
export const getUserData = async (userData) => {
	return getData('userData');
}

export const getImageId = async (ori, col, spot, bell, acc) => {
	const imageTable = { 
		orientation: {
			none: '0',
			front: '1',
			side: '2'
		},
		color: {
			none: '0',
			white: '1',
			brown: '2',
			darkBrown: '3'
		},
		spots: {
			none: '0',
			teal: '1',
			orange: '2',
			blue: '3',
			pink: '4',
			red: '5',
			purple: '6'
		},
		bells: {
			none: '0',
			cow: '1',
			moo: '2',
			teal: '3',
			yellow: '4',
			pink: '5'
		},
		accessory: {
			none: '0',
			partyhat: '1',
			gardenhat: '2',
			tophat: '3',
			witchhat: '4',
			crown: '5',
			bow: '6',
			sprout: '7',
			mustache: '8',
			sunglasses: '9',
			starglasses: '10'
		}
	}
	// Default image id
	let imageId = "cow11100.png";
	try {
		imageId = 'cow' + imageTable['orientation'][ori] + imageTable['color'][col] + imageTable['spots'][spot] + imageTable['bells'][bell] + imageTable['accessory'][acc] + '.png';
	} catch (err) {
		console.log(err);
	}
	return imageId;

}