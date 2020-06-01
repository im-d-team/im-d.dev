import * as React from 'react';

import { Link } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';
import { Header, Grid, Card, List, Container, Feed, Segment, Comment } from 'semantic-ui-react';
import { MarkdownRemarkConnection, ImageSharp } from '../graphql-types';
import BlogTitle from '../components/BlogTitle';
import TagsCard from '../components/TagsCard/TagsCard';
import BlogPagination from '../components/BlogPagination/BlogPagination';
import { get } from 'lodash';
import { withLayout, LayoutProps } from '../components/Layout';
import { MarkdownRemark } from '../graphql-types';

interface BlogProps extends LayoutProps {
  data: {
    tags: MarkdownRemarkConnection;
    posts: MarkdownRemarkConnection;
  };

  pageContext: {
    tag?: string; // only set into `templates/tags-pages.tsx`
  };
}

const BlogPage = (props: BlogProps) => {
  const tags = props.data.tags.group;
  const posts = props.data.posts.edges;
  const { pathname } = props.location;
  const pageCount = Math.ceil(props.data.posts.totalCount / 10);

  // TODO export posts in a proper component
  const Posts = (
    <Container>
      {posts.map(({ node }: { node: MarkdownRemark }) => {
        const {
          frontmatter,
          timeToRead,
          fields: { slug },
          excerpt,
        } = node;

        const avatar = frontmatter.author.avatar;
        const cover = get(frontmatter, 'image.children.0.fixed', {});
        const extra = (
          <Comment.Group>
            <Comment>
              <Comment.Avatar src={avatar.childImageSharp.fixed.src} srcSet={avatar.childImageSharp.fixed.srcSet} />
              <Comment.Content>
                <Comment.Author style={{ fontWeight: 400 }}>{frontmatter.author.id}</Comment.Author>
                <Comment.Metadata style={{ margin: 0 }}>{frontmatter.createdDate}</Comment.Metadata>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        );

        const description = (
          <Card.Description>
            {excerpt}
            <br />
            <Link to={slug}>Read more…</Link>
          </Card.Description>
        );
        return (
          <Card key={slug} fluid image={cover} header={frontmatter.title} extra={extra} description={description} />
        );
      })}
    </Container>
  );

  return (
    <Container>
      {/* Title */}
      {/* <BlogTitle /> */}
      {/* Content */}

      <Segment vertical>
        <Grid padded style={{ justifyContent: 'center' }}>
          <div style={{ maxWidth: 600 }}>
            {Posts}
            <Segment vertical textAlign="center">
              <BlogPagination Link={Link} pathname={pathname} pageCount={pageCount} />
            </Segment>
          </div>
          <div style={{ maxWidth: 250 }}>
            <TagsCard Link={Link} tags={tags} tag={props.pageContext.tag} />
          </div>
        </Grid>
      </Segment>
    </Container>
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
      sort: { order: DESC, fields: [frontmatter___createdDate] }
      filter: { frontmatter: { draft: { ne: true } }, fileAbsolutePath: { regex: "/blog/" } }
      limit: 10
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
            image {
              id
            }
            author {
              id
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
