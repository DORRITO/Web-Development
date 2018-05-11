import React, { Component } from "react";

import { Table } from "semantic-ui-react";

class Songs extends Component {
    render() {
      return (
        <div>
         <button>Daily</button>
         <button>Weekly</button>
         <button>Monthly</button>
          <Table inverted color="teal">
            <Table.Header>
              <Table.Row >
                <Table.HeaderCell  >Enter song list component here! 1-100</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
          </Table>
        </div>
      );
    }
  }
  
  export default Songs;