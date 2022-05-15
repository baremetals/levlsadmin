import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Image, Input, Row, Form } from 'antd';

import { EditForm, ImagePreview, ImagePreviewDetail, InputGroup, InputTextarea, Label } from 'container/styled';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { createResourceEntity } from 'app/features/resources';
import ModalEditor from '../Editor';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateResourceModal = () => {
  const [form] = Form.useForm();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [preview, setPreview] = useState(
    'https://firebasestorage.googleapis.com/v0/b/justappli-b9f5c.appspot.com/o/background.jpg?alt=media&token=ae605e7f-f0af-4bf7-82dc-1714750445bc',
  );
  const dispatch = useDispatch();
  const isLoading = useSelector(st => st.admin.loading);
  const error = useSelector(err => err.ui.errors);
  const success = useSelector(su => su.ui.success);
  const [content, setContent] = useState('');
  const [value, setValue] = useState('');

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
      formData.append('resourceType', data.resourceType);
      formData.append('shortDescription', data.shortDescription);
      formData.append('content', content);
      const header = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      try {
        dispatch(createResourceEntity(formData, header));
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log('here');
      const resourceData = {
        title: data.title,
        resourceType: data.resourceType,
        shortDescription: data.shortDescription,
        customUrl: data.customUrl,
        content,
      };

      try {
        dispatch(createResourceEntity(resourceData));
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
      <h2>Create New Resource</h2>
      <EditForm name="new resource" form={form} onFinish={handleSubmit}>
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
              <Form.Item name="customUrl">
                <Input type={'text'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>Resource Type</Label>
              <Form.Item name="resourceType" rules={[{ message: 'Please provide a resource type!', required: true }]}>
                <Input type={'text'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>Title</Label>
              <Form.Item name="title" rules={[{ message: 'Please provide a title!', required: true }]}>
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
              >
                <InputTextarea type={'text'} />
              </Form.Item>
            </InputGroup>
          </Col>

          <Col md={24}>
            <InputGroup>
              <Label>Content</Label>
              <Form.Item name="content" rules={[{ message: 'Please provide article content!', required: true }]}>
                <ModalEditor
                  editorState={editorState}
                  onEditorStateChange={newState => {
                    setEditorState(newState);
                    setContent(draftToHtml(convertToRaw(newState.getCurrentContent())));
                  }}
                />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <Form.Item>
              <Button size="large" type="primary" htmlType="submit">
                {isLoading ? 'Loading...' : 'Submit'}
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </EditForm>
      <ToastContainer />
    </>
  );
};

export default CreateResourceModal;
