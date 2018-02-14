import React from 'react';
import {Table, Icon} from 'semantic-ui-react';

// import profileImage from './../images/profileimage.jpg';
// {props.serviceNames[0]}
const Services = (props) => (
    <Table color='orange' sortable>
        <Table.Header >
          <Table.Row >
            <Table.HeaderCell>Services</Table.HeaderCell>
            <Table.HeaderCell>Silver</Table.HeaderCell>
            <Table.HeaderCell>Gold</Table.HeaderCell>
            <Table.HeaderCell>Platinum</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body sortable>
          <Table.Row>
            <Table.Cell>Apples</Table.Cell>
            <Table.Cell>200</Table.Cell>
            <Table.Cell>0g</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Orange</Table.Cell>
            <Table.Cell>310</Table.Cell>
            <Table.Cell>0g</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
)

export default Services;