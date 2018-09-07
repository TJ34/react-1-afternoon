import React, {Component} from 'react';


export default class FilterObject extends Component{
    constructor(){
        super();

        this.state = {
            cars: [
                {
                    make: "Audi",
                    model: "A4",
                    year: 2017
                },
                {
                    make: "McLaren",
                    model: "P1",
                    year: 2015
                },
                {
                    make: "BMW",
                    model: "M5"
                }
            ],
            userInput: "",
            filteredCars: []
        }
    }

    handleChange(e){
        this.setState({userInput: e})
    }

    filterCars(userInput){
        let cars = this.state.cars;
        let filteredCars = [];

        for(let i=0;i<cars.length;i++){
            if(cars[i].hasOwnProperty(userInput)){
                filteredCars.push(cars[i]);
            }
        }
        this.setState({filteredCars: filteredCars});
    }

    render(){
        return(
            <div className = "puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className = "puzzleText"> Original: {JSON.stringify(this.state.cars,null,10)}</span>
                <input className = "inputLine" onChange={(e)=> this.handleChange(e.target.value)}></input>
                <button className = "confirmationButton" onClick={() => this.filterCars(this.state.userInput)}> Filter </button>
                <span className = "resultsBox filterObjectRB"> Filtered: {JSON.stringify(this.state.filteredCars,null,10)}</span>
            </div>
        )
    }
}