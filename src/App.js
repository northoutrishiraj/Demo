 
import React from 'react';
import {observer} from 'mobx-react-lite'
import TwitterLogin from 'react-twitter-authentication/lib/react-twitter-login-component.js';

const App = observer(() => {
    
    const responseErrorTwitter = async (response) => {
        console.log(response);
    };
    const responseSuccessTwitter = async (response) => {
        //do something
      
    };

    return (
 <TwitterLogin onFailure={responseErrorTwitter}
               onSuccess={responseSuccessTwitter}
               authenticationUrl="http://localhost:3000/auth/twitter"
               requestUrl="https://example.com/auth/twitter/url">
            Login with Twitter
  </TwitterLogin>
    );

});


export default App;
