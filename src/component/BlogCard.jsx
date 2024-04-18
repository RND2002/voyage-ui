// BlogCard.js

import { FaRegBookmark } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { FcLike } from "react-icons/fc";
import { MdOutlineInsertComment } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import PropTypes from 'prop-types';
import { useState } from "react";
const BlogCard = ({ author, title, date, image }) => {
  const[like,setLike]=useState(false)
  return (
    <div className='border border-red-400 rounded-lg overflow-hidden sm:w-auto lg:w-[60%] sm:mx-4'>
    <div className='flex flex-col lg:flex-row'>
    <div className='lg:w-[40%] lg:h-[20rem]'>
  <img src={image} className='max-w-full max-h-full w-auto h-auto' alt='image'/>
</div>


      <div className='w-full lg:w-[60%]'>
        <div className="m-4">
          <h5 className='sm:font-medium font-bold text-xl mb-4'>{author}</h5>
        </div>
        <div>
          <h3 className=' sm:text-normal text-xl font-normal md:text-2xl mb-3 m-4'>{title}</h3>
        </div>
        <div className='flex justify-between sm:mt-12 lg:mt-16 m-4'>
          <div className='flex flex-row overflow-hidden'>
            <div>
              <p className='font-light'>{date}</p>
            </div>
            <div className='ml-4 overflow-hidden'>
              <button>Link</button>
            </div>
          </div>
          <div className="flex items-center lg:justify-start">
            
            <div className="flex items-center ">
              {like === false ? <FiHeart size={32} /> : <FcLike size={28} />}
            </div>
            <span className="mr-2">34 Like</span>
            <div><MdOutlineInsertComment size={28}/></div>
            <div className="mx-2">
              <FaRegBookmark size={28}/>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>

  

  

  )
}
BlogCard.propTypes = {
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  };

export default BlogCard;
