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
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';

function AppContent() {
  const { user } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [isPostTaskOpen, setIsPostTaskOpen] = useState(false);
  const [isFindWorkOpen, setIsFindWorkOpen] = useState(false);
  const [isBrowseTasksOpen, setIsBrowseTasksOpen] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
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
    setIsBrowseTasksOpen(true);
  };

  const handleCloseBrowseTasks = () => {
    setIsBrowseTasksOpen(false);
  };

  const handleAdminLogin = async (credentials: { username: string; password: string }) => {
    // In production, this should validate against a secure backend
    if (credentials.username === 'admin' && credentials.password === 'TrampoFlex2025!') {
      setIsAdminLoggedIn(true);
      setShowAdminLogin(false);
      return true;
    }
    return false;
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    setShowAdminLogin(false);
  };

  // Check for admin access via URL
  React.useEffect(() => {
    if (window.location.pathname === '/admin') {
      setShowAdminLogin(true);
    }
  }, []);

  // Admin Dashboard
  if (isAdminLoggedIn) {
    return <AdminDashboard onLogout={handleAdminLogout} />;
  }

  // Admin Login
  if (showAdminLogin) {
    return <AdminLogin onLogin={handleAdminLogin} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {!user ? (
        <>
          <Header 
            onLoginClick={handleLoginClick} 
            onSignupClick={handleSignupClick}
            onPostTaskClick={handlePostTaskClick}
            onBrowseTasksClick={handleBrowseTasksClick}
          />
          <LandingPage 
            onLoginClick={handleLoginClick}
            onSignupClick={handleSignupClick}
            onPostTaskClick={handlePostTaskClick}
          />
          <Footer />
        </>
      ) : (
        <Dashboard 
          onPostTaskClick={handlePostTaskClick}
          onFindWorkClick={handleFindWorkClick}
          onBrowseTasksClick={handleBrowseTasksClick}
        />
      )}
      
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

      {isBrowseTasksOpen && (
        <BrowseTasks onClose={handleCloseBrowseTasks} />
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