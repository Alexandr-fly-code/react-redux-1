import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeName } from './redux/actions';

import './App.css';

function App({ ...rest }) {
  return (
    <div className="App">

      <p onClick={() => rest.changeName('Alexandr')}>{rest.name}</p>
    </div>
  );
}

const MSTP = (store) => {
  return { name: store.name }
};

const MDTP = (dispatch) => {
  return {
    changeName: bindActionCreators(changeName, dispatch)
  }
};


export default connect(MSTP, MDTP)(App);
