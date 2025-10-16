import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="Apache XTable (Incubating)">
      <main style={{padding: '4rem 0'}}>
        <div className="container">
          <div className="row" style={{alignItems: 'center'}}>
            <div className="col col--6">
              <h1 style={{marginBottom: 8}}>Apache XTable (Incubating)</h1>
              <p style={{fontSize: 18, lineHeight: 1.6}}>
                Seamlessly interoperate across Apache Hudi, Delta Lake, and Apache Iceberg.
              </p>
              <div style={{display: 'flex', gap: 12, flexWrap: 'wrap'}}>
                <Link className="button button--primary" to="/docs/intro">Get Started</Link>
                <Link className="button button--secondary" to="https://github.com/apache/incubator-xtable">GitHub</Link>
              </div>
            </div>
            <div className="col col--6" style={{textAlign: 'center'}}>
              <img
                src="/images/xtable-hero.svg"
                alt="XTable"
                style={{maxWidth: 520, width: '100%'}}
                loading="eager"
                decoding="async"
                fetchpriority="high"
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
