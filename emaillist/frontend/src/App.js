import React, {useState, useEffect} from 'react';
import './assets/css/App.css';
import Searchbar from './Searchbar';
import RegisterForm from './RegisterForm';
import Emaillist from './Emaillist';
import data from './assets/json/data.json';


function App(props) {
    const [emails, setEmails] = useState(data);
    const notifyKeyWordChanged = function(){
        // keyword가 firstName or lastName or email
        const newEmails = emails.filter(function(e) {return true})
    }

    return (
        <div id='App' className={'App'}>
           <RegisterForm />          
           <Searchbar />
           <Emaillist emails={emails}/>
        </div>
    );
}

export default App;