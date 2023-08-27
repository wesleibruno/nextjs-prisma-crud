"use client";
import { useRouter } from "next/navigation";

function NewPage() {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const res = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    router.refresh();
    router.push('/')
  };
  return (
    <div className="h-screen flex justify-center items-center ">
      <form
        className="bg-slate-800 p-10 rounded-md lg:w-2/4 md:w-1/2"
        action=""
        onSubmit={onSubmit}
      >
        <label htmlFor="title" className="font-bold text-sm">
          Título da Tarefa
        </label>
        <input
          id="title"
          className="border border-gray-400 p-2 mb-4 w-full rounded-md text-black"
          type="text"
          placeholder="titulo"
        />
        <label htmlFor="description" className="font-bold text-sm">
          Descrição da Tarefa
        </label>
        <textarea
          className="border border-gray-400 p-2 mb-4 w-full rounded-md text-black"
          name=""
          id="description"
          rows="3"
          placeholder="Descreva sua tarefa"
        ></textarea>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Criar
        </button>
      </form>
    </div>
  );
}

export default NewPage;
