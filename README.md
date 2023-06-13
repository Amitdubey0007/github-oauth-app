# GitHub OAuth Login and Trending Repositories

This is a React application that allows users to log in with their GitHub accounts using OAuth and displays trending repositories. Users can filter repositories by date range, language, etc., and view detailed information about each repository.

## Features

- GitHub OAuth Login: Users can log in to the app using their GitHub accounts using OAuth.
- Trending Repositories: The app fetches and displays trending repositories based on certain criteria like creation date, stars, etc.
- Filtering Options: Users can filter repositories by date range, language, and other relevant criteria.
- Repository Details: Users can view detailed information about each repository, including the name, author, languages, stars, forks, etc.

## Technologies Used

- React: JavaScript library for building user interfaces.
- Redux: State management library for managing the application's state.
- React Router: Library for handling routing within the React app.
- Redux Thunk: Middleware for asynchronous actions in Redux.
- Axios: Promise-based HTTP client for making API requests.
- Bootstrap: CSS framework for styling the application.
- GitHub OAuth: OAuth authentication mechanism provided by GitHub.

## Prerequisites

- Node.js: Make sure you have Node.js installed on your machine.

## Getting Started

1. Clone the repository:

   ```shell
   git clone https://github.com/Amitdubey0007/github-oauth-app.git
   
 2. Install the dependencies:

```shell
cd your-repo
npm install

  3. Configure GitHub OAuth:

Create a new OAuth App on GitHub. Follow the instructions here to create the app.

Obtain the Client ID and Client Secret provided by GitHub.

Create a .env file in the root of your project and add the following environment variables:

REACT_APP_GITHUB_CLIENT_ID=your-client-id
REACT_APP_GITHUB_CLIENT_SECRET=your-client-secret
REACT_APP_REDIRECT_URI=http://localhost:3000/callback

   4. Start the development server:

  ```shell
  npm start
  
    5. Open your browser and navigate to http://localhost:3000 to access the app.

Folder Structure
The project structure is organized as follows:

/src: Contains the main source code of the React app.
/components: Contains reusable React components used throughout the app.
/redux: Contains Redux-related files such as actions, reducers, and the store configuration.
/pages: Contains the main pages of the app, including login, repositories, repository details, etc.
/utils: Contains utility functions and helper methods.
/services: Contains service modules for handling API requests and authentication.
/styles: Contains CSS or SCSS files for styling the app.
/assets: Contains static assets like images or icons used in the app.
