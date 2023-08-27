"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function NewPage({ params }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch(`/api/tasks/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
      });
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    await fetch(`/api/tasks/${params.id}`, {
      method: "PUT",
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    router.refresh();
    router.push("/");
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
          onChange={(e) => setTitle(e.target.value)}
          value={title}
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
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Salvar
        </button>
      </form>
    </div>
  );
}

export default NewPage;
