import Link from 'next/link';

function Footer() {
  return (
  <footer>
      <h3 className="contact-header">If you want to contact me regarding any work, or potentially working with me on a project, then be sure to head over to my <Link href="/contact"><a>contact page</a></Link></h3>
      <p className="contact-header">Copyright &copy; Liam Pugh</p>
  </footer>
  )
}

export default Footer;