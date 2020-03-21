import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from './redux/store';
import { Provider } from 'react-redux';

// const initialState = {
//   name: '',
//   age: ''
// };

// const changeName = () => ({
//   type: 'CHANGE_NAME'
// });

// const rootReducer = (state = initialState, action) => {
//   switch(action.type) {
//     case 'CHANGE_NAME':
//       return { ...state, name: 'Alex' }
//     default: return state;
//   }
// };

// const store = createStore(rootReducer);

// console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
