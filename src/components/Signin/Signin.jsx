import { useState } from 'react';
import { Modal, Tabs, Button, Checkbox, Form, Input, Space } from 'antd';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import styles from './Signin.module.css';
import { useSigninStore } from '../../store/signin';

export const Signin = () => {
  const [formLogin] = Form.useForm();
  const [formRegister] = Form.useForm();
  const [showModal, toggleShowModal] = useSigninStore((state) => [
    state.signin,
    state.toggleSignin,
  ]);
  const [defaultTab, setDefaultTab] = useSigninStore((state) => [
    state.defaultTab,
    state.setDefaultTab,
  ]);
  const [activeTab, setActiveTab] = useState(defaultTab);

  const onLogin = async (values) => {
    // const graphql = JSON.stringify({
    //   query: `mutation Login {
    //       login(loginInput: {
    //         email: "${values.Email}",
    //         password: "${values.Password}"
    //       }) {
    //         token
    //         user {
    //           email,
    //           username,
    //           rol
    //         }
    //       }
    //     }`,
    // });
    // setLoading(true);
    // try {
    //   const response = await fetch(`http://localhost:3000/api`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: graphql,
    //   });
    //   const data = await response.json();
    //   if (data.errors) {
    //     openNotification('error', 'Login error', data.errors[0].message + '!');
    //     throw new Error(data.errors[0].message);
    //   }
    //   setSession(data.data.login, values.remember);
    //   openNotification(
    //     'success',
    //     'Login success',
    //     'Welcome back ' + data.data.login.user.username + '!'
    //   );
    // } catch (error) {
    //   onLoginFailed(error);
    // } finally {
    //   setLoading(false);
    // }
  };

  const onLoginFailed = (_errorInfo) => {
    formLogin.resetFields();
  };

  const onRegister = async (values) => {
    // const graphql = JSON.stringify({
    //   query: `mutation Login {
    //       login(loginInput: {
    //         email: "${values.Email}",
    //         password: "${values.Password}"
    //       }) {
    //         token
    //         user {
    //           email,
    //           username,
    //           rol
    //         }
    //       }
    //     }`,
    // });
    // setLoading(true);
    // try {
    //   const response = await fetch(`http://localhost:3000/api`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: graphql,
    //   });
    //   const data = await response.json();
    //   if (data.errors) {
    //     openNotification('error', 'Login error', data.errors[0].message + '!');
    //     throw new Error(data.errors[0].message);
    //   }
    //   setSession(data.data.login, values.remember);
    //   openNotification(
    //     'success',
    //     'Login success',
    //     'Welcome back ' + data.data.login.user.username + '!'
    //   );
    // } catch (error) {
    //   onLoginFailed(error);
    // } finally {
    //   setLoading(false);
    // }
  };

  const onRegisterFailed = (_errorInfo) => {
    formRegister.resetFields();
  };

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} format invalid!',
      password: '${label} is not validate password!',
      firstName: '${label} is not validate first name!',
      lastName: '${label} is not validate last name!',
    },
    string: {
      min: '${label} must be at least ${min} characters',
      max: '${label} must be at most ${max} characters',
      range: '${label} must be between ${min} and ${max} characters',
    },
  };

  const items = [
    {
      key: 'login',
      label: 'Login',
      children: (
        <Form
          form={formLogin}
          name="normal_login"
          className="login-form"
          size="large"
          initialValues={{ remember: true }}
          validateMessages={validateMessages}
          onFinish={onLogin}
          onFinishFailed={onLoginFailed}
        >
          <Form.Item name="Email" rules={[{ required: true, type: 'email' }]}>
            <Input
              placeholder="Enter your email"
              prefix={<MailOutlined className="site-form-item-icon" />}
            />
          </Form.Item>
          <Form.Item
            name="Password"
            rules={[{ required: true, type: 'string', min: 8 }]}
          >
            <Input.Password
              placeholder="Enter your password"
              prefix={<LockOutlined className="site-form-item-icon" />}
            />
          </Form.Item>

          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item className={styles.fixWidth}>
            <Space>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                block
              >
                Login
              </Button>
              <span> Or </span>
              <a
                className={styles.inline}
                onClick={() => {
                  setDefaultTab('register');
                  setActiveTab('register');
                }}
              >
                Register!
              </a>
            </Space>
          </Form.Item>
        </Form>
      ),
    },
    {
      key: 'register',
      label: 'Register',
      children: (
        <Form
          form={formRegister}
          name="normal_login"
          className="login-form"
          size="large"
          initialValues={{ remember: true }}
          validateMessages={validateMessages}
          onFinish={onRegister}
          onFinishFailed={onRegisterFailed}
        >
          <Form.Item name="Email" rules={[{ required: true, type: 'email' }]}>
            <Input
              placeholder="Enter your email"
              prefix={<MailOutlined className="site-form-item-icon" />}
            />
          </Form.Item>

          <Form.Item
            name="Username"
            rules={[{ required: true, type: 'string', min: 3, max: 20 }]}
          >
            <Input
              placeholder="Enter your username"
              prefix={<UserOutlined className="site-form-item-icon" />}
            />
          </Form.Item>

          <Form.Item
            name="Password"
            rules={[{ required: true, type: 'string', min: 8 }]}
          >
            <Input.Password
              placeholder="Enter your password"
              prefix={<LockOutlined className="site-form-item-icon" />}
            />
          </Form.Item>

          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item className={styles.fixWidth}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Sign up
            </Button>
            <span> already have an account? </span>
            <a
              className={styles.inline}
              onClick={() => {
                setDefaultTab('login');
                setActiveTab('login');
              }}
            >
              Login!
            </a>
          </Form.Item>
        </Form>
      ),
    },
  ];

  return (
    <>
      {showModal && (
        <Modal open={showModal} onCancel={toggleShowModal} footer={[]}>
          <Tabs
            defaultActiveKey={defaultTab}
            items={items}
            activeKey={activeTab}
            onTabClick={(key) => {
              setDefaultTab(key);
              setActiveTab(key);
            }}
          />
        </Modal>
      )}
    </>
  );
};
