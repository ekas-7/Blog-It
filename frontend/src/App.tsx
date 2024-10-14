import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Blog from './pages/Blog';
import Blogs from './pages/Blogs';
import { Publish } from './pages/Publish';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          {/* Protect the Blog, Blogs, and Publish routes */}
          <Route 
            path="/blog/:id" 
            element={
              <PrivateRoute>
                <Blog />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/blogs" 
            element={
              <PrivateRoute>
                <Blogs />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/publish" 
            element={
              <PrivateRoute>
                <Publish />
              </PrivateRoute>
            } 
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
