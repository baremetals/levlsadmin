import { Button, Col, Image, Modal, PageHeader, Row } from 'antd';
import React, { useState } from 'react';
import { Main, Block, BlockBody, BlockFooter, BlockName, BlockTitle, BlockText } from '../styled';
import NewsArticle from '../../demoData/news.json';
import EditArticleModal from '../../components/article/EditArticle';
import ViewArticleModal from '../../components/article/ViewArticle';

const Articles = () => {
    const [AllArticle] = useState(NewsArticle)
    const [ViewArticle, setViewArticle] = useState(false)
    const [EditArticle, setEditArticle] = useState(false)
    return (
        <>

            <PageHeader title="Articles" className='heading'>
                <Button type='primary' size='large' onClick={() => setEditArticle(true)}>+ Add Article</Button>
            </PageHeader>
            
            <Main>
                <Row gutter={25}>
                    {AllArticle.concat(AllArticle).map((article) => <Col xxl={6} lg={8} md={12}  className='block-col'>
                        <Block>
                            <Image preview={false} src={'https://firebasestorage.googleapis.com/v0/b/justappli-b9f5c.appspot.com/o/news%2F608101005805.jpeg?alt=media&token=a4136d7d-49f3-4f71-a935-fbdc8401d0ff'} />
                            <BlockBody>
                                <BlockName>{article.category}</BlockName>
                                <BlockTitle>{article.title}</BlockTitle>
                                {/* <BlockText>{article.shortDescription}</BlockText> */}
                            </BlockBody>
                            <BlockFooter>
                                <Button type='primary' onClick={() => setEditArticle(true)}>Edit</Button>
                                <Button type='link' onClick={() => setViewArticle(true)}>View</Button>
                                <Button type='danger' className='delete'>Delete</Button>
                            </BlockFooter>
                        </Block>
                    </Col>)}
                    
                    <Modal onCancel={() => setViewArticle(false)} visible={ ViewArticle } width={700} bodyStyle={{padding: '40px'}}>
                        <ViewArticleModal />
                    </Modal>
                    
                    <Modal onCancel={() => setEditArticle(false)} visible={ EditArticle } width={600} bodyStyle={{padding: '40px'}}>
                        <EditArticleModal />
                    </Modal>
                </Row>
            </Main>
        </>
    )
}

export default Articles;
