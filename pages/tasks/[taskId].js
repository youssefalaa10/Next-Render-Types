import React from 'react';
import axios from 'axios';


function Task({ task }) {

  if (!task) {
    return <div className="w-3/4  p-4 text-center">Loading...</div>;
  }

  return (
    <div className="w-3/4  p-4 text-black">
      <div className={`p-4 rounded shadow ${
        task.completed ? 'bg-green-100' : 'bg-red-100'
      }`}>
        <h1 className="text-2xl font-bold mb-2">Task {task.id}</h1>
        <p className="text-lg">{task.title}</p>
        <div className="mt-2">
          <span className={`px-2 py-1 rounded text-sm font-medium ${
            task.completed ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
          }`}>
            {task.completed ? 'Completed' : 'Pending'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Task;


export async function getStaticPaths() {
  return {
    paths: [
      { params: { taskId: "1" } },
      { params: { taskId: "2" } },
      { params: { taskId: "3" } },
    ],
    fallback: true, 
  };
}


export async function getStaticProps({ params }) {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${params.taskId}`);
    const task = res.data;

    return {
      props: {
        task,
      },
      revalidate: 10, 
    };
  } catch (error) {
    console.error('Error fetching task:', error);
    return {
      props: {
        task: null,
      },
    };
  }
}
