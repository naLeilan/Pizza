import Footer from "./Footer";
import Header from "./Header";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
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
  return (
    <div>
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="../public/pizzas/spinaci.jpg"
        price={10}
      />
    </div>
  );
}

function Pizza(props) {
  return (
    <main>
      <div className="searchbtn">
        <label htmlFor="search">Search</label>
        <input id="search" type="search" pattern=".*\S.*" required />
        <span className="caret"></span>
      </div>
      <div className="pizza">
        <img src={props.photoName} alt="spinaci" width="200px" />
        <h3>{props.name} </h3>
        <p>{props.ingredients} </p>
        <span>{props.price} </span>
      </div>
    </main>
  );
}

export default App;
