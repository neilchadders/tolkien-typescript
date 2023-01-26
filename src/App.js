
import { useEffect, useState } from 'react';
import CardList from './components/card-list/card-list.component';

const App = () => {

  const [name, setName] = useState()
  const [race, setRace] = useState()
  const [wiki, setWiki] = useState();

  useEffect(() => {
    const headers = {
      'Accept': 'application/json',
      'Authorization': 'Bearer e_VutD0QN1FtMnmeq9Um'
    }
    const fetchData = async () => {
      const rawCharacter = await fetch('https://the-one-api.dev/v2/character', {
        headers: headers
      })
      const characterObj = await rawCharacter.json();
      console.log(characterObj)


      /*const character = characters.docs[Math.floor(Math.random() * characters.docs.length)];
      //setArr(characters.docs)
      setName(character.name)
      setRace(character.race)
      setWiki(character.wikiUrl)

      /*const rawCharacters = await fetch('https:/ / the - one - api.dev / v2 / character ? _id = ' + quote.character, { headers: headers })
      const characters = await rawCharacters.json();
      const character = characters.docs[0];
      setCharacter(character.name) */
    };

    fetchData();
  }, []);

  return (
    <div className='App'>
      <h1 className='app-title'>Tolkien Character Finder</h1>



      {/*<SearchBox
        className="monsters-search-box"
        placeholder="search monsters"
        onChangeHandler={onSearchChange}
      /> 
   
      <CardList monsters={characters} />  */}

    </div>

  );
}

export default App;

/*

import { Component } from 'react'


import './App.css';




class App extends Component {

  constructor() {    //access and generate the state. Constructor method runs before everything else
    super();    //super calls the constructor method on Component

    this.state = {
      monsters: [],//empty initial array
    };
  }


  componentDidMount() { //use when you need to sfetch from api
    fetch('https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}', {
      headers: { Authentication: 'Bearer {e_VutD0QN1FtMnmeq9Um}' }
    })
      .then((response) => response.json()) // promise and converts to JSON
      .then((users) => this.setState(() => {
        return { monsters: users }
      },
        () => {
          
          console.log(this.state)
        }
      ));


  }// Access token: e_VutD0QN1FtMnmeq9Um

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {   //if using lists / map - KEY WILL BE NEEDED
          return (
            <h1 key={monster.id}>{monster.name}</h1> // what you return must be on same line
          )
        })
        }
      </div>
    );
  }
}
export default App;
*/