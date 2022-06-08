# Apex Stats Tracker

A web application to view your Apex Legends game statistics

<img src="client\src\assets\apex-tracker-stats.png" alt="J" width="200"/>
<!-- ![apex-tracker-stats](client\src\assets\apex-tracker-stats.png) -->

### Tech stack
- Node.js
- Vue.js

### Requirements
- Node.js >= 12.0.0

### Getting started
Clone the repository `https://github.com/garrettmmoore/apex-stats-tracker.git`

Open the project in Visual Studio Code and install node dependencies.

From the root directory, run the following command to install the node dependencies for the backend server:

```npm install```

Navigate into the client directory and run the following command to install the node dependencies for the client:

```
cd client
npm install
```

Navigate back to the root directory, create a `.env` file, and add the following configuration variables to the file:

```
PORT=5000
TRACKER_API_URL=
TRACKER_API_KEY=
```

Create a developer account at [Tracker.gg](https://tracker.gg/developers) to register for an API Key and copy the Tracker API Url and Tracker API Key into the .env file.

Run the following command from the root directory to build the project and spin up both the backend and frontend servers:

```npm run dev```

The backend server will run on port 5000 by default: `http:localhost:5000`

The web application will open in the default browser at: `http://localhost:8080`


