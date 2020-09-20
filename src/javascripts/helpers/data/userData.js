import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getUser = (userObj) => {
  axios
    .get(`${baseUrl}/farmers.json?orderBy="uid"&equalTo="${userObj.uid}"`)
    .then((resp) => {
      if (Object.values(resp.data).length === 0) {
        axios
          .post(`${baseUrl}/farmers.json`, {
            image: userObj.photoUrl,
            uid: userObj.uid,
            displayName: userObj.displayName,
            email: userObj.email,
            lastSignInTime: userObj.metadata.lastSignInTime,
          })
          .then(console.warn('added')); // POST OBJECT TO FARMERS
        // {
        //   image:
        //   uid:
        //   displayName:
        //   email:
        //   lastSignInTime:
        // }

        // use axios.post
        // pass it the url ${baseUrl}/farmers.json
        // pass it an object
      } else {
        console.warn('User Exists');
      }
    });
};

export default { getUser };
