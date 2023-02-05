import React from 'react';
import styles from './styles.css';
import Container from '@material-ui/core/Container';

import Table from '../../components/Table';

import Layout from '../../components/Layout';
export default function Home() {
  return (
    <div className="home">
      <Layout>
        <Container  maxWidth="lg">
          <Table/>
        </Container>      
      </Layout>
    </div>
  );
}
