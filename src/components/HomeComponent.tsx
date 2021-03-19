import { ChallengesProvider } from "../contexts/ChallengesContext";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengeBox } from "./ChallengeBox";
import { CompletedChallenges } from "./CompletedChallenges";
import { Countdown } from "./Countdown";
import { ExperienceBar } from "./Experiencebar";
import { Profile } from "./Profile";
import styles from '../styles/pages/Home.module.css';
import { useContext } from "react";
import { TabContext } from "../contexts/TabContext";

interface homeProps {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

export function HomeComponent(props: homeProps) {

    const { aba } = useContext(TabContext);

    return (

        <div>
            {aba ?
                <ChallengesProvider level={props.level}
                    currentExperience={props.currentExperience}
                    challengesCompleted={props.challengesCompleted}>
                    <div className={styles.container}>

                        <title>Inicio | move.it</title>
                        <ExperienceBar />

                        <CountdownProvider>
                            <section>
                                <div >
                                    <Profile />

                                    <CompletedChallenges />
                                    <Countdown />
                                </div>
                                <div>
                                    <ChallengeBox />
                                </div>
                            </section>
                        </CountdownProvider>
                    </div>
                </ChallengesProvider> :
                <div className={styles.containerLogin}>
                    <section>
                        <div >
                            <div className={`${styles.lbtn} ${styles.lbtnTwitter} ${styles.long}`}>
                                <img src='/icons/twitter.png' className={styles.logo} />
                                <p className={styles.label}>
                                    Entre com Twitter
                                </p>
                            </div>
                            <div className={`${styles.lbtn} ${styles.lbtnGithub} ${styles.long}`}>
                                <img src='/icons/github.png' className={styles.logo} />
                                <p className={styles.label}>
                                    Entre com Github
                                </p>
                            </div>
                            <div className={`${styles.lbtn} ${styles.lbtnGoogle} ${styles.long}`}>
                                <img src='/icons/google.png' className={styles.logo} />
                                <p className={styles.label}>
                                    Entre com Google
                                </p>
                            </div>
                        </div>
                        <div>
                            {/* login */}
                            <div className={styles.loginPage}>
                                <img src="/logo-full.svg" alt="Logo"/>
                                <div className={styles.form}>
                                    <form className={styles.loginForm}>
                                        <input type="text" placeholder="username" />
                                        <input type="password" placeholder="password" />
                                        <button className={`${styles.customBtn} ${styles.btnTres}`}><span>Login</span></button>
                                    </form>
                                </div>
                            </div>
                            {/* fim do login */}
                        </div>
                    </section>

                </div>
            }

        </div>
    );
}