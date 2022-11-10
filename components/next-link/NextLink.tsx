// nextjs imports
import Link from 'next/link';

// other imports
import { INextLinkProps as Props } from './NextLink.interface';

const NextLink: React.FC<Props> = ({ href, children, className }) => {
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
};

export default NextLink;
