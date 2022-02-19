import React from "react";
import Comment from "./Comment";

const comment = {
  date: new Date(),
  text: "I try to build react app!",
  author: {
    name: "Mou",
    avatarUrl: "/AvatarTest.png",
  },
};
const Person = () => {
  return (
    <Comment
      date={comment.date}
      text={comment.text}
      author={comment.author}
    ></Comment>
  );
};

export default Person;
