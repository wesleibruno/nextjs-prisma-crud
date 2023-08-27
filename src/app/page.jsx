import { prisma } from "@/lib/prisma";
import TaskCard from "@/components/TaskCard";

async function loadTasks() {
  return await prisma.task.findMany();
}

// export const revalidate = 60;
export const dynamic = "force-dynamic";

async function HomePage() {
  const tasks = await loadTasks();
  return (
    <div className="p-3 grid grid-cols-3 gap-3 ">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default HomePage;
