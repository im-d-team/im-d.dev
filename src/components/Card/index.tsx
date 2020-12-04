import * as React from 'react';
import { Link } from 'gatsby';
import { File } from '@/graphql-types';

import TagList from '@/components/TagList';
import AuthorCard from '@/components/AuthorCard';

import './style.css';

export interface CardProps {
  title: string;
  slug: string;
  excerpt: string;
  githubAddress: string;
  avatar: File;
  id: string;
  createdDate: string;
  tags: string[];
}

const PostList = ({
  title,
  slug,
  excerpt,
  githubAddress,
  avatar,
  id,
  createdDate,
  tags,
}: CardProps) => (
  <section className="IMD-post-card">
    <Link to={slug}>
      <section className="IMD-post-card__post-info">
        <h1 className="IMD-post-card__header__title">{title}</h1>
        <p className="IMD-post-card__main__expert">{excerpt}</p>
        <TagList tags={tags} />
      </section>
    </Link>

    <section className="IMD-post-card__user-info">
      <AuthorCard
        githubAddress={githubAddress}
        avatar={avatar}
        id={id}
        createdDate={createdDate}
      />
    </section>
  </section>
);

export default PostList;
