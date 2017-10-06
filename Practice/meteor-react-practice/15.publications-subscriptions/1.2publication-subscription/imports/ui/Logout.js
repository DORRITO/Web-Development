import React from 'react';

import {Links} from '../api/links';
import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinksListFilters from './LinksListFilters';

export default () => {
    return(
      <div>
        <PrivateHeader title={"Your links from Logout!"}/>
        <LinksListFilters />
        <AddLink />
        <LinksList />
      </div>
    );
};
