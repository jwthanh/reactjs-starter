import React from 'react';

interface Props {
  value: string;
}

const LargeLogicComponentView = (props: Props) => {
  // don't put any business logic code here!!!
  const { value } = props;
  return <div>{value}</div>;
};

export default LargeLogicComponentView;
