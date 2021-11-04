import React from "react";
import Navbar from '../Navbar';

function Header(props){
    const { contactSelected, setContactSelected } = props;
 
    return (
        <header>
        <h1 data-testid="link" href="/">
            Caroline Luce
        </h1>
         <Navbar   contactSelected={contactSelected}
      setContactSelected={setContactSelected}></Navbar>
     </header>
 );
};

export default Header;