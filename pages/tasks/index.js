import React from "react";
import axios from "axios";
import Link from "next/link";

function Tasks({ tasks }) {
  return (
    <div className="w-3/4 p-4 text-black ">
      <h1 className="text-2xl font-bold mb-4 text-white">To-Do List</h1>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`p-4 rounded shadow cursor-pointer ${
              task.completed ? "bg-green-100" : "bg-gray-300"
            }`}
          >
            <Link href={`/tasks/${task.id}`}>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">{task.title}</span>
                <span
                  className={`px-2 py-1 rounded text-sm font-medium ${
                    task.completed
                      ? "bg-green-200 text-green-800"
                      : "bg-red-200 text-red-800"
                  }`}
                >
                  {task.completed ? "Completed" : "Pending"}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;

// ISR
export async function getStaticProps() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    const tasks = response.data;
    return {
      props: {
        tasks,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return {
      props: {
        tasks: [],
      },
    };
  }
}
