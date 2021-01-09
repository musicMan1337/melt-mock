import React from 'react';

import {
  NavBar,
  Splash,
  About,
  Careers,
  MapModal,
  ContactForm,
  Footer,
} from 'src/components';

const App = () => {
  return (
    <>
      <NavBar />
      <Splash />
      <About />
      <Careers />
      <MapModal />
      <ContactForm />
      <Footer />
    </>
  );
};

export default App;
