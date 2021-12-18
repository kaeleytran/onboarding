/* eslint-disable func-names */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import Post from './Post';

// airtable configuration
const Airtable = require('airtable');

const airtableConfig = {
  apiKey: process.env.REACT_APP_AIRTABLE_USER_KEY,
  baseKey: process.env.REACT_APP_AIRTABLE_BASE_KEY,
};
const base = new Airtable({ apiKey: airtableConfig.apiKey })
  .base(airtableConfig.baseKey);

// function for PostsDsiplay, sets empty parameters
// getPosts gets records from base, .then takes in records as parameter
// useEffect allows us to run this function when the component starts
const PostsDisplay = function () {
  const [posts, setPosts] = useState([]);

  const getPosts = function () {
    base('Posts').select({ view: 'Grid view' }).all()
      .then((records) => {
        setPosts(records);
      });
  };
  
  useEffect(getPosts, []);

  return posts.map((post) => (
    <Post
      key={post.id}
      author={post.fields.Author}
      body={post.fields.Body}
    />
  ));
};

export default PostsDisplay;
