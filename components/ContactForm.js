import React from 'react';

function ContactForm() {
  return (
    <form method="post" action="/api/contact/">
        <input placeholder="Name" type="input" name="title" id="title"></input>
        <select type="dropdown" name="subject" id="subject">
            <option value="Pricing" name="pricing" id="pricing">Pricing</option>
            <option value="Collab" name="collab" id="collab">Collaboration</option>
            <option selected value="Discussion" name="discussion" id="discussion">Discussion</option>
        </select>
        <input placeholder="Title" type="input" name="title" id="title"></input>
        <textarea placeholder="Body" name="body" id="body"></textarea>
        <input type="submit"></input>
    </form>
  )
}

export default ContactForm;
