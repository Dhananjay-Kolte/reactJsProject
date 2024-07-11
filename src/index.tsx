import './shared/config/enviroments';
import './app/styles/index.scss';
import { createRoot } from 'react-dom/client';
import ReactGA from 'react-ga4';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app/App';
import AuthProvider from './app/providers/AuthProvider/AuthProvider';
import { CheckWalletProvider } from './app/providers/CheckWalletProvider';
import { ErrorBoundary } from './app/providers/ErrorBoundary/ErrorBoundary';
import { MagicLinkProvider } from './app/providers/MagicLinkProvider/MagicLinkProvider';
import { StoreProvider } from './app/providers/StoreProvider/ui/StoreProvider';
import { ThemeProvider } from './app/providers/ThemeProvider';
import { WalletContextProvider } from './app/providers/WalletContextProvider';
import { NotificationStream } from './entities/Notifications';
import reportWebVitals from './reportWebVitals';

environment.APP_ENV !== 'local' &&
  ReactGA.initialize(environment.GOOGLE_ANALYTICS);

const container = document.getElementById('root');

if (!container) throw new Error('Error load app');

const root = createRoot(container);

root.render(
  <Router>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <WalletContextProvider>
            <MagicLinkProvider>
              <CheckWalletProvider>
                <AuthProvider>
                  <NotificationStream>
                    <App />
                  </NotificationStream>
                </AuthProvider>
              </CheckWalletProvider>
            </MagicLinkProvider>
          </WalletContextProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </Router>,
);

reportWebVitals();
