import * as React from 'react';

import { MarkdownRemark, MarkdownRemarkEdge } from '@/graphql-types';
import Card, { CardProps } from '@/components/Card';

const PostList = (posts: Array<MarkdownRemarkEdge>) => (
  <>
    {posts.map(({ node }: { node: MarkdownRemark }) => {
      const {
        frontmatter: {
          title,
          createdDate,
          tags,
          author: { avatar, github, id },
        },
        timeToRead,
        fields: { slug },
        excerpt,
      } = node;

      const cardProps: CardProps = {
        title,
        timeToRead,
        slug,
        excerpt,
        githubAddress: `https://github.com/${github}`,
        avatar,
        id,
        createdDate,
        tags,
      };

      return <Card {...cardProps}></Card>;
    })}
  </>
);

export default PostList;
