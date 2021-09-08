import React, { useEffect } from 'react';

function Test(props) {
  const { children } = props;
  useEffect(() => {
    console.log('a');
  }, []);

  const { className, backgroundImg, title, topContent, bottomContent } = props;
  return <>{children}</>;
}

export default Test;
