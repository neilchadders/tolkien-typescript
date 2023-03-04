
import { useState } from 'react';

import './App.css'


import Title from './components/title/title.component'
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import characterArr from './characters';
import Inscription from './components/inscription/inscription';


const App = () => {

  const [searchField, setSearchField] = useState('')



  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  const filteredCharacters = characterArr.filter((character) => {
    return character.name.toLowerCase().includes(searchField);
  })

  return (
    <div className='App' style={{

      backgroundColor: "#F5DD90",
      backgroundSize: "cover"

    }}>
      <Title />
      <Inscription />


      <SearchBox
        className="search-box"
        placeholder="search characters"
        onChangeHandler={onSearchChange}
      />

      <CardList className="main-section" characters={filteredCharacters} />


    </div>

  );
}

export default App;
