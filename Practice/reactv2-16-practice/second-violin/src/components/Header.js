import React, {Component} from "react";

class Header extends Component{
    render(){
        return(
            <Segment className="App-segment" raised color='teal'>
                <Header as="h2" className="App-header" textAlign="center" verticalalign="middle">
                    <div className="App-title">Welcome to Second Violin</div>
                </Header>
            </Segment>
        )
    }
}