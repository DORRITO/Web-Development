import React, {Component} from "react";

import { Header, Segment } from "semantic-ui-react";

class PageHeader extends Component{
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

export default PageHeader;