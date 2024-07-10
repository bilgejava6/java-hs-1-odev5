import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes,Route
} from 'react-router-dom';
import AnaSayfa from './pages/AnaSayfa';
import Personel from './pages/Personel';
import PersonelListesi from './pages/PersonelListesi';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router =
<BrowserRouter>
  <Routes>
    <Route path='/' element={<AnaSayfa />} />
    <Route path='/personel' element={<Personel />} />
    <Route path='/personel-listesi' element={<PersonelListesi />} />
  </Routes>
</BrowserRouter>;

root.render(router);

