import * as React from 'react';
import { graphql } from 'gatsby';
import { withLayout } from '@/layout';
import Post, { BlogPostProps } from '@/components/Post';

const BlogPostPage = (props: BlogPostProps) => {
  return <Post {...props} />;
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
      fields {
        slug
      }
      frontmatter {
        title
        tags
        author {
          id
          bio
          github
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
        createdDate(formatString: "YYYY-MM-DD")
        updatedDate(formatString: "YYYY-MM-DD")
      }
    }

    recents: allMarkdownRemark(
      filter: {
        fields: { slug: { ne: $slug } }
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { regex: "/blog/" }
      }
      sort: { order: DESC, fields: [frontmatter___updatedDate] }
      limit: 3
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            createdDate(formatString: "YYYY-MM-DD")
            updatedDate(formatString: "YYYY-MM-DD")
            author {
              id
              github
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
