import React from 'react';
import { Layout, Landing, Details,AboutUs,Signin,Signup,Notfound,Filter} from '../Pages';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Layout className="App">
      {/* <Landing /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Details/:id" element={<Details/>} />
        <Route path="/AboutUs/" element={<AboutUs/>} />
        <Route path="/Signin/" element={<Signin/>} />
        <Route path="/Signup/" element={<Signup/>} />
        <Route path="*" element={<Notfound/>} />
        <Route path="/Filter" element={<Filter/>} />


      </Routes>

    </Layout>
  );
}

export default App