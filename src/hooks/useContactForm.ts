import * as React from 'react';
import axios from 'axios';
import * as qs from 'query-string';

interface InitialState {
  email: string;
  msg: string;
}
const useSignUpForm = () => {
  const [inputs, setInputs] = React.useState({ email: '', msg: '' });

  const handleChange = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) => {
    e.persist();
    const { name, value } = e.currentTarget;
    setInputs(
      (state) =>
        ({
          ...state,
          [name]: value,
        } as Pick<InitialState, keyof InitialState>)
    );
  };

  const handleSubmit = (e: React.FormEvent<any>) => {
    if (e) e.preventDefault();

    axios({
      url: '/',
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      data: qs.stringify({ 'form-name': 'contact', ...inputs }),
    })
      .then(() => {
        setInputs((state) => ({
          ...state,
          success: 'Form submitted successfully!',
        }));
      })
      .catch(() =>
        setInputs((state) => ({
          ...state,
          error: 'Form could not be submitted.',
        }))
      );
  };

  return {
    handleSubmit,
    handleChange,
    inputs,
  };
};

export default useSignUpForm;
