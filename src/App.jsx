import Card from "./components/Card.jsx";
import Header from "./components/Header.jsx";
import Drawer from "./components/Drawer.jsx";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <Drawer />
        <Header />
        <div className="content">
          <div className="content-right">
            <h1>Bсе кроссовки</h1>
            <div className="search-block">
              <img src="/img/search.svg" alt="search" />
              <input placeholder="Поиск..." />
            </div>
          </div>

          <div className="sneakers">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
