import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editResource } from 'app/features/resources';

import { Button, Col, Image, Input, Row, Form } from 'antd';
import { EditForm, ImagePreview, ImagePreviewDetail, InputGroup, InputTextarea, Label } from 'container/styled';
import ModalEditEditor from '../EditEditor';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditResourceModal = (resource) => {
  const [form] = Form.useForm();
  const { resourceType, uploadUrl, shortDescription, title, content: body, resourceId } = resource?.resource[0];
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [preview, setPreview] = useState(uploadUrl);
  const dispatch = useDispatch();
  const isLoading = useSelector(st => st.admin.loading);
  const error = useSelector(err => err.ui.errors);
  const success = useSelector(su => su.ui.success);

  const [content, setContent] = useState(body);
  let [value, setValue] = useState('');
  // console.log(resource?.resource[0]);

  function setFile(event) {
    // console.log();
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
        dispatch(editResource(formData, header));
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log(resourceId);
      const resourceData = {
        title: data.title,
        resourceType: data.resourceType,
        shortDescription: data.shortDescription,
        customUrl: data.customUrl,
        content,
        id: resourceId,
      };

      try {
        dispatch(editResource(resourceData));
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
      <h2>Edit Resource</h2>
      <EditForm name="edit resource" form={form} onFinish={handleSubmit}>
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
              <Label>Resource Type</Label>
              <Form.Item
                name="resourceType"
                rules={[{ message: 'Please provide a resource category!', required: true }]}
                initialValue={resourceType}
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

export default EditResourceModal;
