import React from 'react'
import {Link} from 'react-router-dom';
import {Dropdown, Header, Icon, Menu} from 'semantic-ui-react'

// import profileImage from './../images/profileimage.jpg';

const AppHeader = () => (
    <Header>
    <Menu fixed='top' inverted>
      <Link to="/"><Menu.Item style={{ color: '#FFA60D'}}>Ricayu Studios</Menu.Item></Link>
      <Link to="/"><Menu.Item style={{ color: '#FFA60D' }}>Home</Menu.Item></Link>
      <Link to="/about"><Menu.Item style={{ color: '#FFA60D' }}>About Me</Menu.Item></Link>
      <Dropdown item simple text='Services' style={{ color: '#FFA60D', marginTop: '-.5rem' }}>
        <Dropdown.Menu>
            <Link to="/weddings"><Dropdown.Item style={{ color: 'black' }}>Weddings</Dropdown.Item></Link>
          <Dropdown.Divider />
            <Link to="/portraits"><Dropdown.Item style={{ color: 'black' }}>Portraits/Senior Pictures</Dropdown.Item></Link>
          <Dropdown.Divider />
            <Link to="/events"><Dropdown.Item style={{ color: 'black' }}>Events/Sports Pictures</Dropdown.Item></Link>
        </Dropdown.Menu>
      </Dropdown>

    <Menu.Menu position='right'>
        <Link to="/contact"><Menu.Item style={{ color: '#FFA60D' }}>Contact Me</Menu.Item></Link>
        <Menu.Item>
            <a href="https://www.facebook.com/fontanes/?fref=ts" rel="noopener noreferrer" target="_blank"><Icon name='facebook' size='large' color='blue'/></a>
            <a href="https://twitter.com/Richardfontanes" rel="noopener noreferrer" target="_blank"><Icon name='twitter' size='large' inverted color='blue'/></a>
            <a href="https://www.youtube.com/channel/UCGdrfxOGBIBpmoYoxsYHZFw" rel="noopener noreferrer" target="_blank"><Icon name='youtube' size='large' inverted color='red'/></a>
            <a href="https://www.instagram.com/ricayu1/" rel="noopener noreferrer" target="_blank"><Icon name='instagram' size='large' inverted color='pink'/></a>
        </Menu.Item>
    </Menu.Menu>
  </Menu>
  </Header>
)

export default AppHeader;