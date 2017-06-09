import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';

import { names } from '../imports/api/names';

  Meteor.startup(() => {
    Tracker.autorun(function() {

    let names = (
      <div>
        <p>hello</p>
      </div>
    )

    ReactDOM.render(names, document.getElementById('app'));
    });
})
