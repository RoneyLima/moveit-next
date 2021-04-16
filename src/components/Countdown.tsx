import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Countdown.module.css';


let countdownTimeout: NodeJS.Timeout;



export default function Countdown() {

    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.05 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time /60);
    const second = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] =  String(second).padStart(2, '0').split('');


    function startCountDown() {
        setIsActive(true);
    }

    function resetCountDown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(0.05 * 60);
    }

    //toda vez que as variaveis mudarem o valor, a função useEffect será carregada novamente
    useEffect(() => {
        if(isActive && time > 0){

        countdownTimeout = setTimeout(() => {
            setTime(time - 1)
        }, 1000)
    } else if (isActive && time === 0){
        setHasFinished(true);
        setIsActive(false);
        startNewChallenge();
        
    }        
    }, [isActive, time])

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft} </span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft} </span>
                    <span>{secondRight} </span>
                </div>
            </div>

            {hasFinished ? (<button type="button" disabled
            className={styles.startCountDownButton}
            onClick={resetCountDown}
            >
            Ciclo encerrado
            </button>) : (
                <>
                
            { isActive ?
            (<button type="button" 
            className={`${styles.startCountDownButton} ${styles.countDownButtonActive}`}
            onClick={resetCountDown}
            >
            Abandonar Ciclo
            </button>) 
            :
            (<button type="button" 
                className={styles.startCountDownButton}
                onClick={startCountDown}
                >
                Iniciar um Ciclo
                </button>)
      }
      </>
            )
            }


        </div>
    )
}