import React from 'react';
import Button from '/components/Button';
import styles from '/styles/form.module.css'

function LoginForm() {
  return (
  <>
    <form className={styles.formContainer} method="POST" action="/api/login">
        <input className={styles.input} type="text" placeholder="Username" name="username" id="username"></input>
        <input className={styles.input} type="password" placeholder="Password" name="password" id="password"></input>
        <Button type="submit" text="Submit"/>
    </form>
  </>
  );
}

export default LoginForm;
