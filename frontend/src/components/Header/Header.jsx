import { Navigate, useNavigate } from "react-router";
import "./Header.scss";
import { Layout, Menu } from "antd";
import { useState } from "react";
//import { useState } from "react";
const { Header: Navbar } = Layout;

const Header = () => {
  const navigate = useNavigate();
  //const[islogedin,setislogedin]=useState(localStorage.getItem('jwt'));


 //const islogedin= localStorage.getItem('jwt');
  //console.log(islogedin);
 const menuItem=[
   
    {
         key:"/",
         label:"Login"
    },
    {
        key:"/home",
        label:"Home"
   },
   {
    key:"/create-blog",
    label:"Create Blog",
   }

 ];

 
  const onMenuClick = (e) => {
    console.log(e.key);
  // if (e.key === "/login") {
  //   setislogedin(false);
   
  //   navigate("/login"); // Redirect to the login page or any other appropriate route
  // } else {
  //   navigate(e.key);
  // }
    navigate(e.key);
  };











  return (
    <header className="blog-hearder">
      <Navbar className="navbar">
        <span onClick={() => navigate("/home")}>Blog App</span>

        <Menu
          className="link"
          theme="light"
          mode="horizontal"
          items={menuItem}
          onClick={onMenuClick}
        />
      </Navbar>
    </header>
  );
};

export default Header;

//40:45
