import React, {useState, useEffect} from 'react';
import './assets/css/App.css';
import Searchbar from './Searchbar';
import RegisterForm from './RegisterForm';
import Emaillist from './Emaillist';
import data from './assets/json/data.json';


function App(props) {
    const [emails, setEmails] = useState(data);
    const notifyKeyWordChanged = function(keyword){
        // keyword가 firstName or lastName or email
        const newEmails = data.filter(e => e.firstName.includes(keyword) || e.lastName.includes(keyword) || e.email.includes(keyword));
        setEmails(newEmails);
    }

    return (
        <div id='App' className={'App'}>
           <RegisterForm />          
           <Searchbar callback={notifyKeyWordChanged}/>
           <Emaillist emails={emails}/>
        </div>
    );
}

export default App;