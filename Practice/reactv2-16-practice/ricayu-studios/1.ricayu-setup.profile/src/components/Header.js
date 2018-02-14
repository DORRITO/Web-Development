import React from 'react'
import {Container, Dropdown, Header, Image, Menu} from 'semantic-ui-react'

// import profileImage from './../images/profileimage.jpg';

const AppHeader = () => (
    <Header>
    <Menu fixed='top' inverted>
    <Container>
      <Menu.Item as='a' style={{  marginLeft: '-6rem', color: '#FFA60D'}}>Ricayu Studios</Menu.Item>
      <Menu.Item as='a' style={{ color: '#FFA60D' }}>Home</Menu.Item>
      <Menu.Item as='a' style={{ color: '#FFA60D' }}>About Me</Menu.Item>
      <Dropdown item simple text='Services' style={{ color: '#FFA60D' }}>
        <Dropdown.Menu>
          <Dropdown.Item>Weddings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Portraits/Senior Pictures</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Events/Sports Pictures</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item as='a' style={{ color: '#FFA60D' }}>Contact Me</Menu.Item>
    </Container>
  </Menu>
    </Header>
)

export default AppHeader;