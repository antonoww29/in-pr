import PostList from './PostList/PostList';
import type { Post } from '../../../types/Post';

type ContentProps = {
  posts: Post[];
};

const Content = ({ posts }: ContentProps) => {
  return (
    <section>
      <PostList posts={posts} />
    </section>
  );
};

export default Content;