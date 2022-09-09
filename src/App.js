import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") === "true");

  useEffect(() => {
    console.log(theme);
    document.documentElement.className = theme ? "dark-theme" : "light-theme";
    console.log(document.documentElement.className);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overrected</h1>
          <button className="btn" onClick={() => setTheme(!theme)}>
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((item) => (
          <Article key={item.id} {...item} />
        ))}
      </section>
    </main>
  );
}

export default App;
