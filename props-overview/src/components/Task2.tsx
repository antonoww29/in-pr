import type { Task2Props } from '../interfaces/Task2Props';

export default function Task2(prop: Task2Props) {
  return (
    <header id="user" className="card">
      <h2 className="name">{prop.firstName} {prop.lastName}</h2>
      <h3 className="children">{prop.children}</h3>
      {prop.image && <img src={prop.image} alt="A template" className="avatar" />}
      <p className="title">{prop.title}</p>
    </header>
  );
}
