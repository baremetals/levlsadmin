import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthWrapper } from './style';
import { login } from 'app/features/admin';
import { Checkbox } from 'components/checkbox/checkbox';
import Heading from 'components/heading/heading';

const SignIn = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(st => st.admin.loading);
  const error = useSelector(err => err.ui.errors);
  const success = useSelector(su => su.ui.success);
  const [form] = Form.useForm();
  const [state, setState] = useState({
    checked: null,
  });

  const handleSubmit = (data) => { 
    dispatch(login({...data}));
  };

  const onChange = checked => {
    setState({ ...state, checked });
  };

  useEffect(() => {
    if (error.error) {
      toast.error(error.error);
    }
    if (error.general) {
      toast.error(error.general);
    }
    if (success.message !== {}) {
      toast.success(success.message);
    }
  }, [error, success]);

  return (
    <AuthWrapper>
      <div className="auth-contents">
        <Form name="login" form={form} onFinish={handleSubmit} layout="vertical">
          <Heading as="h3">
            Sign in to <span className="color-secondary">Admin</span>
          </Heading>
          <Form.Item
            name="email"
            rules={[{ message: 'Please input your Email!', required: true }]}
            label="Email Address"
            // initialValue="maguyva@icloud.com"
            placeholder="Please enter a valid email address"
          >
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Password">
            <Input.Password placeholder="Please enter a secure password" />
          </Form.Item>
          <div className="auth-form-action">
            <Checkbox onChange={onChange}>Keep me logged in</Checkbox>
            <NavLink className="forgot-pass-link" to="#">
              Forgot password?
            </NavLink>
          </div>
          <Form.Item>
            <Button className="btn-signin" htmlType="submit" type="primary" size="large">
              {isLoading ? 'Loading...' : 'Sign In'}
            </Button>
          </Form.Item>
        </Form>
      </div>
      <ToastContainer />
    </AuthWrapper>
  );
};

export default SignIn;
