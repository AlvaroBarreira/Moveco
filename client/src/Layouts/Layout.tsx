import React from 'react';
import { Navbar, Footer } from './index';

interface Props {
    children: JSX.Element
}

export const Layout = ({children} : Props) => {
  return (
    <>  
        <Navbar/> 
            {children}
        <Footer values={{value: 'template'}} />
    </>
  )
}
