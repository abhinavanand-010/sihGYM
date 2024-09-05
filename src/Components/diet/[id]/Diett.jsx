// BlogDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dietPlans, randomDietPlans } from './DietData';
//import Footer from '../../Footer';
import FitQuestContainer from "../../FitQuestContainer";
import Header from '../../Header';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (id) {
      console.log(id);
      const foundBlog = dietPlans.find((blog) => blog.id === Number(id));
      setBlog(foundBlog);
    }
  }, [id]);

  if (!id || !blog) {
    return <div>{!id ? 'Loading...' : 'Blog not found'}</div>;
  }

  return (
    <>
      <Header />
      <div className="container mx-auto mt-10 px-4  w-[1200px]">
        <h2 className="mb-12 text-3xl font-bold text-center text-black">{blog.title}</h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="p-6 bg-white border border-gray-400 rounded-lg shadow-md lg:col-span-2 ">
            <img
              src={blog.image}
              alt={`Image for ${blog.title}`}
              className="mx-auto mb-6 h-[400px] w-[400px]"
              width={600}
              height={100}
            />
            <p className="text-lg text-gray-700">{blog.description}</p>
          </div>
          <div className="p-6 bg-white border border-gray-400 rounded-lg shadow-md lg:col-span-1">
            <h3 className="mb-6 text-xl font-bold">Other Diet Plans</h3>
            {randomDietPlans.map((blog) => (
              <div key={blog.id} className="pb-4 mb-4 border-b border-gray-300">
                <img
                  src={blog.image}
                  alt={`Image for ${blog.title}`}
                  className="mx-auto mb-2"
                  width={100}
                  height={100}
                />
                <a href={`/Diet/${blog.id}`} className="text-blue-500 hover:underline">{blog.title}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <FitQuestContainer />
    </>
  );
};

export default BlogDetail;
