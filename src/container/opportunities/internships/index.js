
import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getInternships, deleteInternship } from 'app/features/internships';
import { Block, BlockBody, BlockFooter, BlockHead, BlockName, BlockText, BlockTitle, Submission, SubmissionDate, Main } from '../../styled';


import { Button, Col, Image, Modal, PageHeader, Row } from 'antd';
import Text from 'antd/lib/typography/Text';

import EditInternship from 'components/opportunities/internships/EditInternshipModal';
import ViewInternship from 'components/opportunities/internships/ViewInternshipModal';
import CreateInternship from 'components/opportunities/internships/CreateInternshipModal';

const Internships = () => {
    const dispatch = useDispatch();
    const internshipEntities = useSelector(state => state.internships);
    const { internships } = internshipEntities;
    const [allInternships] = useState([]);

    const [ViewEntity, setViewEntity] = useState(false);
    const [CreateEntity, setCreateEntity] = useState(false);
    const [EditEntity, setEditEntity] = useState(false);
    const [Entity, setEntity] = useState([]);

    useEffect(() => {
      dispatch(getInternships());
    }, [dispatch]);

    const handleViewEntity = id => {
      setViewEntity(true);
      const findOne = internships.filter(app => app.internshipId === id);
      setEntity(findOne[0]);
    };

    const handleEditEntity = id => {
      setEditEntity(true);
      const findOne = internships.filter(app => app.internshipId === id);
      setEntity(findOne);
      //  console.log(id);
    };

    return (
      <>
        <PageHeader title="Internships" className="heading">
          <Button type="primary" size="large" onClick={() => setCreateEntity(true)}>
            + Add Internships
          </Button>
        </PageHeader>

        <Main>
          <Row gutter={25}>
            {allInternships.concat(internships).map((int, index) => (
              <Col key={index} className="block-col" xxl={6} lg={8} md={12}>
                <Block>
                  <BlockBody>
                    <BlockHead>
                      <Image preview={false} src={int.imageUrl} />
                      <BlockName>{int.organisationName || int.username}</BlockName>
                    </BlockHead>
                    <BlockTitle>{int.title}</BlockTitle>
                    <BlockText>
                      <Text>{int.shortDescription.slice(0, 100)}...</Text>
                    </BlockText>
                    <Submission>
                      <Text>Submission Deadline</Text>
                      <SubmissionDate>{int.deadline}</SubmissionDate>
                    </Submission>
                  </BlockBody>
                  <BlockFooter>
                    <Button type="primary" onClick={() => handleEditEntity(int.internshipId)}>
                      Edit
                    </Button>
                    <Button type="link" onClick={() => handleViewEntity(int.internshipId)}>
                      View
                    </Button>
                    <Button
                      type="danger"
                      className="delete"
                      onClick={() => dispatch(deleteInternship(int.internshipId))}
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
              <ViewInternship entity={Entity} />
            </Modal>

            <Modal
              onCancel={() => setEditEntity(false)}
              visible={EditEntity}
              width={600}
              bodyStyle={{ padding: '40px' }}
              className="job-modal"
              onOk={() => setEditEntity(false)}
            >
              <EditInternship entity={Entity} />
            </Modal>

            <Modal
              onCancel={() => setCreateEntity(false)}
              visible={CreateEntity}
              width={600}
              bodyStyle={{ padding: '40px' }}
              className="job-modal"
              onOk={() => setCreateEntity(false)}
            >
              <CreateInternship />
            </Modal>
          </Row>
        </Main>
      </>
    );
}

export default Internships;
