import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';
import type { Post } from '../../types/Post';

type MainProps = {
  posts: Post[];
};

const Main = ({ posts }: MainProps) => {
  return (
    <main>
      <Sidebar posts={posts} />
      <Content posts={posts} />
    </main>
  );
};

export default Main;