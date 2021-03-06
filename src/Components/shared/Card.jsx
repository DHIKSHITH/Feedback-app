import React from 'react';

export const Card = ({children,reverse}) => {
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;
};
