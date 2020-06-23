import * as React from 'react';
import { withLayout } from '@/Layout';

const NotFoundPage = () => (
  <>
    <section>
      <div>
        <h1>You are here!</h1>
        <h2>But nothing found for you #404</h2>
      </div>
    </section>
  </>
);

export default withLayout(NotFoundPage);
