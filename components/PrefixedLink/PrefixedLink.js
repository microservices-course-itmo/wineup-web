import Link from 'next/link'

const PrefixedLink = ({ href, as = href, children, ...props }) => (
  <Link href={href} as={`${process.env.pathPrefix}${as}`} {...props}>
    {children}
  </Link>
)

export default PrefixedLink
