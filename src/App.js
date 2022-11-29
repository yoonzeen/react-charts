import { BrowserRouter, Route, Routes } from "react-router-dom";
import NivoPage from './pages/NivoPage';
import ReactCharts2Page from './pages/ReactCharts2Page';
import RechartsPage from './pages/RechartsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/ChartsPage/RechartsPage" element={<RechartsPage />} />
          <Route path="/ChartsPage/ReactCharts2Page" element={<ReactCharts2Page />} />
          <Route path="/ChartsPage/NivoPage" element={<NivoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
