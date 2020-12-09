import * as React from 'react';
import {Link, graphql} from 'gatsby';

import {MarkdownRemarkConnection} from '@/graphql-types';

import PostList from '@/components/PostList';
import BlogPagination from '@/components/Pagination';
import {withLayout, LayoutProps} from '@/layout';

const POSTS_PER_PAGE = 5;

interface BlogProps extends LayoutProps {
  data: {
    tags: MarkdownRemarkConnection;
    posts: MarkdownRemarkConnection;
  };
  pageContext: {
    tag?: string;
  };
}

export const PostPage = ({data, location}: BlogProps) => {
  const {edges: posts, totalCount} = data.posts;
  const {pathname} = location;

  const pageCount = Math.ceil(totalCount / POSTS_PER_PAGE);
  const isTagPage = pathname.split('/')[2] === 'tags'

  return (
    <section className="post-contents-list">
      {
        isTagPage &&
        <Link to={'/'}>
          <p className="tags-page-title">
            {pathname.split('/')[3].toUpperCase()}
          </p>
        </Link>
      }
      {PostList(posts)}

      <section className="post-pagination-area">
        <BlogPagination
          Link={Link}
          pathname={pathname}
          pageCount={pageCount}
        />
      </section>
    </section>
  );
};

export default withLayout(PostPage);

export const pageQuery = graphql`
    query PageBlog {
        # Get tags
        tags: allMarkdownRemark(filter: { frontmatter: { draft: { ne: true } } }) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
        # Get posts
        posts: allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___createdDate] }
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
                        tags
                        updatedDate(formatString: "YYYY-MM-DD")
                        createdDate(formatString: "YYYY-MM-DD")
                        author {
                            id
                            bio
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
