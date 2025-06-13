import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import PostTask from './components/PostTask';
import FindWork from './components/FindWork';
import BrowseTasks from './components/BrowseTasks';
import HowItWorks from './components/HowItWorks';
import Support from './components/Support';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';

type PageType = 'home' | 'browse-tasks' | 'how-it-works' | 'support' | 'admin-login' | 'admin-dashboard';

function AppContent() {
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [isPostTaskOpen, setIsPostTaskOpen] = useState(false);
  const [isFindWorkOpen, setIsFindWorkOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setAuthMode('login');
    setIsAuthModalOpen(true);
  };

  const handleSignupClick = () => {
    setAuthMode('signup');
    setIsAuthModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAuthModalOpen(false);
  };

  const handleSwitchMode = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
  };

  const handlePostTaskClick = () => {
    if (!user) {
      handleLoginClick();
      return;
    }
    setIsPostTaskOpen(true);
  };

  const handleClosePostTask = () => {
    setIsPostTaskOpen(false);
  };

  const handleFindWorkClick = () => {
    if (!user) {
      handleLoginClick();
      return;
    }
    setIsFindWorkOpen(true);
  };

  const handleCloseFindWork = () => {
    setIsFindWorkOpen(false);
  };

  const handleBrowseTasksClick = () => {
    setCurrentPage('browse-tasks');
  };

  const handleHowItWorksClick = () => {
    setCurrentPage('how-it-works');
  };

  const handleSupportClick = () => {
    setCurrentPage('support');
  };

  const handleHomeClick = () => {
    setCurrentPage('home');
  };

  const handleAdminLogin = async (credentials: { username: string; password: string }) => {
    // In production, this should validate against a secure backend
    if (credentials.username === 'admin' && credentials.password === 'TrampoFlex2025!') {
      setIsAdminLoggedIn(true);
      setCurrentPage('admin-dashboard');
      return true;
    }
    return false;
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    setCurrentPage('home');
  };

  // Check for admin access via URL
  React.useEffect(() => {
    if (window.location.pathname === '/admin') {
      setCurrentPage('admin-login');
    }
  }, []);

  // Admin Dashboard
  if (currentPage === 'admin-dashboard' && isAdminLoggedIn) {
    return <AdminDashboard onLogout={handleAdminLogout} />;
  }

  // Admin Login
  if (currentPage === 'admin-login') {
    return <AdminLogin onLogin={handleAdminLogin} />;
  }

  // Render current page content
  const renderPageContent = () => {
    switch (currentPage) {
      case 'browse-tasks':
        return <BrowseTasks />;
      case 'how-it-works':
        return <HowItWorks />;
      case 'support':
        return <Support />;
      case 'home':
      default:
        if (user) {
          return (
            <Dashboard 
              onPostTaskClick={handlePostTaskClick}
              onFindWorkClick={handleFindWorkClick}
              onBrowseTasksClick={handleBrowseTasksClick}
            />
          );
        } else {
          return (
            <>
              <LandingPage 
                onLoginClick={handleLoginClick}
                onSignupClick={handleSignupClick}
                onPostTaskClick={handlePostTaskClick}
              />
              <Footer />
            </>
          );
        }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onLoginClick={handleLoginClick} 
        onSignupClick={handleSignupClick}
        onPostTaskClick={handlePostTaskClick}
        onFindWorkClick={handleFindWorkClick}
        onBrowseTasksClick={handleBrowseTasksClick}
        onHowItWorksClick={handleHowItWorksClick}
        onSupportClick={handleSupportClick}
        onHomeClick={handleHomeClick}
      />
      
      {renderPageContent()}
      
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={handleCloseModal}
        mode={authMode}
        onSwitchMode={handleSwitchMode}
      />

      {isPostTaskOpen && (
        <PostTask onClose={handleClosePostTask} />
      )}

      {isFindWorkOpen && (
        <FindWork onClose={handleCloseFindWork} />
      )}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;