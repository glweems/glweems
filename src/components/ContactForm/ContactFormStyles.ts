import styled from 'styled-components'

export const Form = styled.form`
  margin: 0;
  padding: 0;

  fieldset {
    width: 100%;
    min-width: 100%;
    margin: 0 0 10px;
    padding: 0;
    border: medium none !important;
  }

  textarea {
    max-width: 100%;
    height: 100px;
    resize: none;
  }

  input[type='text'],
  input[type='email'],
  input[type='tel'],
  input[type='url'],
  textarea {
    width: 100%;
    margin: 0 0 5px;
    padding: 10px;
    background: #fff;
    border: 1px solid #ccc;
  }

  input[type='text']:hover,
  input[type='email']:hover,
  input[type='tel']:hover,
  input[type='url']:hover,
  textarea:hover {
    border: 1px solid #aaa;
    transition: border-color 0.3s ease-in-out;
  }
`
