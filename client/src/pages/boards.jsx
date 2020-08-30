import React, { useState, useEffect } from "react";

// IMPORT OF COMPONENTS
import BoardTable from "components/boardTable";
import CreateBoardModal from "components/createBoardModal";
import useModal from "hooks/useModal";

import { useAuthContext } from "store/authContext";
import EditBoardModal from "components/editBoardModal";

const Boards = () => {
  const { user } = useAuthContext();
  const [boards, setBoards] = useState([]);
  const [clickedBoard, setClickedBoard] = useState({});
  const [editBoard, setEditBoard] = useState(false);

  const toggleEdit = (board) => {
    setEditBoard(!editBoard);
    setClickedBoard(board);
  };

  const { isShowing, toggle } = useModal();

  useEffect(() => {
    const getBoards = async () => {
      const response = await fetch("/api/boards", {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      });
      const { error, boards } = await response.json();
      if (!error) setBoards(boards);
    };
    getBoards();
  }, []);

  return (
    <>
      <BoardTable
        toggle={toggle}
        boards={boards}
        setBoards={setBoards}
        toggleEdit={toggleEdit}
      />
      <CreateBoardModal
        isShowing={isShowing}
        hide={toggle}
        setBoards={setBoards}
        boards={boards}
      />
      {editBoard && (
        <EditBoardModal
          hide={toggleEdit}
          isShowing={editBoard}
          clickedBoard={clickedBoard}
          boards={boards}
          setBoards={setBoards}
        />
      )}
    </>
  );
};

export default Boards;
