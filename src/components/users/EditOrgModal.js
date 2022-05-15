import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Col, Form, Input, Row } from 'antd';
import { EditForm, InputGroup, InputTextarea, Label } from 'container/styled';



import { editOrgDetails } from 'app/features/users';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditOrganisation = (entity) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const item = entity?.entity;
    const isLoading = useSelector(st => st.admin.loading);
    const error = useSelector(err => err.ui.errors);
    const success = useSelector(su => su.ui.success);

    // console.log(form);

    useEffect(() => {
      form.setFieldsValue({ ...item });
    }, [entity, form, item]);

    const handleSubmit = data => {
      // console.log(content);
      const userData = {
        imageUrl: data.imageUrl,
        numberOrname: data.numberOrname || '',
        street: data.street || '',
        city: data.city || '',
        postcode: data.postcode || '',
        bio: data.bio || '',
        email: data.email,
        userId: item.userId,
        fullname: data.fullname || '',
        mobile: data.mobile || '',
        website: data.website || '',
        backgroundImage: data.backgroundImage,
        organisationName: data.organisationName || '',
        organisationType: data.organisationType || '',
        followersCount: data.followersCount,
        followingCount: data.followingCount,
        linkedIn: data.linkedIn || '',
        tiktok: data.tiktok || '',
        instagram: data.instagram || '',
        twitter: data.twitter || '',
        industry: data.industry || '',
        founded: data.founded || '',
        companySize: data.companySize || '',
      };
      try {
        dispatch(editOrgDetails(userData));
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
      <h2>Edit {item.username}</h2>
      <EditForm name="editUser" form={form} onFinish={handleSubmit}>
        <Row gutter={25}>
          <Col md={24}>
            <InputGroup>
              <Label>Account Holder Full Name</Label>
              <Form.Item name="fullname">
                <Input type={'text'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>Organisation Name</Label>
              <Form.Item name="organisationName">
                <Input type={'text'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>Organisation Type</Label>
              <Form.Item name="organisationType">
                <Input type={'text'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>Company Size</Label>
              <Form.Item name="companySize">
                <Input type={'text'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>Company Founded</Label>
              <Form.Item name="founded">
                <Input type={'text'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>Industry</Label>
              <Form.Item name="industry">
                <Input type={'text'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>Email</Label>
              <Form.Item name="email">
                <Input type={'text'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>Mobile Number</Label>
              <Form.Item name="mobile">
                <Input type={'text'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>Website</Label>
              <Form.Item name="website">
                <Input type={'text'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>Biography</Label>
              <Form.Item name="bio">
                <InputTextarea type={'text'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>House Number or Name</Label>
              <Form.Item name="numberOrname">
                <Input type={'text'} />
              </Form.Item>
            </InputGroup>
            <InputGroup>
              <Label>Street</Label>
              <Form.Item name="street">
                <Input type={'text'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>City</Label>
              <Form.Item name="city">
                <Input type={'text'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>Post Code</Label>
              <Form.Item name="postcode">
                <Input type={'text'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>Followers</Label>
              <Form.Item name="followersCount">
                <Input type={'number'} />
              </Form.Item>
            </InputGroup>
          </Col>

          <Col md={24}>
            <InputGroup>
              <Label>Following</Label>
              <Form.Item name="followingCount">
                <Input type={'number'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>LinkedIn</Label>
              <Form.Item name="linkedIn">
                <Input type={'text'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>Twitter</Label>
              <Form.Item name="twitter">
                <Input type={'text'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>Instagram</Label>
              <Form.Item name="instagram">
                <Input type={'text'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>TikTok</Label>
              <Form.Item name="tiktok">
                <Input type={'text'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>Image URL</Label>
              <Form.Item name="imageUrl">
                <Input type={'text'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>Background Image URL</Label>
              <Form.Item name="backgroundImage">
                <Input type={'text'} />
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

export default EditOrganisation;
