import './App.css'
import type { Post } from './types/Post'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const App = () => {
  const posts: Post[] = [
    { id: 1, title: 'React Basics', description: 'Въведение в React компоненти.' },
    { id: 2, title: 'Component Tree', description: 'Компонентите образуват дърво.' },
    { id: 3, title: 'Props and State', description: 'Предаване на данни надолу.' }
  ];

  return (
    <>
      <Header />
      <Main posts={posts} />
      <Footer />
    </>
  );
}

export default App
