import './App.css';
import BlogList from './components/list';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<BlogList />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App;
