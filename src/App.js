import { Component } from 'react'


import './App.css';

class App extends Component {

  constructor() {    //access and generate the state. Constructor method runs before everything else
    super();    //super calls the constructor method on Component

    this.state = {
      characters: [
        { name: "Frodo", id: '1234' },
        { name: "Sam", id: '12356' },
        { name: "Merry", id: '1278' },
        { name: "Pippin", id: '1234987' }
      ],//if using lists / map - KEY WILL BE NEEDED
    };
  }



  render() {
    return (
      <div className="App">
        {this.state.characters.map(character => {   //if using lists / map - KEY WILL BE NEEDED
          return <h1 key={character.id}>{character.name}</h1> // what you return must be on same line
        })
        }
      </div>
    );
  }
}
export default App;
