import type { Post } from '../../../../../types/Post';

type PostItemProps = {
  post: Post;
};

const PostItem = ({ post }: PostItemProps) => {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
    </article>
  );
};

export default PostItem;