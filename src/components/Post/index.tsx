import * as React from 'react';
import { LayoutProps } from '@/layout';
import {
  MarkdownRemark,
  MarkdownRemarkConnection,
  Site,
} from '@/graphql-types';

import { get } from 'lodash';
import AuthorCard from '@/components/AuthorCard';
import TagList from '@/components/TagList';

import { CardProps } from '@/components/Card';

const GITHUB_URL = 'https://github.com';
import './style.scss';

export interface BlogPostProps extends LayoutProps {
  data: {
    post: MarkdownRemark;
    recent: MarkdownRemarkConnection;
    site: Site;
  };
}

const createCardProps = ({
  frontmatter: {
    title,
    createdDate,
    tags,
    author: { avatar, github, id },
  },
  fields: { slug },
  excerpt,
}: MarkdownRemark): CardProps => ({
  title,
  slug,
  excerpt,
  githubAddress: `${GITHUB_URL}/${github}`,
  avatar,
  id,
  createdDate,
  tags,
});

interface AuthorCardProps {
  githubAddress: string;
  avatar: any;
  id: String;
  createdDate: String;
}

export default (props: BlogPostProps) => {
  const { frontmatter, html } = props.data.post;
  const cardData = createCardProps(props.data.post);
  const cover = get(frontmatter, 'image.children.0.fixed', {});

  return (
    <section className={'blog-post'}>
      <section className={'blog-post__header'}>
        <AuthorCard
          githubAddress={cardData.githubAddress}
          avatar={cardData.avatar}
          id={cardData.id}
          createdDate={cardData.createdDate}
        />
        <h1 className={'blog-post__title'}>{frontmatter.title}</h1>
      </section>

      <img {...cover} />

      <article
        className={'blog-post__main'}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <TagList tags={frontmatter.tags} />
    </section>
  );
};
