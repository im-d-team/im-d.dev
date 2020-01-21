import * as React from 'react';
import { Link } from 'gatsby';
import { get } from 'lodash';

import { MarkdownRemarkConnection, ImageSharp } from '../graphql-types';
import { MarkdownRemark } from '../graphql-types';

import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import { withLayout, LayoutProps, menuItems } from '../components/Layout';
import TagsCard from '../components/TagsCard/TagsCard';
import BlogPagination from '../components/BlogPagination/BlogPagination';
import {
  Button,
  Segment,
  Container,
  Grid,
  Header,
  Icon,
  Card,
  Comment,
  Responsive,
} from 'semantic-ui-react';
import { graphql } from 'gatsby';

interface BlogProps extends LayoutProps {
  data: {
    tags: MarkdownRemarkConnection;
    posts: MarkdownRemarkConnection;
  };
  pageContext: {
    tag?: string; // only set into `templates/tags-pages.tsx`
  };
}

const IndexPage = (props: BlogProps) => {
  const posts = props.data.posts.edges;
  const { pathname } = props.location;
  const tags = props.data.tags.group;
  const pageCount = Math.ceil(props.data.posts.totalCount / 10);

  const Posts = (
    <Container>
      {posts.map(({ node }: { node: MarkdownRemark }) => {
        const {
          frontmatter,
          timeToRead,
          fields: { slug },
          excerpt,
        } = node;
        const avatar = frontmatter.author.avatar.children[0] as ImageSharp;
        const cover = get(frontmatter, 'image.children.0.fixed', {});

        const extra = (
          <Comment.Group>
            <Comment>
              <Comment.Avatar
                src={avatar.fixed.src}
                srcSet={avatar.fixed.srcSet}
              />
              <Comment.Content>
                <Comment.Author style={{ fontWeight: 400 }}>
                  {frontmatter.author.id}
                </Comment.Author>
                <Comment.Metadata style={{ margin: 0 }}>
                  {frontmatter.createdDate}
                </Comment.Metadata>
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
          <Card
            key={slug}
            fluid
            image={cover}
            header={frontmatter.title}
            extra={extra}
            description={description}
          />
        );
      })}
    </Container>
  );

  return (
    <div>
      <HeaderMenu Link={Link} pathname={props.location.pathname} inverted />
      {/* Master head */}
      <Segment vertical inverted textAlign="center" className="masthead">
        <Container text>
          <Header inverted as="h1"></Header>
          <Header inverted as="h2"></Header>
          <Button primary size="medium">
            테스트 진행 중
          </Button>
        </Container>
      </Segment>

      {/* About this starter */}
      <Segment vertical className="">
        <Grid padded style={{ justifyContent: 'center' }}>
          <div style={{ maxWidth: 600 }}>
            {Posts}
            <Segment vertical textAlign="center">
              <BlogPagination
                Link={Link}
                pathname={pathname}
                pageCount={pageCount}
              />
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
      filter: {
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { regex: "/blog/" }
      }
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
              children {
                ... on ImageSharp {
                  fixed(width: 700, height: 100) {
                    src
                    srcSet
                  }
                }
              }
            }
            author {
              id
              avatar {
                children {
                  ... on ImageSharp {
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
  }
`;
