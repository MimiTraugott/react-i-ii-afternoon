import React, { Component } from 'react';
import CardInfo from "./CardInfo"
import './App.css';
import cardsData from './data'
import Button from './Button'

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentCardIndex: 0,
      cardsLength: cardsData.length
    }
    this.changeCard = this.changeCard.bind(this)
  }

  changeCard(cardDirection) {
    const nextCardIndex = this.state.currentCardIndex + 1
    const previousCardIndex = this.state.currentCardIndex - 1
    // const newCardIndex = cardDirection === "Next" ? nextCardIndex : previousCardIndex
    let newCardIndex
    if (cardDirection === "Next") {
      newCardIndex = nextCardIndex
    } else {
      newCardIndex = previousCardIndex
    }
    if (newCardIndex < 0) {
      newCardIndex = this.state.cardsLength - 1
    } else if (newCardIndex >= this.state.cardsLength) {
      newCardIndex = 0
    }

    this.setState({ currentCardIndex: newCardIndex })
  }
  render() {
    return (<div>
      <CardInfo
        cardsLength={this.state.cardsLength}
        card={cardsData[this.state.currentCardIndex]}
        currentCardIndex={this.state.currentCardIndex}
      />
      <div>
        <Button
          onClick={this.changeCard}
          direction="Next"
        />
        <Button
          onClick={this.changeCard}
          direction="Previous"
        />
      </div>
    </div>)
  }
}

//componentdidmount later


export default App;
