import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <div className="container">
          <a href="#" className="logo-name">
            <div className="logo">
              <img src="/logo.png" alt="logo" />
              <h1>Vende Diana</h1>
            </div>
          </a>
          <nav>
            <ul>
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Tienda</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="card">
            <img src="/bagues.jpeg" alt="logo bagues" />
            <div className="card-body">
              <h3>Bagues</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3>Gigot</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <img src="/gigot.jpg" alt="logo bagues" />
          </div>
          <div className="card">
            <img src="/natura.jpg" alt="logo bagues" />
            <div className="card-body">
              <h3>Natura</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3>Just</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <img src="/just.jpg" alt="logo bagues" />
          </div>
          <div className="card">
            <img src="/biogreen.jpeg" alt="logo bagues" />
            <div className="card-body">
              <h3>Biogreen</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
