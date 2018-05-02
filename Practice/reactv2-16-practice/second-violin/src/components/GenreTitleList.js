import React, {Component} from "react";

import Blues from './genres/Blues';
import Country from './genres/Country';
import Pop from './genres/Pop';
import Rap from './genres/Rap';
import Rock from './genres/Rock';

class GenreTitleList extends Component {
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
                <Blues /><Country /><Pop /><Rap /><Rock />
            </div>
        )
    }
}

export default GenreTitleList;