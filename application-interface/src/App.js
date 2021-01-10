import React from 'react';
import { useBarcode } from 'react-barcodes';

function App() {
  const { inputRef } = useBarcode({
    value: 'react-barcodes',
    options: {
      background: '#ccffff',
    }
  });
  
  return <svg ref={inputRef} />;
};

export default App;