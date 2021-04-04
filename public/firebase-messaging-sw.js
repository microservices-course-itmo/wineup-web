/*eslint-disable*/
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js')

const firebaseConfig = {
  apiKey: 'AIzaSyCExaLzKWdhhr_1IRPe1NIFdR7Uor12LTI',
  authDomain: 'testfire-1bc2f.firebaseapp.com',
  databaseURL: 'https://testfire-1bc2f.firebaseio.com',
  projectId: 'testfire-1bc2f',
  storageBucket: 'testfire-1bc2f.appspot.com',
  messagingSenderId: '243423113529',
  appId: '1:243423113529:web:d363f5aa8bf5ca297bf8e8',
}

firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging()

messaging.onBackgroundMessage(payload => console.log(payload))
