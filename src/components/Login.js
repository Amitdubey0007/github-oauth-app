import React from 'react';
import { useDispatch } from 'react-redux';
import { setAccessToken } from '../redux/authSlice';

const CLIENT_ID = 'YOUR_GITHUB_CLIENT_ID'; //

const REDIRECT_URI = 'https://github.com/trending'; // use this as a redirect url when u create on github

const Login = () => {
  const dispatch = useDispatch();

 

    const handleLogin = () => {
        const params = new URLSearchParams({
          client_id: CLIENT_ID,
          redirect_uri: REDIRECT_URI,
          scope: 'repo',
        });
      
        window.location.href = `https://github.com/login/oauth/authorize?${params}`;
      };
      
      // After successful login, GitHub will redirect to the callback URL with a temporary code.
      // Extract the code from the URL and dispatch an action to store the access token.
      const handleCallback = () => {
        const searchParams = new URLSearchParams(window.location.search);
        const code = searchParams.get('code');
      
        if (code) {
          
          fetch(`YOUR_SERVER_ENDPOINT?code=${code}`)
            .then(response => response.json())
            .then(data => {
              dispatch(setAccessToken(data.access_token));
            })
            .catch(error => {
              console.error('Error exchanging code for access token:', error);
            });
        } else {
          console.error('Code not found in URL');
        }
      };
      
      // Check if the URL contains a code, indicating a callback from GitHub
      // If a code exists, handle the callback, otherwise show the login button
      if (window.location.search.includes('code=')) {
        handleCallback();
      } else {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100 bg">
              <div className="text-center"  style={{ backgroundColor: '#f8f8f8', padding: '70px', boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)' }}>
                <h2>Login with GitHub</h2>
                <button className="btn btn-primary" onClick={handleLogin}>
                  Login
                </button>
              </div>
            </div>
          );
        };
      }
 export default Login;