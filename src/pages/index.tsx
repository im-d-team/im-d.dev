import * as React from 'react';
import { Link, graphql } from 'gatsby';

import {
  MarkdownRemarkConnection,
  MarkdownRemarkEdge,
  markdownRemarkGroupConnectionConnection,
} from '@/graphql-types';

import TagsCard from '@/components/TagsCard';
import PostList from '@/components/PostList';
import BlogPagination from '@/components/Pagination';
import { withLayout, LayoutProps } from '@/components/Layout';

interface BlogProps extends LayoutProps {
  data: {
    tags: MarkdownRemarkConnection;
    posts: MarkdownRemarkConnection;
  };
  pageContext: {
    tag?: string;
  };
}

const IndexPage = (props: BlogProps) => {
  const { data, location } = props;
  const { pathname } = location;

  const posts: Array<MarkdownRemarkEdge> = data.posts.edges;
  const tags: Array<markdownRemarkGroupConnectionConnection> = data.tags.group;
  const pageCount = Math.ceil(data.posts.totalCount / 10);

  return (
    <section className="post-contents-list">
      {PostList(posts)}
      <div className="post-pagination-area">
        <BlogPagination Link={Link} pathname={pathname} pageCount={pageCount} />
      </div>

      {/* <Responsive minWidth={Responsive.onlyComputer.minWidth}>
            <div style={{ maxWidth: 250 }}>
              <TagsCard Link={Link} tags={tags} tag={props.pageContext.tag} />
            </div>
          </Responsive> */}
    </section>
  );
};

export default withLayout(IndexPage);

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
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            updatedDate(formatString: "DD MMMM, YYYY")
            createdDate(formatString: "DD MMMM, YYYY")
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
