Instagram clone to be built utilizing React, CSS, JSX/HTML, Material-UI, Firebase for hosting, database and user authentication.

For customazibility, for Post component imported to App.js, I used props to pass in username, inageUrl and caption.

Then under Post component file, I parsed in that props, using destructure to parse in the exact name I have parsed in to Post component already in App.js. So, I opened the object to the props I parsed in. Hence, I added the js props in different places to the jsx code where they need to be. E.g. usernames prop goes under the h3 as {username}. Interesting thing is JSX allows you to add JavaScript code to it, to load your JS dynamically in your html (I.e. JSX). This is powerful.

To avoid hard coding and making values for userName, caption and imageUrl flexible. Hence, I used state hook (in form of a short term memory store in react) to set the post variables in App.js

posts.map(). Note map is an ES6 function

Firebase database implementation- From, your particular project, navigate to database and click “Create database”., then “Start in text mode”, then “next”, then “done”.

“Start collection” and populate with collection ID, then “next”. In this case, I used “posts”. This stage is basically like a hybrid- a combination of SQL + NoSQL databases. I added “caption” to the first field, added another field to populate with the rest of the items listed in the post props - “username” and “imageUrl”.

Firebase found a middle ground to combine these 2,  thereby solving the problem of lack of SQL functionality in NoSQL database, utilizing some sort of document collection structure. Hence, I created a collection document. Every single “post” is a document (that is, we have one collection for “post”) and multiple documents inside of it, which each will resemble a post on the Instagram clone.

I entered value for each field, and clicked “auto-ID”, and then saved.

Then, I connected the react to firebase database. To do this, I clicked on the settings icon on the side bar displaying “Project Overview”, then clicked “Project settings”, then scrolled to the button to then click “config” and then copied the code and pasted to a file I created called firebase.js, which will then be responsible for all the firebase config settings for this app. Refer to thid link on how to import firebase to your project: https://firebase.google.com/docs/web/setup, where you can find a snippet of code to refer to initialize firebase in your project, and then copy the config code we generated earlier inside it. Don't forget to install firbase and follow those normal steps-- npm install -g firabse-tools. The snippet of code is as follows:

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
});
  
const db = firebase.firestore();
const auth = firebase.storage();
const storage = firebase.storage();
  

export default {db, auth, storage};

When you add the config code, you have something like this:
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCFdrUiNwyggJgtc7RzEsg6ivdUQkBKbqM",
  authDomain: "instagram-clone-67720.firebaseapp.com",
  projectId: "instagram-clone-67720",
  storageBucket: "instagram-clone-67720.appspot.com",
  messagingSenderId: "516318544601",
  appId: "1:516318544601:web:4428f395e7e46170c874c8",
  measurementId: "G-7H5EGQDEC2"
});
  
const db = firebase.firestore();
const auth = firebase.storage();
const storage = firebase.storage();
  

export default {db, auth, storage};

Summary: I called in this initialized firebase function provided by firebase, then passed in the config with the db (i.e database), auth (i.e. authentication - to create users, login, logout, etc.), storage (to upload images, videos etc), thereby grabbing 3 service from firebase, and storing them into 3 variables.

Afterwards, I used useEffect to replace hard coded objects username, captions and imageUrl in the App.js. Note that useEfect runs a piece of code, based on a specific condition. For instance, it runs code when page refreshes. I added variable conditions in an array within the useEffect. Note that if the array is left blank, as placed inside the App.js, the behaviour would be that it runs once the component or app loads. But then it won't run again, which is actually good for what I need it for in this project. For instance, if the useEffect was in the Post.js component, it then means it would run once when the App component loads, but also every single time variable post changes.

Afterwards, I pulled the information from the database and capture it under useState where I have objects userName, caption and imageUrl. Firebase is powerful for this. Hence, I imported the db from firebase to my App.js component and added db.collection('posts').onSnapshot(snapshot) to useEffect, where 'posts' is what I named the document on Firebase. onSnapshot here is a very powerful event listener that makes sure every single time the database changes in the collection (say, a document get added, changed, modified or whanot, inside the post), this listener will take a snapshot of what that collection looks like. Hence, you will get an update of all the documents. If a user adds a document or post, the listener will update or refile this bit of code.