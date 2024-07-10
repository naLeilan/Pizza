import Pizza from "./Pizza";

function Menu({ name }) {
  return (
    <div>
      <Pizza name={name} />
    </div>
  );
}

export default Menu;
