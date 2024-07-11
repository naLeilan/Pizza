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
      <Menu />
      <Footer />
    </div>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p className="menu-p">
            Authentic Italian cuisine. Creative dishes to choose from. All from
            our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>Comming Soon...</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <main>
      {/* <div className="searchbtn">
        <label htmlFor="search">Search</label>
        <input id="search" type="search" pattern=".*\S.*" required />
        <span className="caret"></span>
      </div> */}
      <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""} `}>
        <img src={pizzaObj.photoName} alt="spinaci" width="200px" />
        <div>
          <h3>{pizzaObj.name} </h3>
          <p>{pizzaObj.ingredients} </p>
          <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price} </span>
        </div>
      </li>
    </main>
  );
}

export default App;
