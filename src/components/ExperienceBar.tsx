import { useContext, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ExperienceBar.module.css';


export default function ExperienceBar() {
    const [experiencePercent, setExperiencePercent] = useState(0);

    
    const { activeChallenge, currentExperience, experienceToNextLevel } = useContext(ChallengesContext);


    // function addExperience() {
    //     let percentTemp = activeChallenge.amount;
    //     let vaiPercent  = percentTemp/300;
    //     const stylePercentoExp =+ vaiPercent;
    //     setExperiencePercent(stylePercentoExp)
    // }
    
    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;


    return(
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width:`${percentToNextLevel}%`}} />

                <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%`}}>
                    {currentExperience} xp
                </span>
            </div>
            <span> {experienceToNextLevel} xp</span>
        </header>
    )
}