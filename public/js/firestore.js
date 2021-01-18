
const firebase = require('firebase/firebase');
const firestore = firebase.firestore();

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
 
// Enable offline capabilities
firestore.enablePersistence()
    .then(function() {
        // Initialize Cloud Firestore through firebase
        var db = firebase.firestore();
    })
    .catch(function(err) {
        if (err.code == 'failed-precondition') {
            // Multiple tabs open, persistence can only be enabled in one tab at a a time.

        } else if (err.code == 'unimplemented') {
            // The current browser does not support all of the
            // features required to enable persistence
            // ...
        }
    });