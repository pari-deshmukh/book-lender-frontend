import React from 'react';
import {useContext} from 'react';
import { Form, Input, Button, Select } from 'antd';

import { status, json } from '../utilities/requestHandlers';
import UserContext from '../contexts/user';

// add some layout to keep the form organised on different screen sizes
const formItemLayout = {
    labelCol: { xs: { span: 24 }, sm: { span: 6 } },
    wrapperCol: { xs: { span: 24 }, sm: { span: 12 } }
  };
  const tailFormItemLayout = {
    wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 6 } },
  };
  
  // define validation rules for the form fields
const titleRules = [
    { required: true, message: 'Please input the book title!', whitespace: true }
]

const authorRules = [
    { required: true, message: 'Please input the author name!', whitespace: true }
]

const isbnRules = [
    { required: true, message: 'Please input the ISBN code!', whitespace: true }
]

const summaryRules = [
    { required: true, message: 'Please input a short summary about the book!' }
];

const { Option } = Select;

function GetUser() {
    const context = useContext(UserContext);
    const user = context.user;
    return user;
}
/**
 * AddBook form component for user signup.
 *
 * @component
 * @example
 * return (
 *   <AddBook />
 * )
 */
 class AddBookForm extends React.Component {

  constructor(props) {
      super(props);
      this.onFinish = this.onFinish.bind(this); 
  }
  
  onFinish = (values) => {
    console.log('Received values of form: ', values);
    values.ownerID = GetUser.ID;
    console.log(values.ownerID)
    const { confirm, ...data } = values;  // ignore the 'confirm' value in data sent
    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(GetUser.username + ":" + GetUser.password));
    fetch('http://localhost:3030/api/v1/books', {
        method: "POST",
        body: JSON.stringify(data),
        headers: headers
    })
    .then(status)
    .then(json)
    .then(data => {
        // TODO: display success message and/or redirect
        console.log(data);
        alert("Book added")
    })
    .catch(err => {
        // TODO: show nicely formatted error message and clear form
        alert("Error adding book");
    });  
  };
  
  render() {
    return (
      <Form {...formItemLayout} name="addbook" onFinish={this.onFinish} scrollToFirstError >

      <Form.Item name="title" label="Book Title" rules={titleRules} >
          <Input />
      </Form.Item>

        <Form.Item name="author" label="Book Author" rules={authorRules} >
            <Input />
        </Form.Item>

        <Form.Item name="isbn" label="ISBN" rules={isbnRules} >
            <Input />
        </Form.Item>

        <Form.Item name="availabilityStatus" label="Availability Status">
            <Select defaultValue="available">
                <Option value="available">Available</Option>
                <Option value="requested">Requested</Option>
                <Option value="on-loan">On Loan</Option>
            </Select>
        </Form.Item>

        <Form.Item name="summary" label="Summary" rules={summaryRules} >
            <Input.TextArea />
        </Form.Item>
        
        <Form.Item name="frontCoverImageURL" label="Front Cover Image URL">
            <Input />
        </Form.Item>
        
        <Form.Item name="rearCoverImageURL" label="Rear Cover Image URL" >
            <Input />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
                Add
            </Button>
        </Form.Item>
      </Form>
    );
  };
};
  
export default AddBookForm;  
