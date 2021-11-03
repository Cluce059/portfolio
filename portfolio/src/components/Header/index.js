import React from "react";
import Navbar from '../Navbar';

function Header(props){
    const { contactSelected, setContactSelected } = props;
 
    return (
     <section className="header">
         <Navbar   contactSelected={contactSelected}
      setContactSelected={setContactSelected}></Navbar>
     </section>
 );
};

export default Header;