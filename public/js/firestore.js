// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const config = {
    apiKey: "AIzaSyCIysimkLwkCodQF8zJVm9bumgm3mOwEXE",
    authDomain: "shirtsighted-8f59c.firebaseapp.com",
    projectId: "shirtsighted-8f59c",
    storageBucket: "shirtsighted-8f59c.appspot.com",
    messagingSenderId: "717796761674",
    appId: "1:717796761674:web:49e59c7fea553b709cc6b3",
    measurementId: "G-KTZX2WKFC7"
  };
  firebase.initializeApp(config);
const firestore = firebase.firestore();
  firebase.analytics();

const docRef = firestore.doc("items/" + title);
const image = document.querySelector("#newItemImage");
const title = document.querySelector("#newItemText");
const description = document.querySelector("#newItemDescription");
const price = document.querySelector("#newItemPrice");
const savebutton = document.querySelector("#savebutton");

savebutton.addEventListener("click", function() {
    const uploadImage = image.value;
    const uploadTitle = title.value;
    const uploadDescription = description.value;
    const uploadPrice = price.value;
    console.log(uploadImage + uploadTitle + uploadDescription + uploadPrice);
    docRef.set({
        image: uploadImage,
        title: uploadTitle,
        description: uploadDescription,
        price: uploadPrice
    }).then(function() {
        console.log('Upload Complete');
    }).catch(function(e) {
        console.assert('Upload Failed' + e)
    });
});