
import { MdOutlineInsertComment } from "react-icons/md";
import { useEffect, useState } from "react";
import { executeGetPostService } from "../api/PostApiService";
import { executeGetCommentOfPost } from "../api/CommentApiService";
import { FaRegBookmark } from "react-icons/fa";
import AuthenticatedNavbar from "./AuthenticatedNavbar";
import CommentPopup from "./CommentPopup";
import Loader from "./Loader";
import { Link, useNavigate } from "react-router-dom";
const Feeds = () => {
  const [feeds, setFeeds] = useState([]);
 
  const [comments, setComments] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [loader, setLoader] = useState(true);

  async function retrievePost() {
    const response = await executeGetPostService();
    if (response.status === 200) {
      console.log(response.data.content);
      setFeeds(response.data.content);
      setLoader(false);
    } else {
      console.log("error");
    }
  }

  async function retrieveCommentOfPost(postId) {
    const response = await executeGetCommentOfPost(postId);
    if (response.status === 200) {
      console.log(response.data.content)
      setComments(response.data.content);
      setShowPopup(true); // Show the popup when comments are retrieved
    } else {
      console.log("Error");
    }
  }
 
  const navigate=useNavigate()
  // const goToSinglePostView=(postId)=>{
  //   navigate(`/blog/:postId`)
  // }

  useEffect(() => {
    retrievePost();
  }, []);
  return (
    <>
      <AuthenticatedNavbar />
      <div className="nav-scroller py-1 mb-3 border-bottom container">
   
  </div>
 <div className=" container">
 <nav className="nav nav-underline justify-content-between">
     
      
     <a className="nav-item nav-link link-body-emphasis" >Technology</a>
     <a className="nav-item nav-link link-body-emphasis" >Design</a>
     
     <a className="nav-item nav-link link-body-emphasis" >Business &amp; Finance</a>
     <a className="nav-item nav-link link-body-emphasis" >Politics</a>
     <a className="nav-item nav-link link-body-emphasis" >Public opinion</a>
     <a className="nav-item nav-link link-body-emphasis" >science</a>
     <a className="nav-item nav-link link-body-emphasis" >Health</a>
     <a className="nav-item nav-link link-body-emphasis" >Fashion</a>
     <a className="nav-item nav-link link-body-emphasis" >Travel</a>
   </nav>
 </div>
      {loader && (
        <div className="flex justify-center items-center h-screen">
          <Loader />
        </div>
      )}
      <div className="container mt-5">
        <center><h3>All Posts</h3></center>
        <div className="row mb-2" >
          {feeds.map((post, index) => (
            
            <div key={index} className="col-md-6 mb-2">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                
               
                  <strong className="d-inline-block mb-2 text-primary-emphasis">
                    World
                  </strong>
                  <h3 className="mb-0">{post.title}</h3>
                  <div className="mb-1 text-body-secondary">Nov 12</div>
                  <p className="card-text mb-auto">{post.description.split(' ').slice(0, 10).join(' ')}</p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
              
                    <span onClick={()=>navigate(`/blog/${post.id}`)} className="text-green-400 text-xl font-bold underline cursor-pointer">Continue Reading</span>
                 
                    <MdOutlineInsertComment type="button"
                      onClick={() => {
                        console.log("Comment button clicked");
                        setSelectedPostId(post.id);
                        retrieveCommentOfPost(post.id);
                      }}
                      className="cursor-pointer"
                      size={28}
                    />
                 
                 
                    <FaRegBookmark size={28} />
                  
                    
                </div>
                
                </div>
                <div className="col-auto d-none d-lg-block">
                 
                  <img  className="bd-placeholder-img"
              width="200"
              height="100%" src={`data:image/jpeg;base64,${post.postCover}`}/>
                </div>
                </div>
                
              
            </div>
            
          
          ))}
         {showPopup && (
        <CommentPopup
        
          postId={selectedPostId}
          comments={comments}
          onClose={() => setShowPopup(false)}
        />
      )}
        </div>  
      </div>
    </>
  );
};

export default Feeds;
