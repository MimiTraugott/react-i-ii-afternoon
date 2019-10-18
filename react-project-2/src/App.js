import React, {Component} from 'react';
import cardsData from './data'
import CardInfo from "./CardInfo"
import './App.css';

class App extends Component {
  constructor(){

    this.state = {
      currentCardIndex: 0,
      cardsLength: cardsData.length()
    }
  }



  render (){
    return (<div>
      <CardInfo 
      cardsLength={this.state.cardsLength} 
      card={cardsData}
      />
    </div>)
  }
}

//componentdidmount later


export default App;
