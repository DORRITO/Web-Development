import React from 'react';

//////////////////////////////////
export class DisablePlayer extends React.Component{

    onCheckboxChange(e) {
        let isChecked = e.target.checked
        console.log(isChecked)
    }

    render(){
        return(
            <input type="checkbox" onChange={this.onCheckboxChange.bind(this)} />
        );
    }
};/////////////////////////////////

export default DisablePlayer;