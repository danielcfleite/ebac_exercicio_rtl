import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://images.tcdn.com.br/img/img_prod/1103431/miniatura_batmovel_modelo_serie_animada_c_boneco_1_24_jada_1737_1_2f36f5c4f906254ad3db5f30c0cd2073.jpg">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
