import styles from '../styles/components/SideBar.module.css';
import { Navigation } from 'react-minimal-side-navigation';
import Icon from 'awesome-react-icons'
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { useContext } from 'react';
import { TabContext } from '../contexts/TabContext';

export function SideBar() {

    const {  ativarLogin, ativarHome } = useContext(TabContext);
    return (

        <div className={styles.container}>
            <Navigation
                activeItemId="/login"
                onSelect={({ itemId }) => {
                    if (itemId == '/home') {
                        ativarHome();
                    } else {
                        ativarLogin();
                    }
                }}
                items={[
                    {
                        title: 'Home',
                        itemId: '/home',
                        elemBefore: () => <Icon name="inbox" />
                    },
                    {
                        title: 'Login',
                        itemId: '/login',
                        elemBefore: () => <Icon name="log-in" />
                    }
                ]}
            >

            </Navigation>
        </div>
    );
}