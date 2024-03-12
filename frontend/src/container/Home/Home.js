import { useContext, useEffect,useState } from "react";
import "./Home.scss";
import BlogCard from "../../components/Blog-Card/BlogCard";
import { Row,Col } from "antd";
import { AuthcontextData } from "../../context/Authcontext";

const Home = () =>{
 const [blogs,setBlogs]=useState([]);
 const authCtx= useContext(AuthcontextData);
 // console.log(authCtx);
  //  const authCtx=useContext(AuthcontextData);
  //   console.log(authCtx);
  
  const fetchData = async () => {
    try {
      const token = localStorage.getItem('jwt');
      //console.log('Token:', token);
  
      if (!token) {
        throw new Error("No token found");
      }
  
      const response = await fetch("https://full-stack-9aei.onrender.com/api/v1/blog/getBlogList",{
        method: 'GET',
        // headers: {
        //   "Authorization": `Bearer ${token}`,
           
        // },
         
      });
  
      // if (!response.ok) {
      //   throw new Error(`HTTP error! Status: ${response.status}`);
      // }
  
      const data = await response.json();
      // console.log(data);
      setBlogs(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error appropriately (e.g., show a user-friendly message)
    }
  };
  
  useEffect(()=>{
      fetchData();
  },[]);

  return(
      <div className="blog-Home">
        <Row gutter={16}>
           { blogs && blogs.map((blog)=>(
            <Col key={blog._id}>
            <BlogCard  blog={blog}/>
            </Col>
            ))}
          </Row>
      </div>

  );
};

export default Home;