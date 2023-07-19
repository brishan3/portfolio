
import Link from 'next/link';

// A helpful wrapper around next/link that abstracts away the need to think about internal/external linking, and if no href is supplied, it will just render its children (removing need for ConditionalWrapper when using Links)
const CustomLink = ({
  href,
  children,
  ...rest
}) => {
  if(!href) return <span {...rest}>{children}</span>

  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return (
      <Link href={href} {...rest}>
       {children}
      </Link>
    )
  }

  if (isAnchorLink) {
    return <a href={href} {...rest}>{children}</a>
  }

  if(!href.startsWith('http') && !href.startsWith('mailto:') && !href.startsWith('tel:')) href = `https://${href}`

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest}>{children}</a>
}

export default CustomLink;