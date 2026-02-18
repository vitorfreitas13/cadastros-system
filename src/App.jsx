import "./App.css";
import { useState } from "react";
import UserCard from "./components/UserCard";

function App() {
  const [name, setName] = useState("Vitor");
  const [email, setEmail] = useState("vitor.fju13@gmail.com");
  const [age, setAge] = useState(28);
  const [users, setUsers] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    const newUser = {
      id: Date.now(),
      name,
      email,
      age,
    };

    setUsers([...users, newUser]);
  }

  return (
    <div className="app">
      <h1>Cadastro de Usuários</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nome"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
          placeholder="Idade"
          type="number"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </form>

      <div className="user-list">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
