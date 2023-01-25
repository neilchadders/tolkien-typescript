
import { useEffect, useState } from 'react';

const App = () => {
  const [quote, setQuote] = useState()
  const [character, setCharacter] = useState();

  useEffect(() => {
    const headers = {
      'Accept': 'application/json',
      'Authorization': 'Bearer e_VutD0QN1FtMnmeq9Um'
    }
    const fetchData = async () => {
      const rawQuotes = await fetch('https://the-one-api.dev/v2/character', {
        headers: headers
      })
      const quotes = await rawQuotes.json();
      console.log(quotes)
      const quote = quotes.docs[Math.floor(Math.random() * quotes.docs.length)];
      setQuote(quote.wikiUrl)
      setCharacter(quote.name)

      /*const rawCharacters = await fetch('https:/ / the - one - api.dev / v2 / character ? _id = ' + quote.character, { headers: headers })
      const characters = await rawCharacters.json();
      const character = characters.docs[0];
      setCharacter(character.name) */
    };

    fetchData();
  }, []);

  return (
    <div>
      <blockquote>{quote}</blockquote>
      <cite>- {character}</cite>
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