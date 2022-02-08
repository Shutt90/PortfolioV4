import React from 'react';
import Button from '/components/Button';

function LoginForm() {
  return (
  <>
    <form method="POST" action="/api/login">
        <input type="text" placeholder="Username" name="username" id="username"></input>
        <input type="password" placeholder="Password" name="password" id="password"></input>
        <Button type="submit" text="Submit"/>
    </form>
  </>
  );
}

export default LoginForm;
