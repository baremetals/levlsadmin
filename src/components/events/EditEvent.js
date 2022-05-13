import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Input, Row, Form } from 'antd';

import { EditForm, InputGroup, InputTextarea, Label } from 'container/styled';
import ModalEditEditor from '../EditEditor';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

import { editEventDetails } from 'app/features/events';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditEventModal = event => {
  const [form] = Form.useForm();
  const items = event?.event;
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const dispatch = useDispatch();
  const error = useSelector(err => err.ui.errors);
  const success = useSelector(su => su.ui.success);
  const [content, setContent] = useState(items.description);
  console.log(error);

  useEffect(() => {
    form.setFieldsValue({ ...items });
  }, [event, form, items]);

  const handleSubmit = data => {
    const eventData = {
      title: data.title,
      category: data.category,
      start_date: data.start_date,
      endDate: data.endDate,
      time: data.time,
      endTime: data.endTime,
      location: data.location,
      shortDescription: data.shortDescription,
      registerLink: data.registerLink,
      website: data.website,
      description: content,
      id: items.eventId,
    };

    try {
      dispatch(editEventDetails(eventData));
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
  }, [error, success]);

  return (
    <>
      <h2>Edit Event</h2>
      <EditForm name="edit event" form={form} onFinish={handleSubmit}>
        <Row gutter={25}>
          {/* <Col md={24}>
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
          </Col> */}
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
              <Label>Content</Label>
              <Form.Item name="content" rules={[{ message: 'Please provide article content!', required: true }]}>
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
                Save Changes
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </EditForm>
      <ToastContainer />
    </>
  );
};

export default EditEventModal;
