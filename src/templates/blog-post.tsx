import * as React from 'react';
import { graphql } from 'gatsby';
import { get } from 'lodash';
import {
  MarkdownRemark,
  MarkdownRemarkConnection,
  Site,
} from '@/graphql-types';

import { withLayout, LayoutProps } from '@/layout';

import TagList from '@/components/TagList';
import AuthorCard from '@/components/AuthorCard';
import { CardProps } from '@/components/Card';

interface BlogPostProps extends LayoutProps {
  data: {
    post: MarkdownRemark;
    recent: MarkdownRemarkConnection;
    site: Site;
  };
}

const GITHUB_URL = 'https://github.com';

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

import './style.scss';

const BlogPostPage = (props: BlogPostProps) => {
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

export default withLayout(BlogPostPage);

export const pageQuery = graphql`
  query TemplateBlogPost($slug: String!) {
    site: site {
      siteMetadata {
        disqus
      }
    }
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      fields {
        slug
      }
      frontmatter {
        tags
        author {
          id
          bio
          github
          avatar {
            childImageSharp {
              fixed(width: 80, height: 80, quality: 100) {
                src
                srcSet
              }
            }
          }
        }
        title
        createdDate(formatString: "YYYY-MM-DD")
        updatedDate(formatString: "YYYY-MM-DD")
      }
    }

    recents: allMarkdownRemark(
      filter: {
        fields: { slug: { ne: $slug } }
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { regex: "/blog/" }
      }
      sort: { order: DESC, fields: [frontmatter___updatedDate] }
      limit: 4
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            author {
              id
              avatar {
                childImageSharp {
                  fixed(width: 36, height: 36) {
                    src
                    srcSet
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
