import "./app.css";
import { Twitter } from "./Twitter";

const Lista = [
  {
    nombre: "midudev",
    username: "midudev",
    initialIsFollowing: true,
  },
  {
    nombre: "sdinamarca",
    username: "sdinamarca",
    initialIsFollowing: true,
  },
];

export function App() {
  return (
    <section className="tw-Container-app">
      {Lista.map(({ nombre, username, initialIsFollowing }) => (
        <Twitter
          key={`key-${username}`}
          nombre={nombre}
          username={username}
          initialIsFollowing={initialIsFollowing}
        />
      ))}
    </section>
  );
}
