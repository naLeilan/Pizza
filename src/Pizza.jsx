function Pizza() {
  return (
    <main>
      <div className="searchbtn">
        <label htmlFor="search">Search</label>
        <input id="search" type="search" pattern=".*\S.*" required />
        <span className="caret"></span>
      </div>
    </main>
  );
}

export default Pizza;
