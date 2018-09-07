import React, {Component} from 'react';


export default class Palindrome extends Component{
    constructor(){
        super();

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }
    handleChange(e){
        this.setState({userInput: e})
    }
    onChange(userInput){
        let backwards = userInput.split('').reverse().join('');
        if(userInput===backwards){
            this.setState({palindrome: 'true'})
        } else {this.setState({palindrome: 'false'})}
        
    }

    render(){
        return(
            <div className = "puzzleBox filterStringPB">
                <h4> Palindrome </h4>
                <input className = "inputLine" onChange = {(e) => this.handleChange(e.target.value)}></input>
                <button className = "confirmationButton" onClick = {() => this.onChange(this.state.userInput) }> Check </button>
                <span className = "resultsBox"> Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}