import React from 'react';
import NavPanel from '../components/NavPanel';

const MainTemplate: React.FC = ({ children }) => (
   <>
      <NavPanel>{children}</NavPanel>
   </>
);

export default MainTemplate;
