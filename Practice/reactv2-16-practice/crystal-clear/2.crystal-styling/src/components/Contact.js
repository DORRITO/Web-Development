import React, { Component } from 'react';
import {Button, Header, Segment, Modal} from 'semantic-ui-react';

class Contact extends Component {
  render() {
    return (
      <div className="Contact" >
        <Segment color='teal' textAlign='center' compact>
            <h1>Contact Us</h1>
            <h3>(928) 919-4666</h3>
            <h3>1981 S Avenue B, Yuma, AZ 85364</h3>
            <Modal trigger={<Button inverted color='blue' size='tiny'>Careers</Button>}>
            <Modal.Header textAlign='centered'>Want to work for us?</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Header>Come in to the office to see if we have an opening and pick up an application. (Feel free to call first if you like.)</Header>
                <p>We strive to be a top notch pool company, and want outstanding employees who will work hard. Remember, we work in the hottest city in America.
                <br />If you can work hard, and we expect you to, you will find this a rewarding place to work. We want our employees to be the best,
                <br />and in return, we treat our employees with respect, great pay, and bonuses for those who have been with us long enough.
                <br />We love our employees, and we want them to love working for us!</p>
              </Modal.Description>
              </Modal.Content>
            </Modal>
        </Segment>
      </div>
    );
  }
}

export default Contact;