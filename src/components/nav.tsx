import Link from 'next/link'

const links = [
  { href: 'https://github.com/vercel/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
]

const Nav = () => (
  <nav>
    <ul className="flex items-center justify-between p-8">
      <li>
        <Link href="/">
          <a className="nav_a">
            Home
          </a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a className="nav_a">
            About
          </a>
        </Link>
      </li>
      <ul className="flex items-center justify-between space-x-4">
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
