import "./Navbar.css";
import caldeirao from "../../assets/icon/caldeirao.svg";
import logo from "../../assets/icon/logo.svg";
import paleta from "../../assets/icon/paleta.svg";

function Navbar({ createPotion }) {
  return (
    <div className="Header">
      <div className="row">
        <div className="Header__logo Logo">
          <img src={logo} width="40px" className="Sacola__icone" alt="sacola" />
        </div>
        <div className="Header__opcoes Opcoes">
          <button
            type="button"
            className="Opcoes__potion Potion"
            onClick={() => createPotion()}
          >
            <img
              src={paleta}
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
