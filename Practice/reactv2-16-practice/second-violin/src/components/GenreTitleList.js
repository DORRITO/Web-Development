import React, {Component} from "react";

const page = () => {
    alert('this page');
}

class GenreList extends Component {
    render(){
        return(
            <div>
                genres: 
                <span onClick={this.page}>Blues </span>
                <span onClick={this.page}>Country </span>
                <span onClick={this.page}>Pop </span>
                <span onClick={this.page}>Rap </span>
                <span onClick={this.page}>Rock </span>
            </div>
        )
    }
}

export default GenreList;