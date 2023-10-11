import React from "react";
import { useDispatch } from "react-redux";
import { getAuthUser } from "../../../helpers/functions";
import { deleteComment } from "../../../store/comments/commentsActions";

const CommentItem = ({ comment }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div style={{ border: "1px solid black", width: "50%" }}>
        <p>@{comment.user}</p>
        <p>{comment.body}</p>
        <p>{comment.rating}</p>
        {getAuthUser() === comment.user && (
          <button
            onClick={() => {
              dispatch(deleteComment({ commentId: comment.id }));
            }}
          >
            Удалить
          </button>
        )}
      </div>
    </div>
  );
};

export default CommentItem;
