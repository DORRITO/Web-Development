import React, {Component} from "react";

import Rock from './genres/Rock';

class Genre extends Component {
    render(){
        return(
            <div>
                "genre"
                <Rock />
            </div>
        )
    }
}

export default Genre;