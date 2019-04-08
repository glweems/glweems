import React from 'react'

const contactForm = () => (
  <form name='contact' method='POST' data-netlify='true'>
    <label htmlFor='name'>
      Your Name: <input type='text' name='name' />
    </label>
    <label htmlFor='email'>
      Your Email: <input type='email' name='email' />
      Message: <textarea name='message' />
    </label>
    <button type='submit'>Send</button>
  </form>
)

export default contactForm
