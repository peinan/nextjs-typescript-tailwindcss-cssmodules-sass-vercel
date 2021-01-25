import Link from 'next/link'
import '../styles/Nav.module.scss'  // does not work: import style from 'hoge'

const links = [
  { href: 'https://github.com/vercel/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
]

// console.log(styles);
const Nav = () => (
  <nav>
    <ul className="links">
      <li>
        <Link href="/">
          <a className="anchor">
            Home
          </a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a className="anchor">
            About
          </a>
        </Link>
      </li>
      <ul className="buttons">
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <a href={href} className="no-underline btn-blue">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </ul>
  </nav>
)
export default Nav;
