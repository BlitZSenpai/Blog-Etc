import { FormComponent } from "@/components/formcomponent";
import { currentUser } from "@clerk/nextjs/server";

export const metadata = {
  title: "Create Post",
  description: "Create a post!",
};

const CreatePost = async () => {
  const user = await currentUser();

  if (!user?.username) {
    throw new Error("Username not found");
  }

  return (
    <div className="md:p-10 p-9 relative md:max-w-3xl lg:mx-w-4xl mx-auto">
      <FormComponent username={user.username} />
    </div>
  );
};

export default CreatePost;
