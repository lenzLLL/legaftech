import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../ThemePalette/Store';
import singleMenu from './data/single';
import Mixed from './Mixed';
import Mega from './Mega';
import DropList from './DropList';
import NavScroll from './NavScroll';
import Search from './Search';
import Basic from './Basic';
import Hamburger from './Hamburger';

function Main(props) {
  const [state] = useContext(Context);
  const {
    onToggleDark, onToggleDir,
    home, menu, prefix
  } = props;
  return (
    <div>
       <Mixed prefix={prefix} home={home} menu={menu} onToggleDark={onToggleDark} onToggleDir={onToggleDir} />
         </div>
  );
}

Main.propTypes = {
  home: PropTypes.bool,
  menu: PropTypes.array,
  prefix: PropTypes.string,
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired
};

Main.defaultProps = {
  home: true,
  prefix: 'ai-landing',
  menu: singleMenu.ai
};

export default Main;
