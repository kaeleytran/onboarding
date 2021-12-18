/* eslint-disable react/function-component-definition */
import PropTypes from 'prop-types';
import React from 'react';

export default function Post({ author, body }) {
  return (
    <>
      <div>
        Author:
        {author}
      </div>
      <div>
        Body:
        {body}
      </div>
    </>
  );
}

Post.propTypes = {
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
