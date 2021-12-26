Instagram clone to be built utilizing React, CSS, JSX/HTML, Material-UI, Firebase for hosting, database and user authentication.

For customazibility, for Post component imported to App.js, I used props to pass in username, inageUrl and caption.

Then under Post component file, I parsed in that props, using destructure to parse in the exact name I have parsed in to Post component already in App.js. So, I opened the object to the props I parsed in. Hence, I added the js props in different places to the jsx code where they need to be. E.g. usernames prop goes under the h3 as {username}. Interesting thing is JSX allows you to add JavaScript code to it, to load your JS dynamically in your html (I.e. JSX). This is powerful.