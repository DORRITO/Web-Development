import React from 'react';

export default class Hello extends React.Component{
    
    onSubmit(e){
        e.preventDefault();
        alert("hi!");
    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit.bind(this)} className="hello">
                    <button>say hello</button>
                </form>
            </div>
        );
    }
}