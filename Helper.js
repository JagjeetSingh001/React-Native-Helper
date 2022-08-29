import { Alert } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors, ImagePath, IMAGES } from './Constants';

export function setHeaderColor(navigation) {
    navigation.setOptions({
        headerStyle: {
            backgroundColor: Colors.primaryColor,
        }
    })
}

//Make root 
export function navigateWithRoot(control, navigation) {

    navigation.dispatch(
        CommonActions.reset({
            index: 1,
            routes: [
                { name: control },
            ]
        })
    );
}

//Remove from Async storage
export async function removefromAsync(key) {
    try {
        await AsyncStorage.removeItem(key)
    } catch (e) {
        // remove error
        console.log('erorr.........', e)
    }

    console.log('Done.')
}

//Get from Async storage
export async function getFromAsync(key) {
    try {
        const value = await AsyncStorage.getItem(key)
        return value
    } catch (e) {
        // error reading value
    }
}

//Store in Async storage
export async function storeInAsync(key, value) {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        // saving error
    }
}

//Validate Email
export function validateEmail(text) {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
        console.log("Email is Not Correct");
        alert('Invalid Email address')
        return false;
    }
    else {
        console.log("Email is Correct");
        return true;
    }
}

export function isEmpty(value) {
    return (value == '')
}

export function alertConfirm(title, message, action) {
    Alert.alert(title, message,
        [
            { text: "No", style: "cancel" },
            {
                text: "Yes", onPress: () => { action() }
            }
        ],
        { cancelable: false }
    )
}



export function getImagePath(item) {
    return item.logo != null ? { uri: item.logo.includes('http') ? item.logo : ImagePath + item.logo } : item.thumb ? item.thumb != '' ? { uri: ImagePath + item.thumb } : IMAGES.LOGO : IMAGES.LOGO
}


export function arrayToString(array) {
    return array.map((obj, index) => { return `${obj}${(index + 1) == array.length ? '' : ','} ` })
}


export function firstLetterCapital(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}
