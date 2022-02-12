import { useRouter } from 'next/router';
import React from 'react';
import styles from '/styles/contactpage.module.css'



function Form({className}) {
  const router = useRouter()
  const path = router.pathname

  return (
    path === '/projects' ? 
        <form method="POST" className={className} action={`/api/projects/`}>
            <input className={styles.textInput} placeholder="Title" type="input" name="title" id="title"></input>
            <textarea className={styles.textarea} placeholder="Body" name="body" id="body"></textarea>
            <input className={styles.textInput} placeholder="Slug" type="input" name="slug" id="slug"></input>
            <input type="submit"></input>
        </form>
        :
        <form method="POST" className={className} action={`/api/blog/`}>
          <input className={styles.textInput} placeholder="Title" type="input" name="title" id="title"></input>
          <textarea className={styles.textarea} placeholder="Body" name="body" id="body"></textarea>
          <input className={styles.textInput} placeholder="Slug" type="input" name="slug" id="slug"></input>
          <input type="submit"></input>
        </form>
  );
}

export default Form;
