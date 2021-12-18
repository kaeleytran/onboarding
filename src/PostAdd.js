/* eslint-disable no-console */
/* eslint-disable react/function-component-definition */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';

// airtable configuration
const Airtable = require('airtable');

const airtableConfig = {
  apiKey: process.env.REACT_APP_AIRTABLE_USER_KEY,
  baseKey: process.env.REACT_APP_AIRTABLE_BASE_KEY,
};
const base = new Airtable({ apiKey: airtableConfig.apiKey })
  .base(airtableConfig.baseKey);

// eslint-disable-next-line react/function-component-definition
// function for form
export default function Input() {
  const [post, setPost] = useState('');
  const [author, setAuthor] = useState('');

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setAuthor(newName);
    console.log(newName);
  };

  const handlePostChange = (event) => {
    const newPost = event.target.value;
    setPost(newPost);
    console.log(newPost);
  };

  // handleSubimt includes submitting data from form to airtable
  const handleSubmit = (event) => {
    event.preventDefault();
    base('Posts').create([
      {
        fields: {
          Body: post,
          Author: author,
        },
      },
    ], (err, records) => {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach((record) => {
        console.log(record.getId());
      });
    });
    setAuthor('');
    setPost('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleNameChange}
        placeholder="author"
      />
      <div>
        <input
          type="text"
          onChange={handlePostChange}
          placeholder="post body"
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
