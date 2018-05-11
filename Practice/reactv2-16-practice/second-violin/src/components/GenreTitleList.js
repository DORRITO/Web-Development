import React, {Component} from "react";

import Blues from './genres/Blues';
import Country from './genres/Country';
import Pop from './genres/Pop';
import Rap from './genres/Rap';
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
            </div>
        )
    }
}

export default GenreList;