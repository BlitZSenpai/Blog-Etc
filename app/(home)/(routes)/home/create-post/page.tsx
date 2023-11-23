"use client";

import { FormComponent } from "@/components/formcomponent";
import { useState } from "react";

const CreatePost = () => {
  const [value, setValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="p-10 relative md:max-w-3xl lg:mx-w-4xl mx-auto">
      <FormComponent />
    </div>
  );
};

export default CreatePost;
