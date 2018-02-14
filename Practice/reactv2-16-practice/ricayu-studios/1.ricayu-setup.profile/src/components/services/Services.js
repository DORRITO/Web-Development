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

        <Table.Body>
          <Table.Row>
            <Table.Cell>{props.serviceNames[0]}</Table.Cell>
            <Table.Cell>200</Table.Cell>
            <Table.Cell>0g</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>{props.serviceNames[1]}</Table.Cell>
            <Table.Cell>310</Table.Cell>
            <Table.Cell>0g</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>{props.serviceNames[2]}</Table.Cell>
            <Table.Cell>310</Table.Cell>
            <Table.Cell>0g</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>{props.serviceNames[3]}</Table.Cell>
            <Table.Cell>310</Table.Cell>
            <Table.Cell>0g</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>{props.serviceNames[4]}</Table.Cell>
            <Table.Cell>310</Table.Cell>
            <Table.Cell>0g</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>{props.serviceNames[5]}</Table.Cell>
            <Table.Cell>310</Table.Cell>
            <Table.Cell>0g</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>{props.serviceNames[6]}</Table.Cell>
            <Table.Cell>310</Table.Cell>
            <Table.Cell>0g</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell></Table.Cell>
            <Table.Cell>310</Table.Cell>
            <Table.Cell>0g</Table.Cell>
          </Table.Row>
        </Table.Body>
    </Table>
)

export default Services;