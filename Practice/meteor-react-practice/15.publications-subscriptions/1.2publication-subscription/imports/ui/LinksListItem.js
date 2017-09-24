import React from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard';

export default class LinksListItem extends React.Component{

  componentDidMount(){
    new Clipboard(this.refs.copy);
  }

  render(){
    return(
      <div>
        <p>{this.props.url}</p>
        <p>{this.props.shortUrl}</p>
        <button ref="copy" data-clipboard-text="from meowww">Copy</button>
      </div>
    )
  }
}

LinksListItem.propTypes = {
  _id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  shortUrl: PropTypes.string.isRequired
}
