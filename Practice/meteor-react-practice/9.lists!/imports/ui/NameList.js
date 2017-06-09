import React from 'react';

import {NamesListDB} from './../api/namesList';

export default class NamesList extends React.Component{

  constructor() {
    super();
    this.state = {renderNames: ''};
  }

  ///////////////////////////////////////////
  renderNames(nameList) {
    return nameList.map((name) => {
      return(
        <p key={name._id}>
          {name.name}
          <button onClick={() => NamesListDB.remove(name._id)}>delete</button>
        </p>
      );
    });
  };////////////////////////////////////////

  ////////when adding players///////////////
  handleSubmit1(e) {
    e.preventDefault();
    let newName = e.target.name.value;

    if (newName){
      e.target.name.value = '';//set input to empty
      NamesListDB.insert({
        name: newName
      });
    }
  };////////////////////////////////////////

  render() {
    let names = NamesListDB.find().fetch();
    return(
      <div>
        {this.state.renderNames(names)}
        <form onSubmit={this.state.handleSubmit1.bind(this)}>
          <input type="text" name="name" placeholder="name" />
          <button>Add Name</button>
        </form>
      </div>
    );
  }
};
