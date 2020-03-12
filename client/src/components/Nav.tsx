import React from 'react';
import { NavLink } from "react-router-dom";
import { PATHS } from '../constants/path';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

interface IProps {
}

interface IState {
  isActive: boolean;
}

const menus = [{
  path: PATHS.HOME,
  label: 'Home'
}, {
  path: PATHS.ABOUT,
  label: 'About'
}, {
  path: PATHS.CONTACT,
  label: 'Contact'
}];

export default class Nav extends React.Component {

  public state: IState = {
    isActive: false
  }

  constructor(props: IProps) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  private toggleMenu() {
    this.setState((state: IState) => {
      return {
        ...state,
        isActive: !state.isActive
      }
    })
  }

  genListItem() {
    return menus.map(p => (<ListItem button >
      <ListItemText>
        <NavLink to={p.path}>{p.label}</NavLink>
      </ListItemText>
    </ListItem>))
  }

  genButtons() {
    return menus.map(p => (<Button color="primary">
      <NavLink to={p.path}>{p.label}</NavLink>
    </Button>))
  }

  render() {
    return <div className="nav-wrapper">
      <IconButton
        onClick={this.toggleMenu.bind(this)}
        className="b2-icon-menu"
      >
        <MenuIcon />
      </IconButton>
      <div className="b2-nav">
        {this.genButtons()}
      </div>
      <Drawer
        anchor="right"
        open={this.state.isActive}
        onClose={this.toggleMenu.bind(this)}
        className="nav-wrapper nav-wrapper-drawer"
      >
        <List>
          {this.genListItem()}
        </List>
      </Drawer>
    </div>
  }

}
