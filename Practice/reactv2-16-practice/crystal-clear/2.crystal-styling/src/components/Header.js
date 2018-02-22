import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Title extends React.Component {
    
  componentDidMount(){
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });
 
    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });
 
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollToBottom() {
    scroll.scrollToBottom();
  }
  scrollTo() {
    scroll.scrollTo(673);
  }

  render() {
    return (
      <div className='Title'>
      <h1>{null}</h1><h1>{null}</h1><h1>{null}</h1>
      <a onClick={this.scrollTo}>
        <Header style={{margin: '2rem 0 0 25%', display: 'inline-block'}} dividing floated='left'>Services</Header>
      </a>
      <a onClick={this.scrollToBottom}>
        <Header style={{margin: '2rem 25% 0 0', display: 'inline-block'}} dividing floated='right'>Contact</Header>
      </a>
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