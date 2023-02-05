import React from 'react';
import MenuBotton from '../MenuBotton';
import CadastroCompra from '../CadastroCompra';

export default function Footer() {
  return (
    <div style={{ position: 'absolute', bottom: 0, width: '99%', display:'flex', justifyContent: 'flex-end' }}>
      {/* <MenuBotton /> */}

      <CadastroCompra />

      {/* FOOTER */}
    </div>
  );
}
