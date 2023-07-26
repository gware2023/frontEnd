import PostTable from "./post/PostTable";
import { getBoards } from "../../api/board/board";
import { useEffect } from "react";

export default function Dashboard() {
  return (
    <div className="px-20">
      <PostTable />
    </div>
  );
}
