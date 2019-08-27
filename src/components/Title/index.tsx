import React from "react";
import { Typography } from "@material-ui/core";

interface Props {
  children: string;
}

const Title = (props: Props) => {
  const { children } = props;
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {children}
    </Typography>
  );
};

export default Title;
