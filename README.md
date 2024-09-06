# Live Chat is an app that showcases web sockets in use displaying live chat data alongside a live user count.

## This was part of a group project being able to research, understand and deploy it to seee the web sockets in action. It was created using a vanilla monorepo setup using vite and deployed on Vercel, The about page provides links to documentation that was used. The user stories fpr this project were the following:

- The user will find the app easy to navigate
- The app needs to be visually appealing to the eye
- The app will need install and use web socket
- The app will include resources used for the user if they are intersted in further reading and using it themselves
- The user will see a live user count as more people go onto the website or if it is opened a few times in the web browser
- The user will be able to submit a message and see the messages of others appear
- The user needs to feel excited or suprised once thet submit the message - utilising the gradient colouring on the text using CSS

One issue we struggled with deploying a vite file with pages on Vercel - tried muitple differeent debugging solutions such as adding the about.html file into a folder, changing the path and using . Through a little reserach we came across this “Vite Production Build” https://vitejs.dev/guide/build#multi-page-app reseouce which helped resolve the isssue and successfully deployed on Vercel.
