import { Alert } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export const imagePicker = async () => {

    const promise = new Promise(async (resolve, reject) => {

        try {

            Alert.alert('Select option', '',
                [
                    { text: "Cancel", style: "cancel" },
                    { text: "Gallery", onPress: () => { openImageLibrary(resolve) } },
                    { text: "Camera", onPress: () => { openCamera(resolve) } }

                ],
                { cancelable: true }
            );

        } catch (msg) { reject(msg); }

    });


    const openCamera = (resolve) => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        launchCamera(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                console.log('response', JSON.stringify(response));

                resolve(response)

            }
        });

    }


    const openImageLibrary = (resolve) => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        launchImageLibrary(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                console.log('response', JSON.stringify(response));
                resolve(response)

            }
        });

    }


    return promise;
}