import React, {Component} from "react";

import Country from './genres/Country';
import Pop from './genres/Pop';
import Rock from './genres/Rock';

class GenreList extends Component {
    render(){
        return(
            <div>
                genres:
                <span>Blues </span>
                <span>Country </span>
                <span>Pop </span>
                <span>Rap </span>
                <span>Rock </span>
                <div>Checks to make sure components are working:</div>
                <Country /><Pop /><Rock />
            </div>
        )
    }
}

export default GenreList;