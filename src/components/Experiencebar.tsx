import { useContext, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { TabContext } from '../contexts/TabContext';

import styles from '../styles/components/ExperienceBar.module.css';
export function ExperienceBar() {

    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)
    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;
    const { aba } = useContext(TabContext);
    return (
        <div>
            { aba ? <header className={styles.experienceBar}>
                <span>0 xp</span>
                <div>
                    <div
                        style={{ width: `${percentToNextLevel}%` }}
                    />

                    <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>{currentExperience} xp</span>
                </div>
                <span>{experienceToNextLevel} xp</span>
            </header> : <div></div>}
            
        </div>
    );
}