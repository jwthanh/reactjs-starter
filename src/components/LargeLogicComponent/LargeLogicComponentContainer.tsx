import React, { useEffect, useState } from 'react';
import LargeLogicComponentView from './LargeLoginComponentView';

const LargeLogicComponentContainer = () => {
  const [value, setValue] = useState();

  useEffect(() => {
    setValue('ok');
  }, []);

  // other logic will be implement here

  return <LargeLogicComponentView value={value} />;
};

export default LargeLogicComponentContainer;
