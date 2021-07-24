<div align="center">
  <a href="https://imgbb.com/"><img src="https://i.ibb.co/NT5wLcb/TOP-TRUMPS-LOGO-60.png" alt="TOP-TRUMPS-LOGO-60" border="0"></a>
</div>

<b><h1 align='center'> Top Trumps AI </h1></b>

<h3 align='center'> Top Trumps Card Game With AI Computer Player </h3>

<h5 align="center"> Group Project - <a href="https://codeclan.com/">CodeClan</a> (May 2021) </h5>

<!-- ABOUT THE PROJECT -->
<h2 id="about-the-project"> ✅ About the Project</h2>

This was a group project undertaken as part of CodeClan's JavaScript & React module.

Our brief was to create a browser game web app, so we chose to build a Top Trumps-style card game. 

The game itself was simple however we decided to incorporate an AI computer player which made the game logic slightly more complex. 

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- OVERVIEW -->
<h2 id="getting-started"> :cloud: Overview</h2>

Below are the two views avaiable on the app. The first shows the splash screen where the user can select the difficulty of the game, Easy, Moderate, Hard - this relates directly to how often the AI computer player will take the best option possible based on its own calculations. Upon selecting the difficulty and clicking the logo, you are taken to the next screen which is the main game page.

<img width="600" height="auto" alt="splashscreen" src="https://user-images.githubusercontent.com/76786476/122687822-72aa3880-d210-11eb-991c-ff3f8116841a.png">

Here we have the main game page with two cards on display belonging to the user (left) and the computer (right). Each card has a number of attributes which are pulled from a custom API in a MongoDB database. At the start of the game, each player is dealt an equal number of cards. 

As per the rules of Top Trumps, to play the user will select an attribute on his card which he thinks will be higher than that of his opponents card. Upon selecting, the computer players card spins round with an animated card flip to show their card. The player in plays card is always highlighted with a fluorescent green box-shadow. If the user loses a round, the computer takes control and plays. Once either player has 0 cards left, the other player is declared the winner. 

Above the cards is the round counter to show which round is in play, with an attribute display reader to the left and right, displaying each players choice of attribute. At the bottom is the card pile showing how many cards each player has remaining, as well as the 'Draw Pile' for rounds which are a draw.

<img width="600" height="auto" alt="mainscreen" src="https://user-images.githubusercontent.com/76786476/122687828-7dfd6400-d210-11eb-94ec-adcbf2326b75.png">

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- GETTING STARTED -->
<h2 id="getting-started"> :book: Getting Started</h2>

<p>To run the app:</p
  
<ol>
  <li>Fork this repository.</li>
  <li>Run 'npm install' in both client and server directory from your terminal.</li>
  <li>Run 'npm install express, bodyparser, cors, mongodb' in server directory.</li>
  <li>Run 'npm -D nodemon' in server directory</li>  
  <li> Ensure below scripts are in server package.json module:</li>
    <ol>
      <li> "server:dev": "nodemon server.js" </li>
      <li> "seeds": "mongo < db/seeds.js" </li>
    </ol>    
  <li> Run 'npm run seeds' in server directory to seed the mongodb database </li>
  <li> Run 'npm run server:dev' in server directory  </li>
  <li> Run 'npm start' in client directory </li>
  <li> If your browser does not automatically open, go to http://localhost:3000/ to play. </li>
</ol>









