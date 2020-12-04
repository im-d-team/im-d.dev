import * as React from 'react';
import { Link } from 'gatsby';
import { File } from '@/graphql-types';
import { AiFillTag } from 'react-icons/ai';

import Tag from '@/components/Tag';
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
