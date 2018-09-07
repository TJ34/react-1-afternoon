import React, {Component} from 'react';


export default class EvenAndOdd extends Component {
    constructor() {
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(val){
        this.setState({ userInput: val });
    }

    assignEvenAndOdds(userInput){
        let arr = userInput.split(',').map((item)=> {
            return parseInt(item);
        });
        let evens = arr.filter(e => e%2===0)
        let odds = arr.filter(e => e%2===1);

        this.setState({ evenArray: evens, oddArray: odds });

    } 
    

    render(){
        console.log(this.state)
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4> Evens And Odds </h4>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick = {() => {this.assignEvenAndOdds(this.state.userInput)}}>Split</button>
                <span className="resultsBox"> Evens: {JSON.stringify(this.state.evenArray)} </span>
                <span className="resultsBox"> Odds: {JSON.stringify(this.state.oddArray)} </span>
            </div>
        )
    }



    }