import { Navigate, useNavigate } from "react-router";
import "./Header.scss";
import { Layout, Menu } from "antd";
import { useEffect, useState } from "react";

const { Header: Navbar } = Layout;

const Header = () => {
  const navigate = useNavigate();
  const [islogedin, setislogedin] = useState(false);
  const [reload,setreload]=useState(false);
  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      setislogedin(true);
    } else {
      setislogedin(false);
    }
  }, [reload]);

  const updateLoginStatus = (isLoggedIn) => {
    setislogedin(isLoggedIn);
  };

  const [menuItem, setMenuitem] = useState(islogedin
    ? 
    [
      {
        key: "/",
        label: "Login"
      },
      {
        key: "/home",
        label: "Home"
      },
      {
        key: "/create-blog",
        label: "Create Blog",
      }
    ]:[
      {
        key: "/",
        label: "Logout"
      },
      {
        key: "/home",
        label: "Home"
      },
      {
        key: "/create-blog",
        label: "Create Blog",
      }
    ]
  );

  const onMenuClick = (e) => {
    console.log(e.key);
    if (e.key === "/") {
      setislogedin(false);
      localStorage.removeItem("jwt");
      updateLoginStatus(false); // Update the state to trigger re-render
      setMenuitem(menuItem);
      setreload(!reload);
      navigate("/"); // Redirect to the login page or any other appropriate route
    } else {
      navigate(e.key);
    }
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
