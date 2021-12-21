import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Blog,
  Posts,
  Post,
  Login,
  Rejestruj,
  Ekranglowny,
  Pusta_Strona,
  RozpocznijSeriePomiarowa,
  TrwanieSeriiPomiarowej,
  OknoPomiaru,
  OknoSeriiPomiarow,
  OknoSesjiUzytkownika,
  ListaUzytkownikow,
  // ArkuszDanychComponent,
  PrzykladowyArkuszDanych,
} from "./components";

//ReactDOM.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById('root')
//);

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/rejestruj" element={<Rejestruj />} />
      <Route path="/ekranglowny" element={<Ekranglowny />} />
      <Route path="/" element={<Home />} />
      <Route path="/rozpocznij_serie_pomiarowa" element={<RozpocznijSeriePomiarowa />} />
      <Route path="/trwanie_serii_pomiarowej" element={<TrwanieSeriiPomiarowej />} />
      <Route path="/okno_pomiaru" element={<OknoPomiaru />} />
      <Route path="/okno_serii_pomiarow" element={<OknoSeriiPomiarow />} />
      <Route path="/okno_sesji_uzytkownika" element={<OknoSesjiUzytkownika />} />
      <Route path="/lista_uzytkownikow" element={<ListaUzytkownikow />} />
      <Route path="/przykladowy_arkusz_danych" element={<PrzykladowyArkuszDanych />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pusta_strona" element={<Pusta_Strona />} />
      <Route path="/blog" element={<Blog />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>
    </Routes>
    <Footer />
  </Router>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById("root")
);

////serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
