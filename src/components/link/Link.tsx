import { PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import '../button/button.scss';

export default function ButtonLink({ to, children }: PropsWithChildren<LinkProps>) {
  return <Link to={to} className="button">{children}</Link>;
}
