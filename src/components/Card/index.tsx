import * as React from 'react';
import { Link } from 'gatsby';
import { AiFillTag, AiFillIdcard, AiFillCalendar } from 'react-icons/ai';

import { File } from '@/graphql-types';
import Tag from '@/components/Tag';

import './style.css';

export interface CardProps {
  title: string;
  slug: string;
  excerpt: string;
  githubAddress: string;
  avatar: File;
  id: string;
  createdDate: string;
  tags: Array<string>;
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
        <div className="IMD-post-card__tag-list">
          <AiFillTag className={'IMD-post-card__tag-icon'} />
          {tags.map((tagName) => (
            <Tag tagName={tagName} />
          ))}
        </div>
      </section>
    </Link>

    <section className="IMD-post-card__user-info">
      <a
        className="IMD-post-card__author-area"
        href={githubAddress}
        target="_blank"
      >
        <img
          className="IMD-post-card__author-image"
          src={avatar.childImageSharp.fixed.src}
          srcSet={avatar.childImageSharp.fixed.srcSet}
          alt="IMD Author Avatar"
        />
      </a>
      <div>
        <AiFillIdcard className={'IMD-post-card__icon'} />
        <span className="IMD-post-card__github-id">{id}</span>
      </div>
      <div>
        <AiFillCalendar className={'IMD-post-card__icon'} />
        <span className="IMD-post-card__created-date">{createdDate}</span>
      </div>
    </section>
  </section>
);

export default PostList;
