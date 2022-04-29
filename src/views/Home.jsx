import './Home.css';
import { PotionLista } from '../components/PotionLista/PotionLista';
import { Navbar } from '../components/Navbar/Navbar'

export function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className="Home__container">
        <PotionLista />
      </div>
    </div>
  );
}
