import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Text from 'antd/lib/typography/Text';

import CreateResourceModal from 'components/resources/CreateResource';
import EditResourceModal from 'components/resources/EditResource';
import ViewResourceModal from 'components/resources/ViewResource';
import { getResources, deleteResource } from 'app/features/resources';

import {
  Block,
  BlockBody,
  BlockFooter,
  BlockHead,
  BlockName,
  BlockText,
  BlockTitle,
  Main,
} from '../styled';
import { Button, Col, Image, Modal, PageHeader, Row } from 'antd';


const Resources = () => {
    const dispatch = useDispatch();
    const resourcesEntity = useSelector(state => state.resources);
    const { resources } = resourcesEntity;
    const [allResources] = useState([])
    const [ViewResource, setViewResource] = useState(false);
    const [CreateResource, setCreateResource] = useState(false);
    const [EditResource, setEditResource] = useState(false);
    const [resource, setResource] = useState('');

    useEffect(() => {
      dispatch(getResources());
    }, [dispatch]);

    const handleViewResource = id => {
      setViewResource(true);
      const findOne = resources.filter(res => res.resourceId === id);
      setResource(findOne);
    };

    const handleEditResource = id => {
      setEditResource(true);
      const findOne = resources.filter(res => res.resourceId === id);
      setResource(findOne);
    };

    return (
      <>
        <PageHeader title="Resources" className="heading">
          <Button type="primary" size="large" onClick={() => setCreateResource(true)}>
            + Add Resources
          </Button>
        </PageHeader>
        <Main>
          <Row gutter={25}>
            {allResources.concat(resources).map((res, index) => (
              <Col key={index} className="block-col" xxl={6} lg={8} md={12}>
                <Block>
                  <BlockBody>
                    <BlockHead>
                      <Image preview={false} src={res.uploadUrl} />
                      <BlockName>{res.username}</BlockName>
                    </BlockHead>
                    <BlockTitle>{res.title}</BlockTitle>
                    <BlockText>
                      <Text>{res.shortDescription.slice(0, 100)}...</Text>
                    </BlockText>
                  </BlockBody>
                  <BlockFooter>
                    <Button type="primary" onClick={() => handleEditResource(res.resourceId)}>
                      Edit
                    </Button>
                    <Button type="link" onClick={() => handleViewResource(res.resourceId)}>
                      View
                    </Button>
                    <Button type="danger" className="delete" onClick={() => dispatch(deleteResource(res.resourceId))}>
                      Delete
                    </Button>
                  </BlockFooter>
                </Block>
              </Col>
            ))}

            <Modal
              onCancel={() => setViewResource(false)}
              visible={ViewResource}
              width={700}
              bodyStyle={{ padding: '40px' }}
              className="job-modal"
              onOk={() => setViewResource(false)}
            >
              <ViewResourceModal resource={resource} />
            </Modal>

            <Modal
              onCancel={() => setEditResource(false)}
              visible={EditResource}
              width={600}
              bodyStyle={{ padding: '40px' }}
              className="job-modal"
            >
              <EditResourceModal resource={resource} />
            </Modal>
            <Modal
              onCancel={() => setCreateResource(false)}
              visible={CreateResource}
              width={600}
              bodyStyle={{ padding: '40px' }}
              className="job-modal"
            >
              <CreateResourceModal />
            </Modal>
          </Row>
        </Main>
      </>
    );
}

export default Resources;
