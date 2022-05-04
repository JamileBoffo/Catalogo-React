import "./Home.css";
import PotionLista from "../components/PotionLista/PotionLista";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";
import AdicionaPotionModal from "../components/AdicionarPotionModal/AdicionarPotionModal";


export function Home() {
  const [canShowAdicionaPotionModal, setCanShowAdicionaPotionModal] =
    useState(false);

  const [potionParaAdicionar, setPotionParaAdicionar] = useState();


  return (
    <div className="Home">
      <Navbar createPotion={() => setCanShowAdicionaPotionModal(true)}/>
      <div className="Home__container">
        <PotionLista potionCriada={potionParaAdicionar} />
          {canShowAdicionaPotionModal && (
            <AdicionaPotionModal
              closeModal={() => setCanShowAdicionaPotionModal(false)}
              onCreatePotion= {(potion) => setPotionParaAdicionar(potion)}
            />
          )}
      </div>
    </div>
  );
}
