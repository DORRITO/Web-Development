import { Meteor } from 'meteor/meteor';
import React from 'react';
import PropTypes from 'prop-types';

import Cat from './ui/Cat';

export const cat = (
    <div>
      <div className="pic">
        <div className="cat-happy">
          <Cat catPic="https://static.superdeluxe.com/dankland/generators/happy-cat.jpg" message="Happy Cat"/>
        </div>
        <div className="cat-grumpy">
          <Cat catPic="http://static4.businessinsider.com/image/5485631e69bedda63303ed51/grumpy-cat-has-earned-her-owner-nearly-100-million-in-just-2-years.jpg"
               message="Grumpy Cat"/>
        </div>
      </div>
      <div className="cat-random">
        <Cat catPic="http://www.randomkittengenerator.com/"
             message="Random Cat!"/>
      </div>
    </div>
);
/////////////////////////////////////
Cat.propTypes = {
  catPicture: PropTypes.string.isRequired,
};
