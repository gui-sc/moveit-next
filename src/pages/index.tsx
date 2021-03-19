import { GetServerSideProps } from 'next'
import { SideBar } from '../components/SideBar';
import { TabProvider } from '../contexts/TabContext';
import { HomeComponent } from '../components/HomeComponent';
import styles from '../styles/pages/Home.module.css';

interface homeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: homeProps) {
  return (
    <div className={styles.con}>
    <TabProvider>
    <SideBar/>
    
    <HomeComponent level={props.level} 
    currentExperience={props.currentExperience} 
    challengesCompleted={props.challengesCompleted}/>

    </TabProvider>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}