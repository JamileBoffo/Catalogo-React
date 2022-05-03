import "./Navbar.css";
import caldeirao from "../../assets/icon/caldeirao.svg";
import dragon from "../../assets/icon/dragon.svg";
import adicionar from "../../assets/icon/adicionar.svg";

function Navbar({ createPotion }) {
  return (
    <div className="Header">
      <div className="row">
        <div className="Header__logo Logo">
          <img src={dragon} width="40px" className="Logo__icone" alt="Logo RedDragon" />
          <span className="Logo__titulo"> RedDragon </span>
        </div>
        <div className="Header__opcoes Opcoes">
          <button
            type="button"
            className="Opcoes__potion Potion"
            onClick={() => createPotion()}
          >
            <img
              src={adicionar}
              width="40px"
              className="Potion__icone"
              alt="Adiconar poção"
            />
          </button>
          <div className="Opcoes__sacola Sacola">
            <img
              src={caldeirao}
              width="40px"
              className="Sacola__icone"
              alt="Sacola de compras"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
