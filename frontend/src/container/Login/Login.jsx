import React, { useContext, useEffect } from "react";
import "./Login.scss";
import { Button, Form, Input,message} from "antd";
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios'
import { AuthcontextData } from "../../context/Authcontext";


function Login() {
  const navigate=useNavigate();
  const authCtx=useContext(AuthcontextData)
  console.log(authCtx);

  useEffect(()=>{
     const token =localStorage.getItem('jwt');
     if(authCtx.isAuthrticated || token){
       authCtx.dispatch({type:"LOGIN"});
       navigate("/home");
     }
  },[]);

  const onFinish = async (values) => {
    
    console.log(values);
  
    

    try{
      const response= await  axios.post("https://full-stack-9aei.onrender.com/api/v1/auth/login",values
      );
    const jwt=response.data.token;
    localStorage.setItem("jwt",jwt);
      navigate("/home");
      message.success("Login successfully");

    }catch(err){
          message.error("Invalid User Name Password");          
    }
  
  };
  return (
    <div className="login-container">
      <h1>Login </h1>
      <Form
        layout="vertical"
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          className="frominput"
          label="Username"
          name="username"
          rules={[
            {
              required:true,
               message:"Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
         
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          
        >
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Link to='/register'>Create a new account</Link>
    </div>
  );
}

export default Login;
