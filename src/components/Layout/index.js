import React from 'react';
import './styles.css';
import Header from './Header';

export default function Layout( props ) {
  return (
    <div>
        <Header />
            { props.children }
    </div>
  );
}