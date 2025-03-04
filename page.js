import Tabuleiro from './components/Tabuleiro';
import styles from './css/style.module.css';  // Importa os estilos do tabuleiro
import './css/global.css';  // Importa os estilos globais

export default function Home() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>Tabuleiro de Damas</h1>
                <Tabuleiro />
            </main>
        </div>
    );
}
