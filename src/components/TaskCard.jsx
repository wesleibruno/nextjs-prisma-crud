"use client";
import { useRouter } from "next/navigation";

function TaskCard({ task }) {
  const router = useRouter();
  return (
    <div
      key={task.id}
      className="bg-slate-900 p-3 hover:bg-slate-800 hover:cursor-pointer"
      onClick={() => router.push(`/tasks/edit/${task.id}`)}
    >
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <div className="flex justify-end items-center space-x-2">
        <button
          className="bg-red-700 p-2 rounded-md"
          onClick={async () => {
            await fetch(`/api/tasks/${task.id}`, {
              method: "DELETE",
            });
            router.refresh();
            router.push("/");
          }}
        >
          Delete
        </button>
        <button
          className="bg-blue-700 p-2 rounded-md"
          onClick={() => router.push(`/tasks/edit/${task.id}`)}
        >
          Editar
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
