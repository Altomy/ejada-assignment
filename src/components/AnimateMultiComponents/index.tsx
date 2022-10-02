/**
 * AnimateMultiComponents Component
 *
 */

// Libraries
import React from 'react';
import AnimateMultiComponentsBase from './AnimateMultiComponentsBase';

type propsTypes = {
  children: any[];
};

// View
export default ({ children }: propsTypes) => {
  return (
    <React.Fragment>
      {children.map((trg, index) => (
        <AnimateMultiComponentsBase index={index} key={index}>
          {trg}
        </AnimateMultiComponentsBase>
      ))}
    </React.Fragment>
  );
};
