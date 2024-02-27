import { useState } from "react";
import ArticleList from "./components/ArticleList"
import Header from "./components/Header"
import Form from "./components/Form";

function App() {
  const [user, setUser] = useState<{ name: string, email: string }>();
  const hasUser = Boolean(user);

  const name = user?.name || 'User';

  return (
    <div className="h-screen">
      <Header user={ name } />
      { hasUser && <ArticleList /> }
      { !hasUser && <Form onSubmit={data => setUser(data)} /> }
    </div>
  )
}

export default App
