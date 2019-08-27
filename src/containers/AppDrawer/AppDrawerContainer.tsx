import React, { useEffect } from "react";
import AppDrawerView from "./AppDrawerView";

export interface Props {
  open: boolean;
  onDrawerClose?: () => void;
}

const AppDrawerContainer = (props: Props) => {
  const { open, onDrawerClose } = props;
  const [_open, setOpen] = React.useState(open);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(open);
  }, [open]);

  useEffect(() => {
    if (!_open) {
      if (onDrawerClose) onDrawerClose();
    }
  }, [_open]);

  return <AppDrawerView open={_open} handleDrawerClose={handleDrawerClose} />;
};

export default AppDrawerContainer;
