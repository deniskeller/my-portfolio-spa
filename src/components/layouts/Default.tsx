import React, { useEffect } from 'react';

import { Navbar } from '@nav/index';
import { Main } from '@content/index';

const Default: React.FC = ({ children }) => {
  return (
    <div className=''>
      <Navbar />
      <Main>{children}</Main>
    </div>
  );
};

export default Default;
