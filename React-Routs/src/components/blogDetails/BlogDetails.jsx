import { useParams } from "react-router-dom";
import "./BlogDetails.css";
import Blog1 from "../blog1/Blog1";
import Blog2 from "../blog2/Blog2";
import Blog3 from "../blog3/Blog3";
import Blog4 from "../blog4/Blog4";

function BlogDetails() {
  const { id } = useParams();

  return (
    <div className="blog-details">
      {id === "1" && (
        <>
          <Blog1/>
        </>
      )}
      {id === "2" && (
        <>
          <Blog2/>
        </>
      )}
      {id === "3" && (
        <>
           <Blog3/>
        </>
      )}
      {id === "4" && (
        <>
           <Blog4/>
        </>
      )}
    </div>
  );
}

export default BlogDetails;
