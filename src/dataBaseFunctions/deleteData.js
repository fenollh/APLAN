import React from 'react'
import firebase from 'firebase'
import { Alert } from 'react-native';


const firebaseConfig = {
    apiKey: "AIzaSyAbXkNWtod5WFUFEbWVM6Q1BAmVDbVGAeo",
    authDomain: "aplan-8bbba.firebaseapp.com",
    databaseURL: "https://aplan-8bbba.firebaseio.com",
    projectId: "aplan-8bbba",
    storageBucket: "aplan-8bbba.appspot.com",
    messagingSenderId: "502481515083",
    appId: "1:502481515083:web:79017bc417ac4bf16b53ce",
    measurementId: "G-QLXPJEZCN3"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const deleteData = (index, type) => {
    Alert.alert('DELETED ' + index + type)
    firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/' + type + '/' + index + '/').remove()
}
export {deleteData}