import { ClipLoader } from "react-spinners";
import usePosts from "@/hooks/usePosts";
import PostItem from "./PostItem";

interface PostFeedProps {
  userId?: string;
}
const PostFeed: React.FC<PostFeedProps> = ({ userId }) => {
  const { isLoading, data: posts = [] } = usePosts(userId);

  return (
    <>
      {isLoading && (
        <div className="flex h-full">
          <ClipLoader
            className="justify-self-center mx-auto mt-8"
            color="lightblue"
            size={80}
          />
        </div>
      )}
      {posts.map((post: Record<string, any>) => (
        <PostItem userId={userId} key={post.id} data={post} />
      ))}
    </>
  );
};

export default PostFeed;
