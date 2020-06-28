Teoretisk del BongBong
----------

När man tar sig in på en webbplats så skickas det en GET till URL:n som man man angett, URL:n svarar då med en statuskod samt skickar tillbaka innehållet som användaren angett. Denna kod ser inte användare men kan se en kod om det är något fel på den kontaktade servern.

------

Get - Hämtar data från angiven path
Post - Skapar data på angiven path
Put - Ersätter innehåll i del av angiven path
PATCH - Ersätter del/delar av datan på pathen
Delete - Tar bort del i angiven path

-------

http//: - Protokoll
localhost - Domännamn
3000 - Portnummer
users - Path
?username=something - request parameter

----------

curl localhost:3000/users?name=robin
curl localhost:3000/users;name=robin
curl localhost:3000/users -H "name: robin"



------

Backend
Frontend

This project was bootstrapped with Create React App.
Available Scripts

In the project directory, you can run:
yarn start

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.
yarn test

Launches the test runner in the interactive watch mode.
See the section about running tests for more information.
yarn build

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.
yarn eject

Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
Learn More

You can learn more in the Create React App documentation.

To learn React, check out the React documentation.
Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting
Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size
Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app
Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration
Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment
yarn build fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
