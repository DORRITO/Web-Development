import React, { Component } from 'react';
import {Segment} from 'semantic-ui-react';

class Contact extends Component {
  render() {
    return (
      <div className="Contact" >
        <Segment color='teal' textAlign='center' compact>
            <h1>Contact Us</h1>
            <h3>(928) 919-4666</h3>
            <h3>1981 S Avenue B, Yuma, AZ 85364</h3>
        </Segment>
      </div>
    );
  }
}

export default Contact;