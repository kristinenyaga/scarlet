import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// {/* <>
//     {
//       user?(
//         <Routes>
//           <Route exact path="/home" element={<Home />}/>
//         </Routes>

//       ):
//       (<Routes>
//         <Route exact path="/" element={<Login setUser={setUser} />}/>
//         <Route exact path="/home" element={<Home />}/>
//         <Route exact path="/register" element={<Register />}/>

//       </Routes>)
//     }
     
//       {/* < NavBar /> */}
      
//     </> */}





// {
//   "homepage",
//   "name": "my-app",
//   "version": "0.1.0",
//   "private": true,
//   "proxy": "http://localhost:3000",
//   "dependencies": {
//     "@testing-library/jest-dom": "^5.16.5",
//     "@testing-library/react": "^13.4.0",
//     "@testing-library/user-event": "^13.5.0",
//     "bootstrap": "^5.2.3",
//     "react": "^18.2.0",
//     "react-bootstrap": "^2.6.0",
//     "react-dom": "^18.2.0",
//     "react-router-dom": "^6.4.4",
//     "react-scripts": "5.0.1",
//     "web-vitals": "^2.1.4"
//   },
//   "scripts": {
//     "start": "PORT=4000 react-scripts start",
//     "build": "react-scripts build",
//     "test": "react-scripts test",
//     "eject": "react-scripts eject"
//   },
//   "eslintConfig": {
//     "extends": [
//       "react-app",
//       "react-app/jest"
//     ]
//   },
//   "browserslist": {
//     "production": [
//       ">0.2%",
//       "not dead",
//       "not op_mini all"
//     ],
//     "development": [
//       "last 1 chrome version",
//       "last 1 firefox version",
//       "last 1 safari version"
//     ]
//   }
// }
