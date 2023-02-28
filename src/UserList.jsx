import React from "react";
import ListItem from "./ListItem";

const UserList = ({ list, error, isLoading }) => {
  if (isLoading) {
    return <h2>loading...</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    list && (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
        }}
      >
        {list.map((list) => (
          <ListItem list={list} key={list.id} />
        ))}
      </div>
    )
  );
};

export default UserList;
