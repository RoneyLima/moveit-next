import { createContext, ReactNode, useState } from 'react';
import challenges from '../../challenges.json'

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    experienceToNextLevel: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    startNewChallenge: () => void;
    LevelUp: () => void;
    resetChallenge: () => void;
    completedChallenge: () => void;
}

interface ChallengeProviderProps {
    children: ReactNode;
}


export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengeProviderProps) {
    
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChanllengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    function LevelUp(){
        setLevel(level + 1)
    }

    function startNewChallenge() {

        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);
    }

    function resetChallenge() {
        setActiveChallenge(null);
    }

    function completedChallenge() {
        if (!activeChallenge) {
            return;
        }
        
    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;
    }



    return (
    <ChallengesContext.Provider 
    value={{
        level, 
        currentExperience,
        experienceToNextLevel,
        challengesCompleted, 
        LevelUp, 
        startNewChallenge, 
        activeChallenge,
        resetChallenge,
        completedChallenge}}>
        { children }
    </ChallengesContext.Provider>

    )
}