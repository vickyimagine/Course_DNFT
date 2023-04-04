import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/Navbar';
import { Home } from './components/Home';
import { Route, Routes } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import DataTable from './components/StudentsList';
function App() {
  return (
    <>
    <HashRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/students" element={<DataTable />} />
      </Routes>
    </HashRouter>
    </>
  );
}

export default App;
