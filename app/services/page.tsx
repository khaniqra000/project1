import Link from 'next/link'
import styles from "../services/services.module.css"

const ServicesPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>This is ServicePage.</h1>

      <ul>
        
        <li><Link href="/service/graphic-design">This is designing page.</Link></li>
        
      </ul>
    </div>
  )
}

export default ServicesPage
