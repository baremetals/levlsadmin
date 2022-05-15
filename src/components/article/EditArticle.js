import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editNewsArticle } from 'app/features/newsArticleSlice';

import { Button, Col, Image, Input, Row, Form } from 'antd';
import { EditForm, ImagePreview, ImagePreviewDetail, InputGroup, InputTextarea, Label } from 'container/styled';
import ModalEditEditor from '../EditEditor';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const EditArticleModal = (article) => {
  const [form] = Form.useForm();
  const { category, uploadUrl, shortDescription, title, content: body, newsId } = article?.article[0];
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [preview, setPreview] = useState(uploadUrl);
  const dispatch = useDispatch();
  const isLoading = useSelector(st => st.admin.loading);
  const error = useSelector(err => err.ui.errors);
  const success = useSelector(su => su.ui.success);
  const [content, setContent] = useState(body);
  let [value, setValue] = useState('');


  function setFile(event) {
    console.log();
    const [file] = event.target.files;
    if (file) {
      setPreview(URL.createObjectURL(file));
      setValue(file);
    }
    // console.log(file);
  }

  const handleSubmit = data => {
    if (value !== '' && data.image !== undefined) {
      const formData = new FormData();
      formData.append('file', value);
      formData.append('title', data.title);
      formData.append('category', data.category);
      formData.append('shortDescription', data.shortDescription);
      formData.append('content', content);
      const header = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      try {
        dispatch(editNewsArticle(formData, header));
      } catch (err) {
        console.log(err);
      }
    } else {
      // console.log(newsId);
      const articleData = {
        title: data.title,
        category: data.category,
        shortDescription: data.shortDescription,
        customUrl: data.customUrl,
        content,
        id: newsId,
      };

      try {
        dispatch(editNewsArticle(articleData));
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    if (error.error) {
      toast.error(error.error);
    }
    if (success.message !== {}) {
      toast.success(success.message);
    }
  }, [error, success]);

  return (
    <>
      <h2>Edit Article</h2>
      <EditForm name="editArticle" form={form} onFinish={handleSubmit}>
        <Row gutter={25}>
          <Col md={24}>
            <InputGroup>
              <Label>Image Preview</Label>
              <ImagePreview>
                <Image width={'200px'} src={preview} />
                <Form.Item name="image">
                  <ImagePreviewDetail>
                    <Input onChange={setFile} type={'file'} style={{ padding: '0', marginBottom: '10px' }} />
                    <Button type="danger">Remove</Button>
                  </ImagePreviewDetail>
                </Form.Item>
              </ImagePreview>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>Custom Url</Label>
              <Form.Item name="customUrl" initialValue={uploadUrl}>
                <Input type={'text'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>Category</Label>
              <Form.Item
                name="category"
                rules={[{ message: 'Please provide a category!', required: true }]}
                initialValue={category}
              >
                <Input type={'text'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>Title</Label>
              <Form.Item
                name="title"
                rules={[{ message: 'Please provide a title!', required: true }]}
                initialValue={title}
              >
                <Input type={'text'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>Short Description</Label>
              <Form.Item
                name="shortDescription"
                rules={[{ message: 'Please provide a a short description!', required: true }]}
                initialValue={shortDescription}
              >
                <InputTextarea type={'text'} />
              </Form.Item>
            </InputGroup>
          </Col>

          <Col md={24}>
            <InputGroup>
              <Label>Content</Label>
              <Form.Item
                name="content"
                rules={[{ message: 'Please provide article content!', required: true }]}
                // initialValue={content}
              >
                <ModalEditEditor
                  editorState={editorState}
                  onEditorStateChange={newState => {
                    setEditorState(newState);
                    setContent(draftToHtml(convertToRaw(newState.getCurrentContent())));
                  }}
                  body={content}
                />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <Form.Item>
              <Button size="large" type="primary" htmlType="submit">
                {isLoading ? 'Loading...' : 'Save Changes'}
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </EditForm>
      <ToastContainer />
    </>
  );
};

export default EditArticleModal;
