import React from 'react'
import { useState } from 'react';
import { Grid,Form,Input } from 'semantic-ui-react';

const Search = ({setSearchedQuery}) => {

  const [value,setValue]=useState("");
  const onFormSubmit = ()=>{
    setSearchedQuery(value);
  }

  return (
    <Grid columns={2} textAlign='center' className='search-box'>
      <Grid.Column>
        <h1 className='search-heading'>Search recipes with <span style={{color:"#777"}}>FoodStack</span></h1>
        <h4>Input recipes seperated by comma</h4>
        <Form onSubmit={onFormSubmit}>
          <Input
            placeholder="tomato,potato,pizza"
            action={{icon:'search',color:'blue'}}
            onChange={(e)=>setValue(e.target.value)}
            value={value}
          />
        </Form>
      </Grid.Column>
    </Grid>
  )
}

export default Search