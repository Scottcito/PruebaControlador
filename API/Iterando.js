import React from 'react';
import ComponenteImage from './ComponenteImage.js';

const Iterando = ({ variableIterable }) => (
  <React.Fragment>    
  {variableIterable.map(variableIterable=>(
  <ComponenteImage
      key={variableIterable.Id_palabra}
      {...variableIterable}
  />  
))}
</React.Fragment>
);

export default Iterando;
