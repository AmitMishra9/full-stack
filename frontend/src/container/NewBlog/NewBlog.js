import axios from "axios";
import { Button, Form, Input, Upload, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";

const NewBlog = () => {
  const token = localStorage.getItem("jwt"); // Replace with your actual token
   console.log("token-",token);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log(values);
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("image", values.image.file);
    formData.append("createdBy", "65ef2a8a54f96577b2d203f8");

    //  try {
    //   const response = await fetch("https://full-stack-9aei.onrender.com/api/v1/blog/createBlog", {
    //     method: "POST",
    //     body: values, // Assuming formData is already a FormData object
    //   });

    //   if (response.ok) {
    //     message.success("Blog saved successfully");
    //     navigate("/home");
    //   } else {
    //     // Handle error cases
    //     const errorMessage = await response.text();
    //     console.error(errorMessage);
    //     message.error("Something went wrong. Please try again.", errorMessage);
    //   }
    // } catch (error) {
    //   console.error(error);
    //   message.error("Something went wrong. Please try again.", error);
    // }

    try {
      const response = await axios.post(
        "https://full-stack-9aei.onrender.com/api/v1/blog/createBlog",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
        console.log("Axios <--> Response", response);
      message.success("Blog Save successfully");
      navigate("/home");
    } catch (error) {
      console.error(error);
      console.error("Response data:",error.response?.data);
      message.error("something worng please try again My Dear User", error);
    }
  };
  return (
    <div className="NewBlog">
      <h1> Creater Your Blog </h1>
      <Form
        layout="vertical"
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
        //   form={form}
      >
        <Form.Item
          className="frominput"
          label="title"
          name="title"
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.TextArea rows={5} />
        </Form.Item>

        <Form.Item label="Image" name="image">
          <Upload listType="picture-card" beforeUpload={() => false}>
            <button
              style={{
                border: 0,
                background: "none",
              }}
              type="button"
            >
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </button>
          </Upload>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            span: 15,
          }}
        >
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default NewBlog;
