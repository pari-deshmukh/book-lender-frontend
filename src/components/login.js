import React from 'react';
import { Form, Input, Button } from 'antd';

// add some layout to keep the form organised on different screen sizes
const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 6 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 12 } }
};
const tailFormItemLayout = {
  wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 6 } },
};

// define validation rules for the form fields
const passwordRules = [
    { required: true, message: 'Please input your password!' }
];

const usernameRules = [
    { required: true, message: 'Please input your username!', whitespace: true }
]

/**
 * Registration form component for app signup.
 */
class LoginForm extends React.Component {

  constructor(props) {
      super(props);
      this.onFinish = this.onFinish.bind(this);
  }

  onFinish = (values) => {
    console.log('Received values of form: ', values);
    const { username, password } = values;  // ignore the 'confirm' value in data sent
    fetch('http://localhost:3030/api/v1/users/login', {
        method: "POST",
        headers: {
            "Authorization": "Basic " + btoa(username + ":" + password)
        }        
    })
    .then(response => {
        console.log(response.status);
    })
    .catch(error => {
        // TODO: show nicely formatted error message and clear form
        alert(`Error: ${JSON.stringify(error)}`);
    });  
  };

  render() {
    return (
      <Form {...formItemLayout} name="login" onFinish={this.onFinish} scrollToFirstError >

        <Form.Item name="username" label="Username" rules={usernameRules} >
            <Input />
        </Form.Item>

        <Form.Item name="password" label="Password" rules={passwordRules} hasFeedback >
            <Input.Password />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
                Login
            </Button>
        </Form.Item>
      </Form>
    );
  };
};

export default LoginForm;