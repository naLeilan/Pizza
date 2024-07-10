import Footer from "./Footer";
import Header from "./Header";

const pizzaData = [
  {
    name: "Pizza Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "../public/pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "../public/pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "../public/pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "../public/pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "../public/pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "../public/pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  console.log(pizzaData.name);
  return (
    <div className="app">
      <Header />
      <Menu name={pizzaData.name} />
      <Footer />
    </div>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>Comming Soon...</p>
      )}
    </main>
  );
}

function Pizza(props) {
  return (
    <main>
      {/* <div className="searchbtn">
        <label htmlFor="search">Search</label>
        <input id="search" type="search" pattern=".*\S.*" required />
        <span className="caret"></span>
      </div> */}
      <li className="pizza">
        <img src={props.pizzaObj.photoName} alt="spinaci" width="200px" />
        <div>
          <h3>{props.pizzaObj.name} </h3>
          <p>{props.pizzaObj.ingredients} </p>
          <span>{props.pizzaObj.price} </span>
        </div>
      </li>
    </main>
  );
}

export default App;
