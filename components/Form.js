import { useRouter } from 'next/router';
import React from 'react';


function Form({className}) {
  const router = useRouter()
  const path = router.pathname

  return (
    path === '/projects' ? 
        <form method="POST" className={className} action={`/api/projects/`}>
            <input placeholder="Title" type="input" name="title" id="title"></input>
            <textarea placeholder="Body" name="body" id="body"></textarea>
            <input placeholder="Slug" type="input" name="slug" id="slug"></input>
            <input type="submit"></input>
        </form>
        :
        <form method="POST" className={className} action={`/api/blog/`}>
          <input placeholder="Title" type="input" name="title" id="title"></input>
          <textarea placeholder="Body" name="body" id="body"></textarea>
          <input placeholder="Slug" type="input" name="slug" id="slug"></input>
          <input type="submit"></input>
        </form>
  );
}

export default Form;
