import PostItem from './PostItem/PostItem';
import type { Post } from '../../../../types/Post';

type PostListProps = {
  posts: Post[];
};

const PostList = ({ posts }: PostListProps) => {
  return (
    <>
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;