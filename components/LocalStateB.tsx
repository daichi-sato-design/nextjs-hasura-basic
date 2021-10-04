import { VFC } from "react";
import { todoVar } from "../cache";
import { useReactiveVar } from "@apollo/client";
import Link from "next/link";

export const LocalStateB:VFC = () => {
  const todos = useReactiveVar(todoVar)
  return(
    <>
      <h2 className="mb-3 text-xl font-bold">makeVar</h2>
      <p className="mb-2">Read task page</p>
      {todos?.map((task, index) => (
        <p className="mb-3" key={index}>
          {task.title}
        </p>
      ))}
      <Link href="/local-state-a">
        <a className="py-1 px-3 border rounded-2xl hover:opacity-60">Back</a>
      </Link>
    </>
  )
}