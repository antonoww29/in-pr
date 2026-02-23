import type { Post } from '../../../types/Post';

type SidebarProps = {
  posts: Post[];
};

const Sidebar = ({ posts }: SidebarProps) => {
  return (
    <aside>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;