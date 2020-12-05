import * as React from 'react';
import { Link } from 'gatsby';
import AuthorCard, { AuthorCardProps } from '@/components/AuthorCard';

import './style.scss';

interface NextCardProps extends AuthorCardProps {
  title: string;
  postLink: string;
}

export default ({
  title,
  githubAddress,
  avatar,
  id,
  createdDate,
  postLink,
}: NextCardProps) => {
  return (
    <section className="IMD-next-card">
      <Link to={postLink}>
        <h1 className="IMD-next-card__title">{title}</h1>
      </Link>
      <AuthorCard
        mode={'horizontal'}
        githubAddress={githubAddress}
        avatar={avatar}
        id={id}
        createdDate={createdDate}
      />
    </section>
  );
};
