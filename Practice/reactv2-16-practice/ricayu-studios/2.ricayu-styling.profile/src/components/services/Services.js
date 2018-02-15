import React from 'react';
import {Header, Icon, Table} from 'semantic-ui-react';

// import profileImage from './../images/profileimage.jpg';

const Services = (props) => (
    <div>
    <Header as='h1' textAlign='center'>{props.title}</Header>
    <Table color='orange' celled padded>
        <Table.Header>
          <Table.Row textAlign='center'>
            <Table.HeaderCell width='4'>Services</Table.HeaderCell>
            <Table.HeaderCell width='3'>Silver</Table.HeaderCell>
            <Table.HeaderCell width='3'>Gold</Table.HeaderCell>
            <Table.HeaderCell width='3'>Platinum</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        
        <Table.Body>
          <Table.Row>
            <Table.Cell>{props.serviceNames[0]}</Table.Cell>
            {props.silver[0] ? <Table.Cell textAlign='center'><Icon name='camera retro' size='large' color='grey'/></Table.Cell> : <Table.Cell textAlign='center'></Table.Cell>}
            {props.gold[0] ? <Table.Cell textAlign='center'><Icon name='camera retro' size='large' color='yellow'/></Table.Cell> : <Table.Cell textAlign='center'></Table.Cell>}
            {props.plat[0] ? <Table.Cell textAlign='center'><Icon name='camera retro' size='large' color='teal'/></Table.Cell> : <Table.Cell textAlign='center'></Table.Cell>}
          </Table.Row>
          <Table.Row>
            <Table.Cell>{props.serviceNames[1]}</Table.Cell>
            {props.silver[1] ? <Table.Cell textAlign='center'><Icon name='camera retro' size='large' color='grey'/></Table.Cell> : <Table.Cell textAlign='center'></Table.Cell>}
            {props.gold[1] ? <Table.Cell textAlign='center'><Icon name='camera retro' size='large' color='yellow'/></Table.Cell> : <Table.Cell textAlign='center'></Table.Cell>}
            {props.plat[1] ? <Table.Cell textAlign='center'><Icon name='camera retro' size='large' color='teal'/></Table.Cell> : <Table.Cell textAlign='center'></Table.Cell>}
          </Table.Row>
          <Table.Row>
            <Table.Cell>{props.serviceNames[2]}</Table.Cell>
            {props.silver[2] ? <Table.Cell textAlign='center'><Icon name='camera retro' size='large' color='grey'/></Table.Cell> : <Table.Cell textAlign='center'></Table.Cell>}
            {props.gold[2] ? <Table.Cell textAlign='center'><Icon name='camera retro' size='large' color='yellow'/></Table.Cell> : <Table.Cell textAlign='center'></Table.Cell>}
            {props.plat[2] ? <Table.Cell textAlign='center'><Icon name='camera retro' size='large' color='teal'/></Table.Cell> : <Table.Cell textAlign='center'></Table.Cell>}
          </Table.Row>
          <Table.Row>
            <Table.Cell>{props.serviceNames[3]}</Table.Cell>
            {props.silver[3] ? <Table.Cell textAlign='center'><Icon name='camera retro' size='large' color='grey'/></Table.Cell> : <Table.Cell textAlign='center'></Table.Cell>}
            {props.gold[3] ? <Table.Cell textAlign='center'><Icon name='camera retro' size='large' color='yellow'/></Table.Cell> : <Table.Cell textAlign='center'></Table.Cell>}
            {props.plat[3] ? <Table.Cell textAlign='center'><Icon name='camera retro' size='large' color='teal'/></Table.Cell> : <Table.Cell textAlign='center'></Table.Cell>}
          </Table.Row>
          <Table.Row>
            <Table.Cell>{props.serviceNames[4]}</Table.Cell>
            {props.silver[4] ? <Table.Cell textAlign='center'><Icon name='camera retro' size='large' color='grey'/></Table.Cell> : <Table.Cell textAlign='center'></Table.Cell>}
            {props.gold[4] ? <Table.Cell textAlign='center'><Icon name='camera retro' size='large' color='yellow'/></Table.Cell> : <Table.Cell textAlign='center'></Table.Cell>}
            {props.plat[4] ? <Table.Cell textAlign='center'><Icon name='camera retro' size='large' color='teal'/></Table.Cell> : <Table.Cell textAlign='center'></Table.Cell>}
          </Table.Row>
          <Table.Row>
            <Table.Cell>{props.serviceNames[5]}</Table.Cell>
            {props.silver[5] ? <Table.Cell textAlign='center'><Icon name='camera retro' size='large' color='grey'/></Table.Cell> : <Table.Cell textAlign='center'></Table.Cell>}
            {props.gold[5] ? <Table.Cell textAlign='center'><Icon name='camera retro' size='large' color='yellow'/></Table.Cell> : <Table.Cell textAlign='center'></Table.Cell>}
            {props.plat[5] ? <Table.Cell textAlign='center'><Icon name='camera retro' size='large' color='teal'/></Table.Cell> : <Table.Cell textAlign='center'></Table.Cell>}
          </Table.Row>
          <Table.Row>
            <Table.Cell>{props.serviceNames[6]}</Table.Cell>
            {props.silver[6] ? <Table.Cell textAlign='center'><Icon name='camera retro' size='large' color='grey'/></Table.Cell>  : <Table.Cell textAlign='center'></Table.Cell>}
            {props.gold[6] ? <Table.Cell textAlign='center'><Icon name='camera retro' size='large' color='yellow'/></Table.Cell>  : <Table.Cell textAlign='center'></Table.Cell>}
            {props.plat[6] ? <Table.Cell textAlign='center'><Icon name='camera retro' size='large' color='teal'/></Table.Cell>  : <Table.Cell textAlign='center'></Table.Cell>}
          </Table.Row>
          <Table.Row active>
            <Table.Cell></Table.Cell>
            <Table.Cell textAlign='center'>{props.silver[7]}</Table.Cell>
            <Table.Cell textAlign='center'>{props.gold[7]}</Table.Cell>
            <Table.Cell textAlign='center'>{props.plat[7]}</Table.Cell>
          </Table.Row>
        </Table.Body>
    </Table>
    <Header as='h5' textAlign='center'>{props.subTitle}</Header>
    </div>
)

export default Services;