import * as React from 'react';
import { Link, graphql } from 'gatsby';

import { MarkdownRemarkConnection } from '@/graphql-types';

import PostList from '@/components/PostList';
import BlogPagination from '@/components/Pagination';
import { withLayout, LayoutProps } from '@/components/Layout';

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
  const pageCount = Math.ceil(totalCount / POSTS_PER_PAGE);
  const { pathname } = location;

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

export const pageQuery = graphql`
  query PageBlog2 {
    # Get tags
    tags: allMarkdownRemark(filter: { frontmatter: { draft: { ne: true } } }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }

    # Get posts
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___updatedDate] }
      filter: {
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { regex: "/blog/" }
      }
      limit: 5
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 100, truncate: true)
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            updatedDate(formatString: "MMMM DD, YYYY")
            createdDate(formatString: "MMMM DD, YYYY")
            tags
            author {
              id
              github
              avatar {
                childImageSharp {
                  fixed(width: 35, height: 35) {
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
