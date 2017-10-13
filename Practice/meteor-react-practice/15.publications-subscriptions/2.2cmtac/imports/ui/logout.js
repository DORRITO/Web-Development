import React from 'react';

import LinksList from './linksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinksListFilters from './LinksListFilters';

export default () => {
  return(
    <div>
      <PrivateHeader title="Secure logout page for the CMTAC"/>
      <LinksListFilters />
      <AddLink />
      <LinksList />
    </div>
  );
}
