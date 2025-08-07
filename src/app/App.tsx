

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignupFeature from '../features/signup';
import SigninFeature from '../features/signin';
import ContractAnalyzerFeature from '../features/contract-analyzer';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignupFeature />} />
        <Route path="/signin" element={<SigninFeature />} />
        <Route path="/contract-analyzer" element={<ContractAnalyzerFeature />} />
        <Route path="/" element={<Navigate to="/signup" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
