import React, { Component, Fragment } from "react";

import { Form, Icon, Input, Button, Checkbox } from "antd";
import { fetchUserLogin } from "./api/user.js";
import "./login.css";
class NormalLoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit = e => {
    e.preventDefault(); //阻止默认表单提交事件  目的是为了先去验证表单。

    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        let res = await fetchUserLogin(values);
        console.log(res);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Fragment>
        <div id="components-form-demo-normal-login">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [{ required: true, message: "Please input your username!" }]
              })(<Input prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="Username" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [{ required: true, message: "Please input your Password!" }]
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
              <a className="login-form-forgot" href="www.baidu.com">
                Forgot password
              </a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <a href="www.baidu.com">register now!</a>
            </Form.Item>
          </Form>
        </div>
      </Fragment>
    );
  }
}
const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(NormalLoginForm);
// ReactDOM.render(<WrappedNormalLoginForm />, document.getElementById("root"));
export default WrappedNormalLoginForm;
