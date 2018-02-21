import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

class Title extends React.Component {
    
  render() {
    return (
      <div className='Title'>
      <h1>{null}</h1><h1>{null}</h1><h1>{null}</h1>
      <Header style={{margin: '2rem 0 0 25%', display: 'inline-block'}} dividing floated='left'>Services</Header>
      <Header style={{margin: '2rem 25% 0 0', display: 'inline-block'}} dividing floated='right'>Contact</Header>
      <h1 className="Text1">Crystal</h1>
      <h1>{null}</h1><h1>{null}</h1><h1>{null}</h1><h1>{null}</h1>
      <h1>{null}</h1><h1>{null}</h1><h1>{null}</h1><h1>{null}</h1>
      <h1>{null}</h1><h1>{null}</h1><h1>{null}</h1>
      <h1 className="Text2">Clear</h1>
      </div>
    );
  }
}

  export default Title;