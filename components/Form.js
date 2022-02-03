import React from 'react';

function Form() {
  return (
        <form method="post" action="/api/projects/">
            <input type="input" name="slug" id="slug"></input>
            <input type="input" name="title" id="title"></input>
            <textarea name="body" id="body"></textarea>
            <input type="submit"></input>
        </form>
  );
}

export default Form;
