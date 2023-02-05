import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function ActiveLastBreadcrumb() {
  return (
    <Breadcrumbs  separator="›" aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick}>
        Compra
      </Link>
      <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
        Requisicao
      </Link>
      <Link
        color="textPrimary"
        href="/components/breadcrumbs/"
        onClick={handleClick}
        aria-current="page"
      >
        Index
      </Link>
    </Breadcrumbs>
  );
}