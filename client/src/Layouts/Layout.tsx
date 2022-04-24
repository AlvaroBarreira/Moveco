import React from 'react';
import { Navbar, Footer } from './index';

interface Props {
    children: JSX.Element
}

const Layout = ({children} : Props) => {
  return (
    <>  
        <Navbar values={{value: 'template'}}/> 
            {children}
        <Footer values={{value: 'template'}} />
    </>
  )
}

export default Layout