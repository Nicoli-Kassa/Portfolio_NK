import Header from "./Componentes/Header";
import { Outlet } from 'react-router';
import Footer from "./Componentes/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
