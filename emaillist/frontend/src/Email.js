import React from "react";

const Email = ({ no, firstName, lastName, email, callbackDeleteEmail }) => {
  return (
    <li>
      {firstName}
      {lastName}
      <br />
      {email}
      <a href="#" onClick={() => callbackDeleteEmail(no)}></a>
    </li>
  );
};

export default Email;
