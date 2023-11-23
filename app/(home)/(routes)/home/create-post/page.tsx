"use client";

import { FormComponent } from "@/components/formcomponent";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const CreatePost = () => {
  const [value, setValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="p-10 flex flex-col items-center justify-start w-full">
      <FormComponent />
    </div>
  );
};

export default CreatePost;
