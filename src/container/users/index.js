import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, deleteUser } from 'app/features/users';


import { Block, BlockBody, BlockFooter, BlockHead, BlockName, BlockText, BlockTitle, Main } from '../styled';
import { Button, Col, Image, Modal, PageHeader, Row } from 'antd';
import Text from 'antd/lib/typography/Text';

import CreateUserModal from 'components/users/CreateUserModal';
import EditUserModal from 'components/users/EditUserModal';
import ViewUserModal from 'components/users/ViewUserModal';


const Users = () => {
    const dispatch = useDispatch();
    const usersEntity = useSelector(state => state.users);
    const { users } = usersEntity;
    const [allUsers] = useState([]);
    // const [slicedUsers, setSlicedUsers] = useState([]);
    const [ViewEntity, setViewEntity] = useState(false);
    const [CreateEntity, setCreateEntity] = useState(false);
    const [EditEntity, setEditEntity] = useState(false);
    const [entity, setEntity] = useState('');

    // console.log(users)

    useEffect(() => {
      dispatch(getUsers('one'));
    }, [dispatch]);

    // useEffect(() => {
    //   setSlicedUsers(users.slice(0, -1));
    // }, [users]);

    const handleViewEntity = id => {
      setViewEntity(true);
      const findOne = users.slice(0, -1).filter(res => res.userId === id);
      setEntity(findOne[0]);
    };

    const handleEditEntity = id => {
      setEditEntity(true);
      const findOne = users.slice(0, -1).filter(res => res.userId === id);
      setEntity(findOne[0]);
    };
  return (
    <>
      <PageHeader title="Users" className="heading">
        {/* <Button type="primary" size="large" onClick={() => setCreateEntity(true)}>
          + Add User
        </Button> */}
      </PageHeader>
      <Main>
        <Row gutter={25}>
          {allUsers.concat(users.slice(0, -1)).map((usr, index) => (
            <Col key={index} className="block-col" xxl={6} lg={8} md={12}>
              <Block>
                <BlockBody>
                  <BlockHead>
                    <Image preview={false} src={usr.imageUrl} />
                    <BlockName>{usr.username}</BlockName>
                  </BlockHead>
                  <BlockTitle>{usr.fullname}</BlockTitle>
                  <BlockText>
                    <Text>{usr.slogan}</Text>
                  </BlockText>
                </BlockBody>
                <BlockFooter>
                  <Button type="primary" onClick={() => handleEditEntity(usr.userId)}>
                    Edit
                  </Button>
                  <Button type="link" onClick={() => handleViewEntity(usr.userId)}>
                    View
                  </Button>
                  <Button
                    type="danger"
                    className="delete"
                    //   onClick={() => dispatch(deleteUser(usr.userId))}
                  >
                    Delete
                  </Button>
                </BlockFooter>
              </Block>
            </Col>
          ))}
          <Modal
            onCancel={() => setViewEntity(false)}
            visible={ViewEntity}
            width={700}
            bodyStyle={{ padding: '40px' }}
            className="job-modal"
            onOk={() => setViewEntity(false)}
          >
            <ViewUserModal entity={entity} />
          </Modal>

          <Modal
            onCancel={() => setEditEntity(false)}
            visible={EditEntity}
            width={600}
            bodyStyle={{ padding: '40px' }}
            className="job-modal"
            onOk={() => setEditEntity(false)}
          >
            <EditUserModal entity={entity} />
          </Modal>
          <Modal
            onCancel={() => setCreateEntity(false)}
            visible={CreateEntity}
            width={600}
            bodyStyle={{ padding: '40px' }}
            className="job-modal"
            onOk={() => setCreateEntity(false)}
          >
            <CreateUserModal />
          </Modal>
        </Row>
      </Main>
    </>
  );
}

export default Users