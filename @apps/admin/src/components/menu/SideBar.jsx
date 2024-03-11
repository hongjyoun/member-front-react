import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import KeycloakService from "@/module/keycloak";
import './SideBar.less';

const SideBar = () => {
    const authService = new KeycloakService()
    const onclickLogin = () => { authService.login() }
    const onclickLogout = async() => { await authService.logout() }

    return <>
        <Box sx={{ width: '100%', maxWidth: 230, bgcolor: 'white', height: '100vh' }}>
            <div className='navWrap'>
                <nav aria-label="main mailbox folders">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/home">
                                <ListItemText primary="Home" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/tables">
                                <ListItemText primary="Tables" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
                <div className='loginButton'>
                    {!authService.isAuthenticated() && <Button onClick={onclickLogin} variant={'outlined'} fullWidth={true}>로그인</Button>}
                    {authService.isAuthenticated() && <Button onClick={onclickLogout} variant={'outlined'} fullWidth={true}>로그아웃</Button>}
                </div>
            </div>
        </Box>
    </>
}

export default SideBar;