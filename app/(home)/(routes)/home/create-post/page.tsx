"use client";

import { useState } from "react";

const CreatePost = () => {
  const [value, setValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="p-5">
      <input />
    </div>
  );
};

export default CreatePost;
