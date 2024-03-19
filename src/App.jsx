import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './auth/Login';
import Dashboard from './Componets/Dashboard/Dashboard';
import Navbar from './Componets/Navbar/Navbar';
// import Profile from './Componets/Profile/Profile';
// import Settings from './Componets/Settings/Settings';
// import NotFound from './Componets/NotFound/NotFound';
import './App.css';

// Layout component that includes the Navbar and wraps the main content
const Layout = ({ children }) => {
  return (
    <>
      <div className="app-container">
        <Navbar />

        <div className="">{children}</div>
      </div>
    </>
  );
};

function App() {
  const token = localStorage.getItem('token'); // Get token from local storage

  return (
    <div className="outsidedive">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={!token ? <Login /> : <Navigate to="/dashboard" />}
          />
          {/* Wrap the Dashboard component with the Layout */}
          <Route
            path="/dashboard"
            element={
              <>
                {token && (
                  <Layout>
                    <Dashboard />
                  </Layout>
                )}
              </>
            }
          />
          {/* Add other routes as needed */}
          {/* <Route path="/profile" element={<>{token && <><Navbar /><Profile /></>}</>} />
        <Route path="/settings" element={<>{token && <><Navbar /><Settings /></>}</>} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
