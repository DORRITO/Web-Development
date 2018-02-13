import React from 'react'
import { Button, Container, Dropdown, Grid, Header, Image, Menu, Segment } from 'semantic-ui-react'

// import profileImage from './../images/profileimage.jpg';

const AppHeader = () => (
    <Header>
    <Menu fixed='top' inverted>
    <Container>
      <Menu.Item as='a' header>
        <Image size='mini' src='/logo.png' style={{ marginRight: '1.5rem', marginLeft: '-9rem' }} />
        <div className="Main-Theme">Ricayu Studios</div>
      </Menu.Item>
      <Menu.Item as='a' style={{ color: '#E0661F' }}>Home</Menu.Item>
      <Dropdown item simple text='Dropdown' style={{ color: '#E0661F' }}>
        <Dropdown.Menu>
          <Dropdown.Item>List Item</Dropdown.Item>
          <Dropdown.Item>List Item</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Header>Header Item</Dropdown.Header>
          <Dropdown.Item>
            <i className='dropdown icon' />
            <span className='text'>Submenu</span>
            <Dropdown.Menu>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item>List Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  </Menu>
    </Header>
)

export default AppHeader;