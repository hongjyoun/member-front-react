import { createRoot } from 'react-dom/client';
import KeycloakService from "@/module/keycloak"
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
const renderCallback = () => root.render(<App />)

const authService = new KeycloakService()
authService.init(renderCallback)