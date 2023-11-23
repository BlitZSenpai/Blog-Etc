"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";

const CreatePost = () => {
  const [value, setValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="p-10 flex flex-col w-full items-center justify-start h-screen">
      <div className="w-1/3 ">
        <Input autoFocus value={value} placeholder="Title" />
        <Input height="300px" />
      </div>
    </div>
  );
};

export default CreatePost;
