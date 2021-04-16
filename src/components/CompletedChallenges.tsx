import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Completed.module.css';


export default function CompletedChallenges() {

    const { challengesCompleted } = useContext(ChallengesContext)
    return (
        <div className={styles.completedContainer}>
            <span>Desafios Completos</span>
            <span>{ challengesCompleted }</span>
        </div>
    )
}