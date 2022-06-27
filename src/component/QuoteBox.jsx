
import React from 'react';
import Footer from './Footer';

const QuoteBox = ( {phase , author ,color, fnChangePhrase,img_rnd} ) => {

  /* Nota: siempre colocar el codigo dentro de un div padre */

  return (

    <div>
      <div className='text-phrase'>
        <div>
          <i className="fa-solid fa-quote-left"></i>
          {" "}{phase}{" "}
          <i className="fa-solid fa-quote-right"></i>
        </div>
        
      </div>
      <Footer author={author} color={color} fnChangePhrase={fnChangePhrase} img_rnd={img_rnd} /> 
    </div>
    );
};

export default QuoteBox;