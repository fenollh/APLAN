import React from 'react'
import firebase from 'firebase'


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

const setData = (context) => firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/notes/').set(context.state.data)
    
const getData = (context) => {
    return new Promise((resolve) => {
        firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/notes/').on('value', data =>{
            let arrData= data.val()
            if(arrData !== null){
                context.setState({ data: arrData })
            }
            else{
                context.setState({ data: ['primero'] })
            }
            resolve(arrData)
        }) 
    })
}
const saveData = (context) => {
    getData(context)
    .then(() => { context.setState({ data: [...context.state.data, {title: context.state.title, body: context.state.body}] })})
    .then(() => setData(context))   
}

export default saveData