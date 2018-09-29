import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import routes from '../routes';

const AuthorSummary = ({author}) => (
  <div className={`post-container container`}>
    <h3>{author}</h3>
   </div>
);

AuthorSummary.propTypes = {
  author: PropTypes.object.isRequired,
};

export default AuthorSummary;