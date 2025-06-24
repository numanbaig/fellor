import React from "react";
import TodoItem from "@/components/ui/TodoItem";

export default function TodoList({ todos }) {
  return (
    <div className="bg-background border rounded-xl p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold text-base">To-Do List</span>
      </div>
      <div className="flex flex-col gap-3">
        {todos.map((todo, idx) => (
          <TodoItem key={todo.label} {...todo} />
        ))}
      </div>
    </div>
  );
} 