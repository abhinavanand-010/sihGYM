import React from 'react';
import Header from './Header';
import { blogs } from "./Blog";
import FitQuestContainer from "./FitQuestContainer";


function Education() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-6 py-12 w-[1200px]">
        <h2 className="mb-12 text-3xl font-bold text-center">Fitness Blogs</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div key={blog.id} className="p-4 bg-white rounded-md shadow-md">
              <img
                src={blog.image}
                alt={`Image for ${blog.title}`}
                className="mx-auto"
                width={150}
                height={150}
              />
              <h3 className="mt-4 mb-2 text-xl font-bold text-center">{blog.title}</h3>
              <a
                href={`/education/${blog.id}`}
                className="block mt-2 text-center text-blue-500 hover:underline"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
      <FitQuestContainer/>
    </>
  );
}

export default Education;
