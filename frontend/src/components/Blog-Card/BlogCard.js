import "./BlogCard.scss";
import { Avatar, Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Meta from "antd/es/card/Meta";
import { Link } from "react-router-dom";




const BlogCard = ({ blog }) => {
  //console.log("http://localhost:8000" +blog.image)
    return (
    <div className="blog-card">
      <Card
        style={{ width: 300 }}
        
        cover={
          

          <img src={"http://localhost:8000"+blog.image} alt="example"/>}>

        <Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
          title={blog.title}
          description={
            <>
              <span>By {blog.createdBy.username}</span>
              <p>
                {blog.description.substring(0, 50)}...{" "}
                <Link to={"/blog-details/" + blog._id}>Read More</Link>
              </p>
            </>
          }>
        </Meta>
      </Card>
    </div>
  )
}

export default BlogCard;