import React, {Component} from 'react';


export default class FilterString extends Component{

    constructor(){
        super();

        this.state = {
            teams: ["Raiders", "Packers", "Broncos","Falcons","Eagles","Cowboys"],
            userInput: "",
            filteredTeams: []
        }
    }
    handleChange(e){
        this.setState({userInput: e})
    }

    filterNames(userInput){
        let arr = this.state.teams;
        let newArr = []
        for(let i=0;i<arr.length;i++){
            if(arr[i]===userInput){
                newArr.push(arr[i])
            }
        }
        this.setState({filteredTeams: newArr})
    }

    render(){
        return(
            <div className = "puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className = "puzzleText"> Names: {JSON.stringify(this.state.teams,null,10)}</span>
                <input className = "inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className = "confirmationButton" onClick = {() => this.filterNames(this.state.userInput)}>Filter</button>
                <span className = "resultsBox filterStringRB">Filtered Names: {JSON.stringify(this.state.filteredTeams, null,10)}</span>
            </div>
        )
    }
}