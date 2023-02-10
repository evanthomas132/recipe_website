import './App.css';
import { useEffect, useState } from 'react'
import Recipe from './components/Recipe';

function App() {

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')


  const getRecipes = async () => {
    const api = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&imageSize=REGULAR`)
    const data = await api.json()
    setRecipes(data.hits)
  }

  const getSearch = (e) => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }
  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    getRecipes()
  }, [query])

  return (
    <div className="App">
      <form className='search-form' onSubmit={getSearch}>
        <input type="text" className='search-bar' value={search} onChange={updateSearch} />
        <button className='search-button' type='submit'>Search</button>
      </form>
      <div className='recipes'>
        {recipes.map((recipe) => (
          <Recipe title={recipe.recipe.label} image={recipe.recipe.image} calories={recipe.recipe.calories} key_id={recipe.recipe.label} ingredients={recipe.recipe.ingredients} key={recipe.recipe.label} />
        ))}
      </div>
    </div>
  );
}

export default App;
