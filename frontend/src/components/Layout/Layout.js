import Header from './Header'
import  Children  from 'react';

const Layout = ({ Children }) => {
  return (
    <>
      <Header />
      <div>{Children}</div>
    </>
  );
};
export default Layout