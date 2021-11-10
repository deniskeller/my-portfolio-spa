import React from 'react';

interface Props {
  className?: string;
}

const Main: React.FC<Props> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export default Main;
