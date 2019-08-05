import React from 'react';

const Spinner = props => {
  const { msg } = props;
  return (
    <div>
      <div className='ui active dimmer'>
        <div className='ui big text loader'>{msg}</div>
      </div>
    </div>
  );
};

Spinner.defaultProps = {
  msg: 'Loading ...'
};

export default Spinner;
