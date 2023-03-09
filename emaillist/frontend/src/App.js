import React from 'react';
import './assets/css/App.css';
import Searchbar from './Searchbar';
import RegisterForm from './RegisterForm';
import Emaillist from './Emaillist';
import emails from './assets/json/data.json';


function App(props) {
    return (
        <div id='App' className={'App'}>
           <RegisterForm />          
           <Searchbar />
           <Emaillist emails={emails}/>
        </div>
    );
}

export default App;