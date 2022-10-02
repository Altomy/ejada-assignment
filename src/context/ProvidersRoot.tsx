/**
 * ProvidersRoot Component
 *
 */

// Libraries
import React from 'react';
import ContactsProvider from './ContactsProvider';
// Components

type propsTypes = {
  children: JSX.Element;
};

// View
export default ({ children }: propsTypes) => {
  return (
    <React.Fragment>
      <ContactsProvider>{children}</ContactsProvider>
    </React.Fragment>
  );
};
