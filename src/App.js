
import { useEffect, useState } from 'react';

import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';

const App = () => {
  console.log('render')
  const [searchField, setSearchField] = useState('')
  const [characters, setCharacters] = useState('')

  const characterArr =
    [
      {
        name: "Aragon",
        race: "Men",
        realm: "Gondor",
        id: '123abc'
      },

      {
        name: "Legolas",
        race: "Elf",
        realm: "Mirkwood",
        id: "321ABC"
      },
      {
        name: "Frodo",
        race: "Hobbit",
        realm: "Shire",
        id: '1abcsrqrvv98'
      },
      {
        name: "Ganalf",
        race: "Wizard",
        realm: "Gondor",
        id: '123abcweqqwv096'
      },
    ]

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
