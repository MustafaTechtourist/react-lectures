import React from "react";
import Avatar from "./Avatar";
import UserInfo from "./UserInfo";

const Comment = ({ author, text, date }) => {
  return (
    <>
      {/* Version 1: before refactoring */}
      {/* <div className="Comment">
        <div className="UserInfo">
          <img className="Avatar" src={author.avatarUrl} alt={author.name} />
          <div className="UserInfo-name">{author.name}</div>
        </div>
        <div className="Comment-text">{text}</div>
        <div className="Comment-date">{formatDate(date)}</div>
      </div> */}

      {/* Version 2: refactoring to Avatar component */}
      {/* <div className="Comment">
        <div className="UserInfo">
          <Avatar author={author} />
          <div className="UserInfo-name">{author.name}</div>
        </div>
        <div className="Comment-text">{text}</div>
        <div className="Comment-date">{formatDate(date)}</div>
      </div> */}

      {/* Version 3: refactoring UserInfo */}
      <div className="Comment">
        <UserInfo author={author} />
        <div className="Comment-text">{text}</div>
        <div className="Comment-date">{formatDate(date)}</div>
      </div>
    </>
  );
};

function formatDate(date) {
  return date.toLocaleDateString();
}

export default Comment;
