import AsyncStorage from '@react-native-async-storage/async-storage'; 



// Testing if saved currently to storage
export const saveCredentials = async (credentials) => {
	console.log("Testing save credentials...");
	try { 
		await AsyncStorage.setItem("credentials" , credentials);
	} catch (err) {
		console.log("Failed to save data to local storage: " + err);
	}
}
export const checkCrendentials = async () => {
    try {
	    let cert = await AsyncStorage.getItem("credentials", credentials);
        return cert;
    } catch (err){
        console.log("Failed to get data from async: " + err);
    }
	return;
}