import * as React from 'react';

import { Link } from '@reach/router';

import './style.css';

interface Tag {
  tagName: string;
}

export default ({ tagName }: Tag) => (
  <div className="tag">
    <Link to={`/blog/tags/${tagName}/`}>
      <span className="tag__name">{`${tagName}`}</span>
    </Link>
  </div>
);
