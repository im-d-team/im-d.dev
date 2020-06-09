import * as React from 'react';
import { Link } from 'gatsby';

import { File } from '@/graphql-types';

import './style.css';

export interface CardProps {
  title: string;
  timeToRead: number;
  slug: string;
  excerpt: string;
  githubAddress: string;
  avatar: File;
  id: string;
  createdDate: string;
}

const PostList = ({
  title,
  timeToRead,
  slug,
  excerpt,
  githubAddress,
  avatar,
  id,
  createdDate,
}: CardProps) => (
  <div className="post-card">
    <section className="post-card__header">
      <h1 className="post-card__header__title">{title}</h1>
      <span className="post-card__header__min-read">{timeToRead} min read</span>
    </section>

    <section className="post-card__main">
      <Link to={slug}>
        <p className="post-card__main__expert">{excerpt}</p>
      </Link>
      <a
        className="post-card__main__author-area"
        href={githubAddress}
        target="_blank"
      >
        <img
          className="post-card__main__avatar-image"
          src={avatar.childImageSharp.fixed.src}
          alt="Avatar"
          srcSet={avatar.childImageSharp.fixed.srcSet}
        />
        <span className="post-card__main__github-id">{id}</span>
      </a>
    </section>

    <section className="post-card__footer">
      {/* <span className="post-card__footer__created-date">{createdDate}</span> */}
      tags
    </section>
  </div>
);

export default PostList;
