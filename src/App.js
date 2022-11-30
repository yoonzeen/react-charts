import { BrowserRouter, Route, Routes } from "react-router-dom";
import NivoPage from './pages/NivoPage';
import ReactChartjs2Page from './pages/ReactChartjs2Page';
import RechartsPage from './pages/RechartsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RechartsPage />} />
          <Route path="/ChartsPage/ReactChartjs2Page" element={<ReactChartjs2Page />} />
          <Route path="/ChartsPage/NivoPage" element={<NivoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
