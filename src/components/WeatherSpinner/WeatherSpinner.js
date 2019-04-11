import React from 'react';
import { Spinner } from 'reactstrap';

export default props => {
  return (
    <div className="d-flex justify-content-center py-5">
      <Spinner color="primary" style={{ width: '5rem', height: '5rem' }} />
    </div>
  );
};