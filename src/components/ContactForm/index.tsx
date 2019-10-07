import * as React from 'react';
import useContactForm from '../../hooks/useContactForm';
import { Form } from './ContactFormStyles';
import { Button } from '../Common';

const ContactForm = () => {
  const { inputs, handleChange, handleSubmit } = useContactForm();
  return (
    <Form data-netlify="true" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">
          Email Address
          <input
            type="text"
            id="email"
            name="email"
            required
            onChange={handleChange}
            value={inputs.email}
          />
        </label>
      </div>
      <div>
        <label htmlFor="msg">
          Message
          <textarea
            id="msg"
            name="msg"
            onChange={handleChange}
            value={inputs.msg}
          />
        </label>
      </div>
      <div>
        <Button type="submit">Sign Up</Button>
      </div>
    </Form>
  );
};

export default ContactForm;
