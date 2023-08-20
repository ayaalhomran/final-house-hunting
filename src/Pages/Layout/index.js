import React from 'react';
import {NavBar} from '../../Components'
import {Cards} from '../../Components'


const Layout = ({children})=> {
return <>
<NavBar/>
 {children}
 <Cards/>
</>
}

export default Layout;