import React from 'react'
import {Menu} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

 
const logo= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb4KiqxnbPkoNkkZt_AjmPJDHw-xukH9aAAqlvaJnH_g&s"

const Navbar = () => {
  
  return (
    
    <Menu borderless fixed='top' style={{ backgroundColor: '#FFFD98' }}>
      <Menu.Item>
        <img src={logo} alt="logo" style={{width:200}}/>
      </Menu.Item>
      <Menu.Item name="Home" as={Link} to="/" style={{ fontSize: '1.5rem'}}/>
      <Menu.Item name="Recipes" as={Link} to="/recipes" style={{ fontSize: '1.5rem' }}/>
      {/* <Menu.Item name="Community" as={Link} to="/community" style={{ fontSize: '1.5rem' }}/> */}
    </Menu>
  )
}

export default Navbar