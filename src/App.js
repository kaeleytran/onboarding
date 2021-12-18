/* eslint-disable react/function-component-definition */
/* eslint-disable func-names */
import React from 'react';
import PostsDisplay from './PostsDisplay';
import Input from './PostAdd';
import './App.css';

function App() {
  return (
    <>
      <PostsDisplay />
      <Input />
    </>
  );
}

export default App;
