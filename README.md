# Independent Living Care Services 

## Table of Contents

- [Description](#description)
- [Built With](#built-with)
- [Prerequisites](#prerequisite)
- [Installation](#installation)
- [Usage](#usage)
    

## Description

Breach Buddy is used for those who want to find new friends who play Rainbow Six Siege. This app allows users to register an account and customize their profile to match theie Ubisoft profile they use in Rainbow Six Siege. It also includes the ability to search for users by rank within the game, and game mode they play. This provides a filtered match of users who able to be friended with the click of a button. After friends are added to your list, you can find them in your friends list, connect with them, and begin playing! 

I want to add in an instant messaging feature with socket.io in the future. This was developed for the intended user for me personally but it would be nice to have others join as well.

## Built With

<a href="https://www.w3schools.com/w3css/defaulT.asp"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" height="40px" width="40px" /></a>
<a href="https://www.w3schools.com/html/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" height="40px" width="40px" /></a>
<a href="https://www.w3schools.com/js/default.asp"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="40px" width="40px" /></a>
<a href="https://www.postgresql.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" height="40px" width="40px" /></a>
<a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a>
<a href="https://redux.js.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" height="40px" width="40px" /></a>
<a href="https://nodejs.org/en/"><img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-plain.svg" height="40px" width="40px" /></a>
## Getting Started

This project should be able to run in your favorite IDE. I used VS code while building it. 
<a href="https://code.visualstudio.com/"><img src="https://github.com/devicons/devicon/blob/master/icons/vscode/vscode-original-wordmark.svg" height="40px" width="40px" /></a>

### Prerequisites
Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)

### Installation

1. Fork the repository
2. Copy the SSH key in your new repository
3. In your terminal type...  `git clone {paste SSH link}`
4. Navigate into the repository's folder in your terminal
5. Open VS Code (or editor of your choice) and open the folder
6. In the terminal of VS Code run `npm install` to install all dependencies
    (this is important to the name npm packages that are required to run this app.)
7. Create a database named `ilcs` in PostgresSQL
If you would like to name your database something else, you will need to change `prime_app` to the name of your new database name in `server/modules/pool.js` file
8. The queries in the database.sql file are set up to create all the necessary tables that you need to test the app. Copy, paste, and execute those queries in the SQL query of the database.
9. Run `npm run server` in your VS Code terminal
10. Open a second terminal by clicking the + button and run `npm run client`

## Usage

Once everything is installed and running it should open in your default browser - if not, navigate to http://localhost:3000/#/.

## Deployment
Start off by registering as a user and get your friends to join too!

Chao!