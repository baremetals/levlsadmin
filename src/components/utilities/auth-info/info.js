import React, { useState } from 'react';
import { Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FeatherIcon from 'feather-icons-react';
import { InfoWraper, NavAuth, UserDropDwon } from './auth-info-style';
import Message from './message';
import Notification from './notification';
import { Popover } from '../../popup/popup';
import { Dropdown } from '../../dropdown/dropdown';
import { logOut } from 'app/features/admin';
import Heading from '../../heading/heading';


const AuthInfo = () => {
  const dispatch = useDispatch();
  const adminData = useSelector(ste => ste.admin.credentials);
  const {...credentials} = adminData;

  const SignOut = e => {
    e.preventDefault();
    dispatch(logOut());
  };

  const userContent = (
    <UserDropDwon>
      <div className="user-dropdwon">
        <figure className="user-dropdwon__info">
          <img src={credentials.imageUrl} alt="user avatar" style={{width: '46px', height: '46px'}}/>
          <figcaption>
            <Heading as="h5">{credentials.fullname}</Heading>
            <p>{credentials.occupation}</p>
          </figcaption>
        </figure>
        <ul className="user-dropdwon__links">
          <li>
            <Link to="#">
              <FeatherIcon icon="user" /> Profile
            </Link>
          </li>
          <li>
            <Link to="#">
              <FeatherIcon icon="settings" /> Settings
            </Link>
          </li>
          <li>
            <Link to="#">
              <FeatherIcon icon="dollar-sign" /> Billing
            </Link>
          </li>
          <li>
            <Link to="#">
              <FeatherIcon icon="users" /> Activity
            </Link>
          </li>
          <li>
            <Link to="#">
              <FeatherIcon icon="bell" /> Help
            </Link>
          </li>
        </ul>
        <Link className="user-dropdwon__bottomAction" onClick={SignOut} to="/">
          <FeatherIcon icon="log-out" /> Log Out
        </Link>
      </div>
    </UserDropDwon>
  );


  return (
    <InfoWraper>
      <Message />
      <Notification />

      <div className="nav-author">
        <Popover placement="bottomRight" content={userContent} action="click">
          <Link to="#" className="head-example">
            <Avatar src={credentials.imageUrl} />
          </Link>
        </Popover>
      </div>
    </InfoWraper>
  );
};

export default AuthInfo;
