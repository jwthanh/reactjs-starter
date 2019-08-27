import React from 'react';
import clsx from 'clsx';
import {
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import AccessAlarm from '@material-ui/icons/AccessAlarm';
import AccountBalance from '@material-ui/icons/AccountBalance';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddPhotoAlternate from '@material-ui/icons/AddPhotoAlternate';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import useStyles from './AppDrawerStyles';
import { useTranslation } from 'react-i18next';

interface Props {
  open: boolean;
  handleDrawerClose: () => void;
}

const AppDrawerView = (props: Props) => {
  const { open, handleDrawerClose } = props;
  const classes = useStyles();
  const { t } = useTranslation('drawer');
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <AccessAlarm />
          </ListItemIcon>
          <ListItemText primary={t('menu1')} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccountBalance />
          </ListItemIcon>
          <ListItemText primary={t('menu2')} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary={t('menu3')} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AddPhotoAlternate />
          </ListItemIcon>
          <ListItemText primary={t('menu4')} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default AppDrawerView;
