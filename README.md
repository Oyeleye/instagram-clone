Instagram clone to be built utilizing React, CSS, JSX/HTML, Material-UI, Firebase for hosting, database and user authentication.

For customazibility, for Post component imported to App.js, I used props to pass in username, inageUrl and caption.

Then under Post component file, I parsed in that props, using destructure to parse in the exact name I have parsed in to Post component already in App.js. So, I opened the object to the props I parsed in. Hence, I added the js props in different places to the jsx code where they need to be. E.g. usernames prop goes under the h3 as {username}. Interesting thing is JSX allows you to add JavaScript code to it, to load your JS dynamically in your html (I.e. JSX). This is powerful.

To avoid hard coding and making values for userName, caption and imageUrl flexible. Hence, I used state hook (in form of a short term memory store in react) to set the post variables in App.js

posts.map(). Note map is an ES6 function

Firebase database implementation- From, your particular project, navigate to database and click “Create database”., then “Start in text mode”, then “next”, then “done”.

“Start collection” and populate with collection ID, then “next”. In this case, I used “posts”. This stage is basically like a hybrid- a combination of SQL + NoSQL databases. I added “caption” to the first field, added another field to populate with the rest of the items listed in the post props - “username” and “imageUrl”.

Firebase found a middle ground to combine these 2,  thereby solving the problem of lack of SQL functionality in NoSQL database, utilizing some sort of document collection structure. Hence, I created a collection document. Every single “post” is a document (that is, we have one collection for “post”) and multiple documents inside of it, which each will resemble a post on the Instagram clone.

I entered value for each field, and clicked “auto-ID”, and then saved.

Then, I connected the react to firebase database. To do this, I clicked on the settings icon on the side bar displaying “Project Overview”, then clicked “Project settings”, then scrolled to the button to then click “config” and then copied the code and pasted to a file I created called firebase.js, which will then be responsible for all the firebase config settings for this app.