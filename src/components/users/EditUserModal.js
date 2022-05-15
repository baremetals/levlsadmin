import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Col, Form, Input, Row } from 'antd';
import { EditForm, InputGroup, InputTextarea, Label } from 'container/styled';


import { editUserDetails } from 'app/features/users';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditUser = entity => {
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
      //   username: item.username,
      imageUrl: data.imageUrl,
      numberOrname: data.numberOrname || '',
      street: data.street || '',
      city: data.city || '',
      postcode: data.postcode || '',
      bio: data.bio || '',
      email: data.email,
      slogan: data.slogan || '',
      userId: item.userId,
      fullname: data.fullname || '',
      mobile: data.mobile || '',
      website: data.website || '',
      backgroundImage: data.backgroundImage,
      //   gender: data.gender || '',
      //   Pronouns: data.Pronouns || '',
      followersCount: data.followersCount,
      followingCount: data.followingCount,
      occupation: data.occupation || '',
      linkedIn: data.linkedIn || '',
      tiktok: data.tiktok || '',
      instagram: data.instagram || '',
      twitter: data.twitter || '',
      CV: data.CV || '',
    };
    try {
      dispatch(editUserDetails(userData));
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
              <Label>Full Name</Label>
              <Form.Item name="fullname">
                <Input type={'text'} />
              </Form.Item>
            </InputGroup>
          </Col>
          <Col md={24}>
            <InputGroup>
              <Label>Occupation</Label>
              <Form.Item name="occupation">
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
              <Label>Slogan</Label>
              <Form.Item name="slogan">
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
              <Label>Website</Label>
              <Form.Item name="website">
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
            <InputGroup>
              <Label>CV URL</Label>
              <Form.Item name="CV">
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

export default EditUser;
