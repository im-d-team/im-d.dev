import * as React from 'react';
import { MarkdownRemark, MarkdownRemarkEdge } from '@/graphql-types';
import Card, { CardProps } from '@/components/Card';

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

const PostList = (posts: Array<MarkdownRemarkEdge>) => (
  <>
    {posts.map(({ node }: { node: MarkdownRemark }) => (
      <Card key="nodeId" {...createCardProps(node)} />
    ))}
  </>
);

export default PostList;
