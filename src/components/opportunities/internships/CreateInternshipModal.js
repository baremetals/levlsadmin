import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { createInternshipEntity } from 'app/features/internships';

import ModalEditEditor from '../../EditEditor';
import { EditForm, InputGroup, InputTextarea, Label } from 'container/styled';
import { Button, Col, Input, Row, Form } from 'antd';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateOpportunities = () => {
  const [form] = Form.useForm();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const dispatch = useDispatch();
  const isLoading = useSelector(st => st.admin.loading);
  const error = useSelector(err => err.ui.errors);
  const success = useSelector(su => su.ui.success);
  const [content, setContent] = useState('');

  const handleSubmit = data => {
    // console.log(content);
    const internshipData = {
      title: data.title,
      jobType: data.jobType,
      location: data.location,
      applicationLink: data.applicationLink,
      shortDescription: data.shortDescription,
      deadline: data.deadline,
      howtoApply: data.howtoApply,
      organisationName: data.organisationName,
      content,
    };
    try {
      dispatch(createInternshipEntity(internshipData));
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
      <h2>Create Internship</h2>
      <EditForm name="createInternship" form={form} onFinish={handleSubmit}>
        <Row gutter={25}>
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
              <Label>Job Type</Label>
              <Form.Item name="jobType" rules={[{ message: 'Please provide a job type!', required: true }]}>
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
              <Label>Application Link</Label>
              <Form.Item name="applicationLink" rules={[{ message: 'Please provide a location!', required: true }]}>
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
              <Label>Organisation Name</Label>
              <Form.Item
                name="organisationName"
                rules={[{ message: 'Please provide an organisation name!', required: true }]}
              >
                <Input type={'text'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>How to Apply</Label>
              <Form.Item name="howtoApply" rules={[{ message: 'Please provide application method!', required: true }]}>
                <Input type={'text'} />
              </Form.Item>
            </InputGroup>
          </Col>

          <Col md={24}>
            <InputGroup>
              <Label>Content</Label>
              <Form.Item name="content" rules={[{ message: 'Please provide apprenticeship content!', required: true }]}>
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
              <Label>Submission Deadline</Label>
              <Form.Item name="deadline" rules={[{ message: 'Please provide a deadline!', required: true }]}>
                <Input type={'date'} />
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

export default CreateOpportunities;
