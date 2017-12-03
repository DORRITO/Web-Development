import React from 'react';

const EditPortfolioPage = (props) => {
  return (
    <div>
      Editing the portfolio with id of {props.match.params.id}
    </div>
  );
};

export default EditPortfolioPage;