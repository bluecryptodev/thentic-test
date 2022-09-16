/* eslint-disable jsx-a11y/anchor-has-content */
import Link, {LinkProps} from 'next/link'
import { ReactNode } from 'react';

interface ICustomLinkProps extends LinkProps {
    href: string;
    children: ReactNode;
    className: string;
}
const CustomLink = ({ href, ...rest }: ICustomLinkProps) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...rest} />
      </Link>
    )
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />
}

export default CustomLink
