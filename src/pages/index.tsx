import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { get } from 'lodash';
import {
  Segment,
  Container,
  Grid,
  Card,
  Comment,
  Responsive,
} from 'semantic-ui-react';

import {
  MarkdownRemark,
  MarkdownRemarkConnection,
  MarkdownRemarkEdge,
  markdownRemarkGroupConnectionConnection,
} from '@/graphql-types';

import TagsCard from '@/components/TagsCard';
import Header from '@/components/Header';
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

const PostList = (posts: Array<MarkdownRemarkEdge>) => (
  <Container>
    {posts.map(({ node }: { node: MarkdownRemark }) => {
      const {
        frontmatter,
        timeToRead,
        fields: { slug },
        excerpt,
      } = node;
      const author = frontmatter.author;
      const { avatar } = author;
      const githubAddress = `https://github.com/${author.github}`;
      const cover = get(frontmatter, 'image.children.0.fixed', {});

      const extra = (
        <Comment.Group>
          <section className="main-page__post-contents-footer">
            <a href={githubAddress} target="_blank">
              <img
                className="main-page__post-contents-footer__avatar-image"
                src={avatar.childImageSharp.fixed.src}
                alt="Avatar"
                srcSet={avatar.childImageSharp.fixed.srcSet}
              />
            </a>
            <Comment.Author style={{ fontWeight: 400 }}>
              {author.id}
            </Comment.Author>
            <Comment.Metadata style={{ margin: 0 }}>
              {frontmatter.createdDate}
            </Comment.Metadata>
            <Comment.Metadata style={{ margin: 10 }}>
              {timeToRead} min read
            </Comment.Metadata>
          </section>
        </Comment.Group>
      );

      const description = <Card.Description>{excerpt}</Card.Description>;

      return (
        <Link to={slug}>
          <Card
            key={slug}
            fluid
            image={cover}
            header={frontmatter.title}
            extra={extra}
            description={description}
          />
        </Link>
      );
    })}
  </Container>
);

const IndexPage = (props: BlogProps) => {
  const { data, location } = props;
  const { pathname } = location;

  const posts: Array<MarkdownRemarkEdge> = data.posts.edges;
  const tags: Array<markdownRemarkGroupConnectionConnection> = data.tags.group;
  const pageCount = Math.ceil(data.posts.totalCount / 10);

  return (
    <>
      <Segment vertical className="">
        <Grid padded style={{ justifyContent: 'center' }}>
          <div style={{ maxWidth: 600 }}>
            {PostList(posts)}
            <Segment vertical textAlign="center">
              <BlogPagination
                Link={Link}
                pathname={pathname}
                pageCount={pageCount}
              />
            </Segment>
          </div>
          {/* <Responsive minWidth={Responsive.onlyComputer.minWidth}>
            <div style={{ maxWidth: 250 }}>
              <TagsCard Link={Link} tags={tags} tag={props.pageContext.tag} />
            </div>
          </Responsive> */}
        </Grid>
      </Segment>
    </>
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
