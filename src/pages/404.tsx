import React from 'react';
import { HeaderContext } from '../components/Providers';

const NotFoundPage = () => {
  const { noHeader } = React.useContext(HeaderContext);
  noHeader();
  return (
    <div>
      <h1>Page not found</h1>
      <p>The requested page is unavailable.</p>
    </div>
  );
};

export default NotFoundPage;
