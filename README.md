# top-trumps-project



This was a group project undertaken as part of CodeClan's JavaScript & React module.

Our brief was to create a browser game web app, so we chose to build a Top Trumps-style card game. 

The game itself was simple however we decided to incorporate an AI computer player which made the game logic slightly more complex. 



<b><u>To install:</u> </b>

Run 'npm install' in both client and server directory

Run 'npm install express, bodyparser, cors, mongodb' in server directory

Run 'npm -D nodemon' in server directory



Ensure below scripts are in server package.json module:

"server:dev": "nodemon server.js"

"seeds": "mongo < db/seeds.js"


Run 'npm run seeds' in server directory to seed the mongodb database



<b><u>To run game: </u> </b>

Run 'npm run server:dev' in server directory 

Run 'npm start' in client directory



If your browser does not automatically open, go to http://localhost:3000/ to play.
