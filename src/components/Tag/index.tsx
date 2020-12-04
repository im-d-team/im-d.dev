import * as React from 'react';
import { Link } from '@reach/router';

import './style.css';

interface Tag {
  tagName: string;
}

export default ({ tagName }: Tag) => (
  <Link to={`/blog/tags/${tagName}/`}>
    <div className="IMD-tag">
      <span className="IMD-tag__name">{`${tagName}`}</span>
    </div>
  </Link>
);
