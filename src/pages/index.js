import React from 'react';
import Layout from '../components/Layout';
import Landing from '../components/Landing'
import About from '../components/About'
import Projects from '../components/Projects'
import WorkExp from '../components/WorkExp'


const IndexPage = () => (
  <Layout>
    <Landing />
    <About />
    <Projects />
    <WorkExp />
  </Layout>
);

export default IndexPage;
