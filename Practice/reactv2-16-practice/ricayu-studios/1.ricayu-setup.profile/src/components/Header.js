import React from 'react'
import {Link} from 'react-router-dom';
import {Container, Dropdown, Header, Image, Menu} from 'semantic-ui-react'

// import profileImage from './../images/profileimage.jpg';

const AppHeader = () => (
    <Header>
    <Menu fixed='top' inverted>
    <Container>
      <Link to="/"><Menu.Item as='a' style={{  marginLeft: '-6rem', color: '#FFA60D'}}>Ricayu Studios</Menu.Item></Link>
      <Link to="/"><Menu.Item as='a' style={{ color: '#FFA60D' }}>Home</Menu.Item></Link>
      <Link to="/about"><Menu.Item as='a' style={{ color: '#FFA60D' }}>About Me</Menu.Item></Link>
      <Dropdown item simple text='Services' style={{ color: '#FFA60D' }}>
        <Dropdown.Menu>
          <Dropdown.Item>Weddings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Portraits/Senior Pictures</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Events/Sports Pictures</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Link to="/contact"><Menu.Item as='a' style={{ color: '#FFA60D' }}>Contact Me</Menu.Item></Link>
    </Container>
  </Menu>
    </Header>
)

export default AppHeader;