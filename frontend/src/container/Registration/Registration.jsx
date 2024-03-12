
import './Registration.scss';
import { Link, } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from 'react-router';

import { Button, Form, Input,message } from 'antd';

function Registration() {

  const navigate=useNavigate();
  const [form]=Form.useForm();
  
const onFinish= async(values)=>{
  console.log(values)
  try{
    const response= await  axios.post("https://full-stack-9aei.onrender.com/api/v1/auth/rigester",values);
    message.success("User Registered successfully Please login in continew");
    form.resetFields();
    navigate("/");
  }catch(err){
        message.error("Error registering user ,please tyr agin later");          
  }

};
  return (
    <div className='login-container'>
      <h1>Sign-Up</h1>
      <Form 
        layout='vertical'
        name="basic"
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
        form={form}
        >
        <Form.Item
          className='frominput'
          label="Username"
          name="username"
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            span: 15,
          }}
        >
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
      Already have an account?<Link to="/">Login</Link>
    </div>
  );
}

export default Registration;
