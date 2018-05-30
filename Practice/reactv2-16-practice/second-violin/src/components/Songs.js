import React, { Component } from "react";

import { Table } from "semantic-ui-react";

class Songs extends Component {
  constructor(){
      super()
      this.state = {
          hi: 'test'
      }
  }

  daily = () => alert('daily list');
  weekly = () => alert('weekly list');
  monthly = () => alert('monthly list');

  render() {
    return (
      <div>
        <button onClick={this.daily}>Daily</button>
        <button onClick={this.weekly}>Weekly</button>
        <button onClick={this.monthly}>Monthly</button>
        <Table inverted color="teal">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign='center'>
                Enter song list component here! 1-100
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
        </Table>
      </div>
    );
  }
}

export default Songs;
