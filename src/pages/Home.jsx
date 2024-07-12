import React from 'react';
import Header from '../components/common/Header';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Header bgClass="bg-image">
      <span style={{ color: "#3B60E4",backgroundColor:"#FFFD98",textTransform: "uppercase",letterSpacing: "10px",fontSize: "4rem",marginBottom:" 50px" }}>Our Recipes</span>
      <br /><br /><br />
      <Button
        as={Link}
        content="SEARCH RECIPES"
        color='primary'
        to="/recipes"
        size='big'
      />
    </Header>


  )
}

export default Home