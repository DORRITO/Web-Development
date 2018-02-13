import React from 'react'
import {Container, Dropdown, Header, Image, Menu} from 'semantic-ui-react'

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
      <Menu.Item as='a' style={{ color: '#E0661F' }}>About Me</Menu.Item>
      <Dropdown item simple text='Services' style={{ color: '#E0661F' }}>
        <Dropdown.Menu>
          <Dropdown.Item>Weddings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Portraits/Senior Pictures</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Events/Sports Pictures</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item as='a' style={{ color: '#E0661F' }}>Contact Me</Menu.Item>
    </Container>
  </Menu>
    </Header>
)

export default AppHeader;