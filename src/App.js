import logo from './logo.svg';
import './App.css';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Community from './pages/Community';
import {Route, BrowserRouter as Router,Routes} from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/recipes" element={<Recipes/>}/>
        <Route path='/recipes/:recipeId' element={<RecipeDetails/>}/>
        <Route path='/community' element={<Community/>} />
      </Routes>
    </Router>
  );
}

export default App;
