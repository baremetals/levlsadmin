import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Col, Form, Input, Row } from 'antd';
import { EditForm, InputGroup, InputTextarea, Label } from 'container/styled';

import ModalEditEditor from '../../EditEditor';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

import { editFunding } from 'app/features/grants';

const EditOpportunities = entity => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const item = entity?.entity[0];
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const isLoading = useSelector(st => st.admin.loading);
  const [content, setContent] = useState(item.content);

  // console.log(form);

  useEffect(() => {
    // const stuff = entity?.entity[0];
    form.setFieldsValue({ ...item });
  }, [entity, form, item]);

  const handleSubmit = data => {
    // console.log(content);
    const grantData = {
      title: data.title,
      category: data.category,
      grantType: data.grantType,
      location: data.location,
      region: data.region,
      applicationLink: data.applicationLink,
      shortDescription: data.shortDescription,
      closingDate: data.closingDate,
      howtoApply: data.howtoApply,
      organisationName: data.organisationName,
      content,
      id: item.grantId,
    };
    try {
      dispatch(editFunding(grantData));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <h2>Edit Funding</h2>
      <EditForm name="editFunding" form={form} onFinish={handleSubmit}>
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
              <Label>Category</Label>
              <Form.Item name="category" rules={[{ message: 'Please provide a category!', required: true }]}>
                <Input type={'text'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>Grant Type</Label>
              <Form.Item name="grantType" rules={[{ message: 'Please provide a grant type!', required: true }]}>
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
              <Label>Region</Label>
              <Form.Item name="region" rules={[{ message: 'Please provide a region!', required: true }]}>
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
              <Form.Item name="closingDate" rules={[{ message: 'Please provide a deadline!', required: true }]}>
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
    </>
  );
};

export default EditOpportunities;