import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ChallengeBox.module.css';


export function ChallengeBox(){

    const { activeChallenge, completedChallenge, resetChallenge } = useContext(ChallengesContext);

  

    return(
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header> Ganhe { activeChallenge.amount } xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <strong> Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button type="button" 
                            className={styles.challengeFailedButton}
                            onClick={resetChallenge}>
                            Falhei
                        </button>
                        
                        <button type="button" 
                            className={styles.challengeSucceededButton}
                            onClick={completedChallenge} >
                                Completei
                        </button>
                    </footer>
                </div>
            ) :
            (<div className={styles.challegeNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level up" />
                    Avance de level completando desafios.
                </p>
            </div>)}
        </div>
    )
}