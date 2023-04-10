import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// {
// "username": "Jacques Gluke",
// "tag": "jgluke",
// "location": "Ocho Rios, Jamaica",
// "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
// "stats": {
//   "followers": 5603,
//   "views": 4827,
//   "likes": 1308
// }
// }

// ReactDOM.render(
//   <Profile
//     username={user.username}
//     tag={user.tag}
//     location={user.locatioon}
//     avatar={user.avatar}
//     followers={user.stats.followers}
//     views={user.stats.views}
//     likes={user.stats.likes}
//   />,
//   document.getElementById('root')
// );
