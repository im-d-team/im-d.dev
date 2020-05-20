import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { get } from 'lodash';
import { Button, Segment, Container, Grid, Header, Card, Comment, Responsive } from 'semantic-ui-react';

import { MarkdownRemarkConnection } from '@/graphql-types';
import { MarkdownRemark } from '@/graphql-types';
import HeaderMenu from '@/components/HeaderMenu/HeaderMenu';
import { withLayout, LayoutProps } from '@/components/Layout';
import TagsCard from '@/components/TagsCard/TagsCard';
import BlogPagination from '@/components/BlogPagination/BlogPagination';

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

  const posts = data.posts.edges;
  const tags = data.tags.group;
  const pageCount = Math.ceil(data.posts.totalCount / 10);

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
    <div>
      <HeaderMenu Link={Link} pathname={props.location.pathname} inverted />
      <Segment vertical inverted textAlign="center" className="masthead">
        <Container text>
          <Header inverted as="h1">
            제목
          </Header>
          <Header inverted as="h2">
            부제목
          </Header>
          <Button primary size="medium">
            Dev-Docs 방문하기
          </Button>
        </Container>
      </Segment>

      {/* About this starter */}
      <Segment vertical className="">
        <Grid padded style={{ justifyContent: 'center' }}>
          <div style={{ maxWidth: 600 }}>
            {Posts}
            <Segment vertical textAlign="center">
              <BlogPagination Link={Link} pathname={pathname} pageCount={pageCount} />
            </Segment>
          </div>
          <Responsive minWidth={Responsive.onlyComputer.minWidth}>
            <div style={{ maxWidth: 250 }}>
              <TagsCard Link={Link} tags={tags} tag={props.pageContext.tag} />
            </div>
          </Responsive>
        </Grid>
      </Segment>

      {/* Key features */}
      {/* <Segment vertical className="stripe alternate feature" /> */}
    </div>
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
            image
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
