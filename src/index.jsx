// External modules
import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { createStore, combineReducers } from "redux";

// Internal modules
import "../assets/stylesheets/application.scss";
import App from "./components/app";

// Reducers
// import photosReducer from "./reducers/photos_reducer";
// import selectedPhotoReducer from "./reducers/selected_photo_reducer";

// const reducers = combineReducers({
//   flats: photosReducer,
//   selectedPhoto: selectedPhotoReducer
// });

// Render an instance of the component in the DOM
// ReactDOM.render(
//   <Provider store={createStore(reducers)}>
//     <App />
//   </Provider>,
//   document.getElementById("app")
// );
const root = document.getElementById('root');
ReactDOM.render(<App />, root);
