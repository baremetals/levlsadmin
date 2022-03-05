import React from 'react';
import { Menu } from 'antd';
import { NavLink, useRouteMatch } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';

const { SubMenu } = Menu;

const MenuItems = ({ darkMode, toggleCollapsed, topMenu }) => {
  const { path } = useRouteMatch();

  const pathName = window.location.pathname;
  const pathArray = pathName.split(path);
  const mainPath = pathArray[1];
  const mainPathSplit = mainPath.split('/');

  const [openKeys, setOpenKeys] = React.useState(
    !topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : [],
  );

  const onOpenChange = keys => {
    setOpenKeys(keys[keys.length - 1] !== 'recharts' ? [keys.length && keys[keys.length - 1]] : keys);
  };

  const onClick = item => {
    if (item.keyPath.length === 1) setOpenKeys([]);
  };

  return (
    <Menu
      onOpenChange={onOpenChange}
      onClick={onClick}
      mode={!topMenu || window.innerWidth <= 991 ? 'inline' : 'horizontal'}
      theme={darkMode && 'dark'}
      // // eslint-disable-next-line no-nested-ternary
      defaultSelectedKeys={
        !topMenu
          ? [
              `${
                mainPathSplit.length === 1 ? 'home' : mainPathSplit.length === 2 ? mainPathSplit[1] : mainPathSplit[2]
              }`,
            ]
          : []
      }
      defaultOpenKeys={!topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : []}
      overflowedIndicator={<FeatherIcon icon="more-vertical" />}
      openKeys={openKeys}
    >
      <SubMenu key="dashboard" icon={!topMenu && <FeatherIcon icon="home" />} title="Dashboard">
        <Menu.Item key="home">
          <NavLink onClick={toggleCollapsed} to={`${path}`}>
            Social Media
          </NavLink>
        </Menu.Item>
        <Menu.Item key="performance">
          <NavLink onClick={toggleCollapsed} to={`${path}/performance`}>
            Site Performance
          </NavLink>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="opportunities" icon={!topMenu && <FeatherIcon icon="home" />} title="Opportunities">
        <Menu.Item key="apprenticeships">
          <NavLink onClick={toggleCollapsed} to={`${path}/apprenticeships`}>
            Apprenticeships
          </NavLink>
        </Menu.Item>
        <Menu.Item key="internships">
          <NavLink onClick={toggleCollapsed} to={`${path}/internships`}>
            Internships
          </NavLink>
        </Menu.Item>
        <Menu.Item key="funding">
          <NavLink onClick={toggleCollapsed} to={`${path}/funding`}>
            Funding
          </NavLink>
        </Menu.Item>
      </SubMenu>

      <Menu.Item key="articles" icon={!topMenu && <FeatherIcon icon="home" />}>
        <NavLink onClick={toggleCollapsed} to={`${path}/articles`}>
          Articles
        </NavLink>
      </Menu.Item>

      <Menu.Item key="resources" icon={!topMenu && <FeatherIcon icon="home" />}>
        <NavLink onClick={toggleCollapsed} to={`${path}/resources`}>
          Resources
        </NavLink>
      </Menu.Item>

      <Menu.Item key="performance" icon={!topMenu && <FeatherIcon icon="home" />}>
        <NavLink onClick={toggleCollapsed} to={`${path}/events`}>
          Events
        </NavLink>
      </Menu.Item>
      <Menu.Item key="users" icon={!topMenu && <FeatherIcon icon="home" />}>
        <NavLink onClick={toggleCollapsed} to={`${path}/users`}>
          Users
        </NavLink>
      </Menu.Item>
    </Menu>
  );
};

MenuItems.propTypes = {
  darkMode: propTypes.bool,
  topMenu: propTypes.bool,
  toggleCollapsed: propTypes.func,
};

export default MenuItems;
