import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { get } from 'lodash';
import { Label, Grid, Card, Image, Comment } from 'semantic-ui-react';

import {
  MarkdownRemark,
  MarkdownRemarkConnection,
  Site,
} from '@/graphql-types';
import { withLayout, LayoutProps } from '@/components/Layout';

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
              {frontmatter.createdDate}
            </Comment.Metadata>
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
    <section className="ui text container">
      <section style={{ border: 'none' }}>
        <Image
          size="tiny"
          src={avatar.childImageSharp.fixed.src}
          srcSet={avatar.childImageSharp.fixed.srcSet}
          circular
        />
        <section>
          <p>{frontmatter.author.id}</p>
          <p>{frontmatter.author.bio}</p>
          <span>
            {frontmatter.updatedDate} - {timeToRead} min read
          </span>
        </section>
        <h1>{frontmatter.title}</h1>
      </section>
      <Image {...cover} fluid />
      <article
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
      <section>{tags}</section>
      <section>
        <Grid padded centered>
          {recents}
        </Grid>
      </section>
    </section>
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
            updatedDate(formatString: "DD MMMM, YYYY")
            createdDate(formatString: "DD MMMM, YYYY")
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
