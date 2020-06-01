import * as React from 'react';
import { Link } from 'gatsby';
import { get } from 'lodash';
import {
  Header,
  Container,
  Segment,
  Icon,
  Label,
  Button,
  Grid,
  Card,
  Image,
  Item,
  Comment,
} from 'semantic-ui-react';
import {
  MarkdownRemark,
  ImageSharp,
  MarkdownRemarkConnection,
  Site,
} from '@/graphql-types';
import BlogTitle from '@/components/BlogTitle';
import { withLayout, LayoutProps } from '@/components/Layout';
import { graphql } from 'gatsby';

interface BlogPostProps extends LayoutProps {
  data: {
    post: MarkdownRemark;
    recents: MarkdownRemarkConnection;
    site: Site;
  };
}

const BlogPostPage = (props: BlogPostProps) => {
  const { frontmatter, html, timeToRead } = props.data.post;
  const avatar = frontmatter.author.avatar;
  const tags = props.data.post.frontmatter.tags.map((tag) => (
    <Label key={tag}>
      <Link to={`/blog/tags/${tag}/`}>{tag}</Link>
    </Label>
  ));

  const recents = props.data.recents.edges.map(({ node }) => {
    const recentAvatar = node.frontmatter.author.avatar;
    const recentCover = get(node, 'frontmatter.image.children.0.fixed', {});
    const extra = (
      <Comment.Group>
        <Comment>
          <Comment.Avatar
            src={recentAvatar.childImageSharp.fixed.src}
            srcSet={recentAvatar.childImageSharp.fixed.srcSet}
          />

          <Comment.Content>
            <Comment.Author style={{ fontWeight: 400 }}>
              {node.frontmatter.author.id}
            </Comment.Author>

            <Comment.Metadata style={{ margin: 0 }}>
              {node.timeToRead} min read
            </Comment.Metadata>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    );

    return (
      <div key={node.fields.slug} style={{ paddingBottom: '1em' }}>
        <Card
          as={Link}
          to={node.fields.slug}
          image={recentCover}
          header={node.frontmatter.title}
          extra={extra}
        />
      </div>
    );
  });

  const cover = get(frontmatter, 'image.children.0.fixed', {});

  return (
    <Container className="ui text container">
      {/* <BlogTitle /> */}
      <Segment vertical style={{ border: 'none' }}>
        <Item.Group>
          <Item>
            <Item.Image
              size="tiny"
              src={avatar.childImageSharp.fixed.src}
              srcSet={avatar.childImageSharp.fixed.srcSet}
              circular
            />
            <Item.Content>
              <Item.Description>{frontmatter.author.id}</Item.Description>
              <Item.Meta>{frontmatter.author.bio}</Item.Meta>
              <Item.Extra>
                {frontmatter.updatedDate} - {timeToRead} min read
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
        <Header as="h1">{frontmatter.title}</Header>
      </Segment>
      <Image {...cover} fluid />
      <Segment
        vertical
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
      <Segment vertical>{tags}</Segment>
      {props.data.site &&
        props.data.site.siteMetadata &&
        props.data.site.siteMetadata.disqus && <Segment vertical></Segment>}
      <Segment vertical>
        <Grid padded centered>
          {recents}
        </Grid>
      </Segment>
    </Container>
  );
};

export default withLayout(BlogPostPage);

export const pageQuery = graphql`
  query TemplateBlogPost($slug: String!) {
    site: site {
      siteMetadata {
        disqus
      }
    }
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      timeToRead
      fields {
        slug
      }
      frontmatter {
        tags
        author {
          id
          bio
          twitter
          avatar {
            childImageSharp {
              fixed(width: 80, height: 80, quality: 100) {
                src
                srcSet
              }
            }
          }
        }
        title
        updatedDate(formatString: "MMM D, YYYY")
      }
    }

    recents: allMarkdownRemark(
      filter: {
        fields: { slug: { ne: $slug } }
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { regex: "/blog/" }
      }
      sort: { order: DESC, fields: [frontmatter___updatedDate] }
      limit: 4
    ) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            author {
              id
              avatar {
                childImageSharp {
                  fixed(width: 36, height: 36) {
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
