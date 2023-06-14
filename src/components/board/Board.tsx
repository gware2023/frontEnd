import { boardState } from "../../recoil/board";
import { useRecoilValue } from "recoil";
import { useCallback, useEffect, useState } from "react";
import { getBoards } from "../../api/board/board";

export default function Board() {
  const board = useRecoilValue(boardState);

  const onClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    getBoards().then((data) => console.log(data));
  }, []);

  return (
    <div>
      <button onClick={onClick}>board</button>
    </div>
  );
}
