import * as React from 'react';
import {LayoutProps} from '@/layout';
import {
  MarkdownRemark,
  MarkdownRemarkConnection,
  Site,
} from '@/graphql-types';

import AuthorCard from '@/components/AuthorCard';
import NextCard from '@/components/NextCard';
import TagList from '@/components/TagList';
import Utterences from '@/components/Utterences';
import {CardProps} from '@/components/Card';

const GITHUB_URL = 'https://github.com';

import './style.scss';

export interface BlogPostProps extends LayoutProps {
  data: {
    post: MarkdownRemark;
    recents: MarkdownRemarkConnection;
    site: Site;
  };
}

const createCardProps = ({
                           frontmatter: {
                             title,
                             createdDate,
                             tags,
                             author: {avatar, github, id},
                           },
                           fields: {slug},
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

export default (props: BlogPostProps) => {
  const {frontmatter, html} = props.data.post;
  const cardData = createCardProps(props.data.post);
  // const cover = get(frontmatter, 'image.children.0.fixed', {});
  const nextCardList = props.data.recents.edges;

  return (
    <>
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

        {/*<img {...cover} />*/}

        <article
          className={'blog-post__main'}
          dangerouslySetInnerHTML={{__html: html}}
        />
        <TagList tags={frontmatter.tags}/>

        <section className={'blog-post__next-list'}>
          {nextCardList.map(
            ({
               node: {
                 fields: {slug},
                 frontmatter: {
                   title,
                   createdDate,
                   author: {
                     id,
                     github,
                     avatar
                   },
                 },
               },
             }) => {
              return (
                <NextCard
                  title={title}
                  githubAddress={`${GITHUB_URL}/${github}`}
                  avatar={avatar}
                  id={id}
                  createdDate={createdDate}
                  postLink={slug}
                />
              );
            },
          )}
        </section>
      </section>
      <Utterences repo={'im-d-team/im-d.dev'} theme={'github-light'}/>
    </>
  );
};
