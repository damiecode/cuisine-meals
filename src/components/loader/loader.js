import React from 'react';
import Loader from 'react-loader-spinner';

const PageLoader = () => (
  <div>
    <Loader
      type="TailSpin"
      color="#00BFFF"
      height={500}
      width={300}
    />
  </div>
);

export default PageLoader;
