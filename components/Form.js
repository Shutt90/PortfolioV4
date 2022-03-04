import { useRouter } from 'next/router';
import React from 'react';
import Button from './Button';
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
            <select className={styles.selectInput} name="tech" id="tech" multiple>
              <option value='Sass' className={styles.option}>Sass</option>
              <option value='Tailwind' className={styles.option}>Tailwind</option>
              <option value='MaterialUI' className={styles.option}>MaterialUI</option>
              <option value='JavaScript' className={styles.option}>JavaScript</option>
              <option value='GSAP' className={styles.option}>GSAP</option>
              <option value='React' className={styles.option}>React</option>
              <option value='NextJS' className={styles.option}>NextJS</option>
              <option value='Framer Motion' className={styles.option}>Framer Motion</option>
              <option value='HTML' className={styles.option}>HTML</option>
              <option value='PHP' className={styles.option}>PHP</option>
              <option value='CodeIgniter' className={styles.option}>CodeIgniter</option>
              <option value='Laravel' className={styles.option}>Laravel</option>
              <option value='Phaser' className={styles.option}>Phaser</option>
              <option value='Go' className={styles.option}>Go</option>
              <option value='C++' className={styles.option}>C++</option>
              <option value='C#' className={styles.option}>C#</option>
            </select>
            
        </form>
        :
        <form method="POST" className={className} action={`/api/blog/`}>
          <input className={styles.textInput} placeholder="Title" type="input" name="title" id="title"></input>
          <textarea className={styles.textarea} placeholder="Body" name="body" id="body"></textarea>
          <input className={styles.textInput} placeholder="Slug" type="input" name="slug" id="slug"></input>
          <Button type="submit" text="Submit"/>
        </form>
  );
}

export default Form;
