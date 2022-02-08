import React from 'react';

function Form() {
  return (
        <form method="POST" action="/api/projects/">
            <input placeholder="Title" type="input" name="title" id="title"></input>
            <textarea placeholder="Body" name="body" id="body"></textarea>
            <input placeholder="Slug" type="input" name="slug" id="slug"></input>
            <input type="submit"></input>
        </form>
  );
}

export default Form;
