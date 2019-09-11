import * as React from 'react';

const useHeader = () => {
  const NullComponent = () => null;
  const [HeaderComponent, setHeader] = React.useState(NullComponent);
  function noHeader() {
    setHeader(null);
  }

  function Header() {
    return HeaderComponent !== null ? HeaderComponent : null;
  }
  return { Header, setHeader, noHeader };
};

export default useHeader;
