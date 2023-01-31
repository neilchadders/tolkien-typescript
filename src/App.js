
import { useEffect, useState } from 'react';

import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import characterArr from './characters';


const App = () => {
  console.log('render')
  const [searchField, setSearchField] = useState('')
  const [characters, setCharacters] = useState('')


  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  const filteredCharacters = characterArr.filter((character) => {
    return character.name.toLowerCase().includes(searchField);
  })

  return (
    <div className='App'>
      <h1 className='app-title'>Tolkien Character Finder</h1>


      <SearchBox
        className="search-box"
        placeholder="search characters"
        onChangeHandler={onSearchChange}
      />

      <CardList characters={filteredCharacters} />


    </div>

  );
}

export default App;
