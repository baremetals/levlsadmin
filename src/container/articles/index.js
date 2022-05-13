import { Button, Col, Image, Modal, PageHeader, Row } from 'antd';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreateArticleModal from 'components/article/CreateArticle';
import EditArticleModal from 'components/article/EditArticle';
import ViewArticleModal from 'components/article/ViewArticle';
import { getNewsArticles, deleteNewsArticle } from 'app/features/newsArticleSlice';
import { Main, Block, BlockBody, BlockFooter, BlockName, BlockTitle } from '../styled';

const Articles = () => {
  const dispatch = useDispatch();
  const news = useSelector(state => state.news);
  const { newsArticles } = news;
  const [AllArticle] = useState([]);
  const [ViewArticle, setViewArticle] = useState(false);
  const [CreateArticle, setCreateArticle] = useState(false);
  const [EditArticle, setEditArticle] = useState(false);
  const [article, setArticle] = useState('');

  useEffect(() => {
    dispatch(getNewsArticles());
  }, [dispatch]);

  // console.log(newsArticles);
  const handleViewArticle = id => {
    setViewArticle(true);
    const findOne = newsArticles.filter(art => art.newsId === id);
    setArticle(findOne);
  };

  const handleEditArticle = id => {
    setEditArticle(true);
    const findOne = newsArticles.filter(art => art.newsId === id);
    setArticle(findOne);
    // console.log(id);
  };

  
  return (
    <>
      <PageHeader title="Articles" className="heading">
        <Button type="primary" size="large" onClick={() => setCreateArticle(true)}>
          + Add Article
        </Button>
      </PageHeader>

      <Main>
        <Row gutter={25}>
          {AllArticle.concat(newsArticles).map(newsArt => (
            <Col key={newsArt.newsId} xxl={6} lg={8} md={12} className="block-col">
              <Block>
                <Image preview={false} src={newsArt.uploadUrl} />
                <BlockBody>
                  <BlockName>{newsArt.category}</BlockName>
                  <BlockTitle>{newsArt.title}</BlockTitle>
                  {/* <BlockText>{newsArt.shortDescription}</BlockText> */}
                </BlockBody>
                <BlockFooter>
                  <Button type="primary" onClick={() => handleEditArticle(newsArt.newsId)}>
                    Edit
                  </Button>
                  <Button type="link" onClick={() => handleViewArticle(newsArt.newsId)}>
                    View
                  </Button>
                  <Button type="danger" className="delete" onClick={() => dispatch(deleteNewsArticle(newsArt.newsId))}>
                    Delete
                  </Button>
                </BlockFooter>
              </Block>
            </Col>
          ))}

          <Modal
            onCancel={() => setViewArticle(false)}
            visible={ViewArticle}
            width={700}
            bodyStyle={{ padding: '40px' }}
            onOk={() => setViewArticle(false)}
          >
            <ViewArticleModal article={article} />
          </Modal>

          <Modal
            onCancel={() => setCreateArticle(false)}
            visible={CreateArticle}
            width={600}
            bodyStyle={{ padding: '40px' }}
            // onOk={() => setCreateArticle(false)}
          >
            <CreateArticleModal />
          </Modal>
          <Modal
            onCancel={() => setEditArticle(false)}
            visible={EditArticle}
            width={600}
            bodyStyle={{ padding: '40px' }}
            // onOK={() => setEditArticle(false)}
          >
            <EditArticleModal article={article} />
          </Modal>
        </Row>
      </Main>
    </>
  );
};

export default Articles;
