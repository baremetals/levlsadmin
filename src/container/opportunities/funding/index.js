import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getFundingEntities, deleteFunding } from 'app/features/grants';

import { Block, BlockBody, BlockFooter, BlockHead, BlockName, BlockText, BlockTitle, Submission, SubmissionDate, Main } from '../../styled';
import Text from 'antd/lib/typography/Text';
import { Button, Col, Image, Modal, PageHeader, Row } from 'antd';

import EditFunding from 'components/opportunities/funding/EditFundingModal';
import ViewFunding from 'components/opportunities/funding/ViewFundingModal';
import CreateFunding from 'components/opportunities/funding/CreateFundingModal';


const Funding = () => {
    const dispatch = useDispatch();
    const grantEntities = useSelector(state => state.grants);
    const { fundingEntities } = grantEntities;
    const [allGrants] = useState([]);

    const [ViewEntity, setViewEntity] = useState(false);
    const [CreateEntity, setCreateEntity] = useState(false);
    const [EditEntity, setEditEntity] = useState(false);
    const [Entity, setEntity] = useState([]);

    // console.log(grantEntities);

    useEffect(() => {
      dispatch(getFundingEntities());
    }, [dispatch]);

    const handleViewEntity = id => {
      setViewEntity(true);
      const findOne = fundingEntities.filter(app => app.grantId === id);
      setEntity(findOne[0]);
    };

    const handleEditEntity = id => {
      setEditEntity(true);
      const findOne = fundingEntities.filter(app => app.grantId === id);
      setEntity(findOne);
      //  console.log(id);
    };


    return (
      <>
        <PageHeader title="Funding" className="heading">
          <Button type="primary" size="large" onClick={() => setCreateEntity(true)}>
            + Add Funding
          </Button>
        </PageHeader>
        <Main>
          <Row gutter={25}>
            {allGrants.concat(fundingEntities).map((gr, index) => (
              <Col key={index} className="block-col" xxl={6} lg={8} md={12}>
                <Block>
                  <BlockBody>
                    <BlockHead>
                      <Image preview={false} src={gr.imageUrl} />
                      <BlockName>{gr.organisationName || gr.username}</BlockName>
                    </BlockHead>
                    <BlockTitle>{gr.title}</BlockTitle>
                    <BlockText>
                      <Text>{gr.shortDescription.slice(0, 100)}...</Text>
                    </BlockText>
                    <Submission>
                      <Text>Submission Deadline</Text>
                      <SubmissionDate>{gr.deadline}</SubmissionDate>
                    </Submission>
                  </BlockBody>
                  <BlockFooter>
                    <Button type="primary" onClick={() => handleEditEntity(gr.grantId)}>
                      Edit
                    </Button>
                    <Button type="link" onClick={() => handleViewEntity(gr.grantId)}>
                      View
                    </Button>
                    <Button type="danger" className="delete" onClick={() => dispatch(deleteFunding(gr.grantId))}>
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
              <ViewFunding entity={Entity} />
            </Modal>

            <Modal
              onCancel={() => setEditEntity(false)}
              visible={EditEntity}
              width={600}
              bodyStyle={{ padding: '40px' }}
              className="job-modal"
              onOk={() => setEditEntity(false)}
            >
              <EditFunding entity={Entity} />
            </Modal>

            <Modal
              onCancel={() => setCreateEntity(false)}
              visible={CreateEntity}
              width={600}
              bodyStyle={{ padding: '40px' }}
              className="job-modal"
              onOk={() => setCreateEntity(false)}
            >
              <CreateFunding />
            </Modal>
          </Row>
        </Main>
      </>
    );
}

export default Funding;
