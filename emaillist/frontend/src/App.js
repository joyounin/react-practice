import React, { useState, useEffect } from "react";
import "./assets/css/App.css";
import Searchbar from "./Searchbar";
import RegisterForm from "./RegisterForm";
import Emaillist from "./Emaillist";

function App(props) {
  const [emails, setEmails] = useState([]);

  const fetchemaillist = async () => {
    try {
      const response = await fetch("/api/emaillist", {
        method: "get",
        headers: {
          Accept: "application/json",
        },
      });

      // response가 200==ok가 아니면
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();
      if (json.result !== "success") {
        throw new Error(`${json.result} ${json.message}`);
      }

      setEmails(json.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const fetchemail = async (keyword) => {
    try {
      const response = await fetch(`/api/email?keyword=${keyword}`, {
        method: "get",
        headers: {
          Accept: "application/json",
        },
      });

      // response가 200==ok가 아니면
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();
      if (json.result !== "success") {
        throw new Error(`${json.result} ${json.message}`);
      }

      setEmails(json.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const addEmail = async (firstName, lastName, email) => {
    const newEmail = {
      no: null,
      firstName: firstName,
      lastName: lastName,
      email: email,
    };

    try {
      const response = await fetch(`/api/insert`, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEmail),
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();
      if (json.result !== "success") {
        throw new Error(`${json.result} ${json.message}`);
      }

      setEmails([json.data, ...emails]);
    } catch (err) {
      console.log(err.message);
    }
  };

  const deleteEmail = async (no) => {
    try {
      const response = await fetch(`/api/delete/${no}`, {
        method: "delete",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();
      if (json.result !== "success") {
        throw new Error(`${json.result} ${json.message}`);
      }
      console.log("data:" + json.data);
      setEmails(emails.filter((email) => email.no !== json.data));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchemaillist();
  }, []);

  return (
    <div id="App" className={"App"}>
      <RegisterForm callbackAddEmail={addEmail} />
      <Searchbar callback={fetchemail} />
      <Emaillist emails={emails} callbackDeleteEmail={deleteEmail} />
    </div>
  );
}

export default App;
