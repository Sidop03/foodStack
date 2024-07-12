import React from 'react'
import { Container, Header, Grid } from 'semantic-ui-react';
import RecipeListItem from './RecipeListItem';

const Recipelist = ({ recipes, searchedQuery }) => {
  return (
    <Container>
      <Header
        size="huge"
        content={`RECIPE LIST FOR ${searchedQuery}`}
        textAlign='center'
      />
      <Grid columns={4} doubling>
        {recipes.map(recipe => (
          <Grid.Column key={recipe.id}>
            <RecipeListItem recipe={recipe} />
          </Grid.Column>
        ))}
      </Grid>
    </Container>
  );
}

export default Recipelist;
