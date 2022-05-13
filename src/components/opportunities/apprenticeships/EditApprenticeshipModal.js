import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EditForm, InputGroup, InputTextarea, Label } from 'container/styled';
import { Button, Col, Input, Row, Form } from 'antd';


import ModalEditEditor from '../../EditEditor';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

import { editApprenticeship } from 'app/features/apprenticeships';

const EditApprenticeship = entity => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  
  const item = entity?.entity[0]
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const isLoading = useSelector(st => st.admin.loading);
  // const [values, setValues] = useState(entity?.entity[0].deadline);
  const [content, setContent] = useState(item.content);

  // console.log(form);

  useEffect(() => {
    // const stuff = entity?.entity[0];
    form.setFieldsValue({...item});
  }, [entity, form, item]);

  const handleSubmit = data => {
    
    // console.log(content);
    const apprenticeshipData = {
      title: data.title,
      jobType: data.jobType,
      location: data.location,
      applicationLink: data.applicationLink,
      shortDescription: data.shortDescription,
      deadline: data.deadline,
      howtoApply: data.howtoApply,
      organisationName: data.organisationName,
      content,
      id: item.apprenticeshipId,
    };
    try {
      dispatch(editApprenticeship(apprenticeshipData));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <h2>Edit Apprenticeship</h2>
      <EditForm name="editApprenticeship" form={form} onFinish={handleSubmit}>
        <Row gutter={25}>
          <Col md={24}>
            <InputGroup>
              <Label>Title</Label>
              <Form.Item
                name="title"
                rules={[{ message: 'Please provide a title!', required: true }]}
                // initialValue={item.title}
              >
                <Input type={'text'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>Job Type</Label>
              <Form.Item
                name="jobType"
                rules={[{ message: 'Please provide a job type!', required: true }]}
                // initialValue={item.jobType}
              >
                <Input type={'text'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>Location</Label>
              <Form.Item
                name="location"
                rules={[{ message: 'Please provide a location!', required: true }]}
                // initialValue={item.location}
              >
                <Input type={'text'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>Application Link</Label>
              <Form.Item
                name="applicationLink"
                // rules={[{ message: 'Please provide a location!', required: true }]}
                // initialValue={item.applicationLink}
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
                // initialValue={item.shortDescription}
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
                rules={[{ message: 'Please provide apprenticeship content!', required: true }]}
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
            <InputGroup>
              <Label>Submission Deadline - {item.deadline}</Label>
              <Form.Item
                name="deadline"
                // rules={[{ message: 'Please provide a dead!', required: true }]}
                // initialValue={item.deadline}
              >
                <Input type={'date'} />
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
    </>
  );
};

export default EditApprenticeship;
