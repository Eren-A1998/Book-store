import AllBooks from './Pages/AllBooks/AllBooks';
import BookDetails from './Pages/BookDetails/BookDetails'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllBooks/>}></Route>
          <Route path='/Books/:BookId' element={<BookDetails/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
