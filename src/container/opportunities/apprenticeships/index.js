import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApprenticeships, deleteApprenticeship } from 'app/features/apprenticeships';



import EditApprenticeship from 'components/opportunities/apprenticeships/EditApprenticeshipModal';
import ViewApprenticeship from 'components/opportunities/apprenticeships/ViewApprenticeshipModal';
import CreateApprenticeship from 'components/opportunities/apprenticeships/CreateApprenticeshipModal';

import Text from 'antd/lib/typography/Text';
import {
  Block,
  BlockBody,
  BlockFooter,
  BlockHead,
  BlockName,
  BlockText,
  BlockTitle,
  Submission,
  SubmissionDate,
  Main,
} from '../../styled';
import { Button, Col, Image, Modal, PageHeader, Row } from 'antd';

const Apprenticeships = () => {
  const dispatch = useDispatch();
  const apprenticeshipEntities = useSelector(state => state.apprenticeships);
  const { apprenticeships } = apprenticeshipEntities;
  const [allApprenticeships] = useState([]);

  const [ViewEntity, setViewEntity] = useState(false);
  const [CreateEntity, setCreateEntity] = useState(false);
  const [EditEntity, setEditEntity] = useState(false);
  const [Entity, setEntity] = useState([]);

  useEffect(() => {
    dispatch(getApprenticeships());
  }, [dispatch]);

   const handleViewEntity = id => {
     setViewEntity(true);
     const findOne = apprenticeships.filter(app => app.apprenticeshipId === id);
     setEntity(findOne[0]);
   };

   const handleEditEntity = id => {
     setEditEntity(true);
     const findOne = apprenticeships.filter(app => app.apprenticeshipId === id);
     setEntity(findOne);
    //  console.log(id);
   };

  // console.log(apprenticeships);
  return (
    <>
      <PageHeader title="Apprenticeships" className="heading">
        <Button type="primary" size="large" onClick={() => setCreateEntity(true)}>
          + Add Apprenticeships
        </Button>
      </PageHeader>
      <Main>
        <Row gutter={25}>
          {allApprenticeships.concat(apprenticeships).map((app, index) => (
            <Col key={index} className="block-col" xxl={6} lg={8} md={12}>
              <Block>
                <BlockBody>
                  <BlockHead>
                    <Image preview={false} src={app.imageUrl} />
                    <BlockName>{app.organisationName || app.username}</BlockName>
                  </BlockHead>
                  <BlockTitle>{app.title}</BlockTitle>
                  <BlockText>
                    <Text>{app.shortDescription.slice(0, 100)}...</Text>
                  </BlockText>
                  <Submission>
                    <Text>Submission Deadline</Text>
                    <SubmissionDate>{app.deadline}</SubmissionDate>
                  </Submission>
                </BlockBody>
                <BlockFooter>
                  <Button type="primary" onClick={() => handleEditEntity(app.apprenticeshipId)}>
                    Edit
                  </Button>
                  <Button type="link" onClick={() => handleViewEntity(app.apprenticeshipId)}>
                    View
                  </Button>
                  <Button
                    type="danger"
                    className="delete"
                    onClick={() => dispatch(deleteApprenticeship(app.apprenticeshipId))}
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
            <ViewApprenticeship entity={Entity} />
          </Modal>

          <Modal
            onCancel={() => setCreateEntity(false)}
            visible={CreateEntity}
            width={700}
            bodyStyle={{ padding: '40px' }}
            className="job-modal"
            onOk={() => setCreateEntity(false)}
          >
            <CreateApprenticeship />
          </Modal>

          <Modal
            onCancel={() => setEditEntity(false)}
            visible={EditEntity}
            width={600}
            bodyStyle={{ padding: '40px' }}
            className="job-modal"
            onOk={() => setEditEntity(false)}
          >
            <EditApprenticeship entity={Entity} />
          </Modal>
        </Row>
      </Main>
    </>
  );
};

export default Apprenticeships;
