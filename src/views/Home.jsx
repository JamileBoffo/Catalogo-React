import "./Home.css";
import { PotionLista } from "../components/PotionLista/PotionLista";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";
import AdicionaPotionModal from "../components/AdicionarPotionModal/AdicionarPotionModal";

export function Home() {
  const [canShowAdicionaPotionModal, setCanShowAdicionaPotionModal] =
    useState(false);

  return (
    <div className="Home">
      <Navbar createPotion={() => setCanShowAdicionaPotionModal(true)}/>
      <div className="Home__container">
        <PotionLista />
        {canShowAdicionaPotionModal && (
          <AdicionaPotionModal
            closeModal={() => setCanShowAdicionaPotionModal(false)}
          />
        )}
      </div>
    </div>
  );
}
