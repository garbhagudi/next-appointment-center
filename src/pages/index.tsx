import React from 'react';
import ReactDOM from 'react-dom';
// import './styles/global.css';
import Banner from '@/sections/banner';

const App: React.FC = () => {
  const handleLogout = () => {
    // Handle logout logic here
  };

  const handleToggleSidebar = () => {
    // Handle toggle sidebar logic here
  };

  return (
    <div>
      <Banner
        text="Welcome to GarbhaGudi"
        onLogout={handleLogout}
        onToggleSidebar={handleToggleSidebar}
      />
      {/* Rest of your app */}
    </div>
  );
};

export default App;
// ReactDOM.render(<App />, document.getElementById('root'));
