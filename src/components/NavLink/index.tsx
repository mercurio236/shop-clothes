import { Link, LinkProps } from 'react-router-dom'

type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  return <Link style={{ textDecoration: 'none' }} {...props} />
}
