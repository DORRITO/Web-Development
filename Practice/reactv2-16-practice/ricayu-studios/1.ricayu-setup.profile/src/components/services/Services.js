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
            <Table.Cell>{props.silver[0] ? <Icon name='camera retro' color='grey'/> : ''}</Table.Cell>
            <Table.Cell>{props.gold[0] ? <Icon name='camera retro' color='yellow'/> : ''}</Table.Cell>
            <Table.Cell>{props.plat[0] ? <Icon name='camera retro' color='teal'/> : ''}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>{props.serviceNames[1]}</Table.Cell>
            <Table.Cell>{props.silver[1] ? <Icon name='camera retro' color='grey'/> : ''}</Table.Cell>
            <Table.Cell>{props.gold[1] ? <Icon name='camera retro' color='yellow'/> : ''}</Table.Cell>
            <Table.Cell>{props.plat[1] ? <Icon name='camera retro' color='teal'/> : ''}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>{props.serviceNames[2]}</Table.Cell>
            <Table.Cell>{props.silver[2] ? <Icon name='camera retro' color='grey'/> : ''}</Table.Cell>
            <Table.Cell>{props.gold[2] ? <Icon name='camera retro' color='yellow'/> : ''}</Table.Cell>
            <Table.Cell>{props.plat[3] ? <Icon name='camera retro' color='teal'/> : ''}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>{props.serviceNames[3]}</Table.Cell>
            <Table.Cell>{props.silver[3] ? <Icon name='camera retro' color='grey'/> : ''}</Table.Cell>
            <Table.Cell>{props.gold[3] ? <Icon name='camera retro' color='yellow'/> : ''}</Table.Cell>
            <Table.Cell>{props.plat[3] ? <Icon name='camera retro' color='teal'/> : ''}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>{props.serviceNames[4]}</Table.Cell>
            <Table.Cell>{props.silver[4] ? <Icon name='camera retro' color='grey'/> : ''}</Table.Cell>
            <Table.Cell>{props.gold[4] ? <Icon name='camera retro' color='yellow'/> : ''}</Table.Cell>
            <Table.Cell>{props.plat[4] ? <Icon name='camera retro' color='teal'/> : ''}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>{props.serviceNames[5]}</Table.Cell>
            <Table.Cell>{props.silver[5] ? <Icon name='camera retro' color='grey'/> : ''}</Table.Cell>
            <Table.Cell>{props.gold[5] ? <Icon name='camera retro' color='yellow'/> : ''}</Table.Cell>
            <Table.Cell>{props.plat[5] ? <Icon name='camera retro' color='teal'/> : ''}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>{props.serviceNames[6]}</Table.Cell>
            <Table.Cell>{props.silver[6] ? <Icon name='camera retro' color='grey'/> : ''}</Table.Cell>
            <Table.Cell>{props.gold[6] ? <Icon name='camera retro' color='yellow'/> : ''}</Table.Cell>
            <Table.Cell>{props.plat[6] ? <Icon name='camera retro' color='teal'/> : ''}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell></Table.Cell>
            <Table.Cell>{props.silver[7]}</Table.Cell>
            <Table.Cell>{props.gold[7]}</Table.Cell>
            <Table.Cell>{props.plat[7]}</Table.Cell>
          </Table.Row>
        </Table.Body>
    </Table>
)

export default Services;