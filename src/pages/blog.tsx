import * as React from 'react';
import { Link } from 'gatsby';

import { MarkdownRemarkConnection } from '@/graphql-types';

import PostList from '@/components/PostList';
import BlogPagination from '@/components/Pagination';
import { withLayout, LayoutProps } from '@/layout';

const POSTS_PER_PAGE = 5;

interface BlogProps extends LayoutProps {
  data: {
    posts: MarkdownRemarkConnection;
  };

  pageContext: {
    tag?: string;
  };
}

const BlogPage = ({ data, location }: BlogProps) => {
  const { edges: posts, totalCount } = data.posts;
  const { pathname } = location;

  const pageCount = Math.ceil(totalCount / POSTS_PER_PAGE);

  return (
    <section className="post-contents-list">
      {PostList(posts)}

      <section className="post-pagination-area">
        <BlogPagination Link={Link} pathname={pathname} pageCount={pageCount} />
      </section>
    </section>
  );
};

export default withLayout(BlogPage);
