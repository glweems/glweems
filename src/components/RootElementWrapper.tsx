import React, { createContext } from 'react';
import Layout from './Layout';
import SEO from './SEO';
import { ContextProvider } from './Providers';

interface LayoutContext {
  isMenu: boolean;
}

const LayoutContext = createContext<Partial<LayoutContext>>({});

interface Props {
  children: Element;
}

const Providers = ({ children }: Props) => {
  return (
    <>
      <SEO />
      <ContextProvider>
        <Layout>{children}</Layout>
      </ContextProvider>
    </>
  );
};

export default Providers;
