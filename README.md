# top-trumps-project



This was a group project undertaken as part of CodeClan's JavaScript module.

Our brief was a browser game web app, so we chose to build a Top Trumps game. 

The game itself was simple however we decided to incorporate an AI computer player which made the game logic slightly more complex. 



To install: 

Run 'npm install' in both client and server directory

Run 'npm install express, bodyparser, cors, mongodb' in server directory

Run 'npm -D nodemon' in server directory

Run 'npm run seeds' in server directory to seed the mongodb database



Ensure below scripts are in server package.json module:

"server:dev": "nodemon server.js"

"seeds": "mongo < db/seeds.js"



To run game: 

Run 'npm run server:dev' in server directory 

Run 'npm start' in client directory



If your browser does not automatically open, go to http://localhost:3000/ to play.
