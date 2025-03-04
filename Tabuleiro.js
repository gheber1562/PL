import styles from '../css/style.module.css';

export default function Tabuleiro() {
    const casas = [];
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const casaEscura = (i + j) % 2 === 1;
            casas.push(
                <div key={`${i}-${j}`} className={casaEscura ? styles.casaEscura : styles.casaClara}>
                    {i < 3 && casaEscura && <div className={styles.pecaAzul}></div>}
                    {i > 4 && casaEscura && <div className={styles.pecaVerde}></div>}
                </div>
            );
        }
    }

    return <div className={styles.tabuleiro}>{casas}</div>;
}
