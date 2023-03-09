import React from 'react';
import styles from './assets/css/Emaillist.css';
import emails from './assets/json/data.json';

const Emaillist = () => {
    return (
        <ul className={styles.Emaillist}>
             <li>
            {
                emails.map(email => <li>

                    {email.firstName + email.lastName}
                    <br/>
                    {email.email}
                </li>)
                }
            </li>
        </ul>
    );
};

export default Emaillist;