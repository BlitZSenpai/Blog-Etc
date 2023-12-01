import { FormComponent } from "@/components/formcomponent";
import { currentUser } from "@clerk/nextjs";

const CreatePost = async () => {
  const user = await currentUser();

  if (!user?.username) return null;

  return (
    <div className="p-10 relative md:max-w-3xl lg:mx-w-4xl mx-auto">
      <FormComponent username={user.username} />
    </div>
  );
};

export default CreatePost;
