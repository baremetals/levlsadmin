import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createEventEntity } from 'app/features/events';

import { Button, Col, Image, Input, Row, Form } from 'antd';
import { EditForm, ImagePreview, ImagePreviewDetail, InputGroup, InputTextarea, Label } from 'container/styled';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import ModalEditor from '../Editor';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateEventModal = () => {
  const [form] = Form.useForm();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [preview, setPreview] = useState(
    'https://firebasestorage.googleapis.com/v0/b/justappli-b9f5c.appspot.com/o/background.jpg?alt=media&token=ae605e7f-f0af-4bf7-82dc-1714750445bc',
  );
  const dispatch = useDispatch();
  // const isLoading = useSelector(st => st.admin.loading);
  const error = useSelector(err => err.ui.errors);
  const success = useSelector(su => su.ui.success);
  const [content, setContent] = useState('');
  const [value, setValue] = useState('');

  // console.log(loadingUi);
  // console.log(success);

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
    // console.log(data);
    const formData = new FormData();
    formData.append('file', value);
    formData.append('title', data.title);
    formData.append('registerLink', data.registerLink);
    formData.append('location', data.location);
    formData.append('website', data.website);
    formData.append('start_date', data.start_date);
    formData.append('endDate', data.endDate);
    formData.append('time', data.time);
    formData.append('endTime', data.endTime);
    formData.append('category', data.category);
    formData.append('shortDescription', data.shortDescription);
    formData.append('description', content);
    const header = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    try {
      dispatch(createEventEntity(formData, header));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (error.error) {
      toast.error(error.error);
    }
    if (success.message !== {}) {
      toast.success(success.message);
    }
  }, [handleSubmit, error, success]);

  return (
    <>
      <h2>Create New Event</h2>
      <EditForm name="new event" form={form} onFinish={handleSubmit}>
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
              <Label>Title</Label>
              <Form.Item name="title" rules={[{ message: 'Please provide a title!', required: true }]}>
                <Input type={'text'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>Start Date</Label>
              <Form.Item name="start_date" rules={[{ message: 'Please provide a start date!', required: true }]}>
                <Input type={'date'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>End Date</Label>
              <Form.Item name="endDate" rules={[{ message: 'Please provide an end date!', required: true }]}>
                <Input type={'date'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>Start Time</Label>
              <Form.Item name="time" rules={[{ message: 'Please provide a start time', required: true }]}>
                <Input type={'time'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>Submission Deadline</Label>
              <Form.Item name="endTime" rules={[{ message: 'Please provide an end time', required: true }]}>
                <Input type={'time'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>Category</Label>
              <Form.Item name="category" rules={[{ message: 'Please provide a category!', required: true }]}>
                <Input type={'text'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>Location</Label>
              <Form.Item name="location" rules={[{ message: 'Please provide a location!', required: true }]}>
                <Input type={'text'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>Event Url</Label>
              <Form.Item name="registerLink" rules={[{ message: 'Please provide event url!', required: true }]}>
                <Input type={'text'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>Company Website</Label>
              <Form.Item name="website">
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
              <Label>Description</Label>
              <Form.Item name="description" rules={[{ message: 'Please provide event details!', required: true }]}>
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
              <Button size="large" type="primary" htmlType="submit" disabled={loading}>
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </EditForm>
      <ToastContainer />
    </>
  );
};

export default CreateEventModal;
