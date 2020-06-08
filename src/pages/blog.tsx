import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { Container } from 'semantic-ui-react';

import TagsCard from '@/components/TagsCard';
import PostList from '@/components/PostList';
import BlogPagination from '@/components/Pagination';
import { withLayout, LayoutProps } from '@/components/Layout';
import { MarkdownRemarkConnection } from '@/graphql-types';

interface BlogProps extends LayoutProps {
  data: {
    tags: MarkdownRemarkConnection;
    posts: MarkdownRemarkConnection;
  };

  pageContext: {
    tag?: string;
  };
}

const BlogPage = (props: BlogProps) => {
  const tags = props.data.tags.group;
  const posts = props.data.posts.edges;
  const { pathname } = props.location;
  const pageCount = Math.ceil(props.data.posts.totalCount / 10);

  return (
    <Container>
      <section className="post-contents-list">
        {PostList(posts)}
        <div className="post-pagination-area">
          <BlogPagination
            Link={Link}
            pathname={pathname}
            pageCount={pageCount}
          />
        </div>

        {/* <Responsive minWidth={Responsive.onlyComputer.minWidth}>
            <div style={{ maxWidth: 250 }}>
              <TagsCard Link={Link} tags={tags} tag={props.pageContext.tag} />
            </div>
          </Responsive> */}
      </section>
    </Container>
  );
};

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

export default withLayout(BlogPage);
