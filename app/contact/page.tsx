
import Link from "next/link"
import style from "../contact/contact.module.css"

const ContactPage = () => {
  return (
    <div className={style.container}>

      <h1 className={style.header}>This is ContactPage.</h1>

      <ul>
        <li><Link href="/"> Go to Home page </Link></li>
        <li><Link href="about"> Go to About Page</Link></li>
        <li><Link href="service"> Go to the service Page</Link></li>
      </ul>

    </div>
  )
}
export default ContactPage
