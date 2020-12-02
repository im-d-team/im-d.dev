import * as React from 'react';
import { withLayout } from '@/layout';

const NotFoundPage = () => (
  <>
    <div>
      <h1>You are here!!</h1>
      <h2>But nothing found for you #404 </h2>
    </div>
  </>
);

export default withLayout(NotFoundPage);
