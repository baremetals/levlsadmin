import { Button, Col, Image, Modal, PageHeader, Row } from 'antd';
import React, { useState } from 'react';
import { Block, BlockBody, BlockFooter, BlockHead, BlockName, BlockText, BlockTitle, Submission, SubmissionDate, Main } from '../../styled';
import initialNews from '../../../demoData/news.json';
import Text from 'antd/lib/typography/Text';
import EditOpportunities from '../../../components/opportunities/EditModal';
import ViewOpportunities from '../../../components/opportunities/ViewModal';


const Funding = () => {
    const [allNews] = useState(initialNews)
    const [modalData, setViewModal] = useState(false)
    const [editModal, setEditModal] = useState(false)

    return (
        <>
            <PageHeader title="Funding"></PageHeader>
            <Main>
                <Row gutter={25}>
                    {allNews.concat(allNews).concat(allNews).map((news, index) => <Col key={index} className='block-col' xxl={6} lg={8} md={12}>
                        
                        <Block>
                            <BlockBody>
                                <BlockHead>
                                    <Image preview={false} src={news.imageUrl} />
                                    <BlockName>Inside Out Contracts Limited</BlockName>
                                </BlockHead>
                                <BlockTitle>Digital Marketing Apprentice</BlockTitle>
                                <BlockText>
                                    <Text>Estio Training have an exciting new opportunity for a Digital Marketer with Inside Out Contracts, a furniture provider based in London.</Text>
                                </BlockText>
                                <Submission>
                                    <Text>Submission Deadline</Text>
                                    <SubmissionDate>15 Jan 2022</SubmissionDate>
                                </Submission>
                            </BlockBody>
                            <BlockFooter>
                                <Button type='primary' onClick={() => setEditModal(true)}>Edit</Button>
                                <Button type='link' onClick={() => setViewModal(true)}>View</Button>
                                <Button type='danger' className='delete'>Delete</Button>
                            </BlockFooter>
                        </Block>

                    </Col>)}

                    <Modal onCancel={() => setViewModal(false)} visible={ modalData } width={700} bodyStyle={{padding: '40px'}} className='job-modal'>
                        <ViewOpportunities />
                    </Modal>
                    
                    <Modal onCancel={() => setEditModal(false)} visible={ editModal } width={600} bodyStyle={{padding: '40px'}} className='job-modal'>
                        <EditOpportunities />
                    </Modal>
                </Row>
                
            </Main>
        </>
    )
}

export default Funding;
