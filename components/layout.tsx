import Footer from './footer'

import styles from '../styles/layout.module.css'

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.layout}>
      <main>{children}</main>
      <Footer />
    </div>
  );
}