import Blog from '@/pages';
import { graphql } from 'gatsby';

export default Blog;

export const pageQuery = graphql`
  query TemplateTagPage($tag: String) {
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
        frontmatter: { draft: { ne: true }, tags: { in: [$tag] } }
        fileAbsolutePath: { regex: "/blog/" }
      }
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
            updatedDate(formatString: "YYYY-MM-DD")
            createdDate(formatString: "YYYY-MM-DD")
            tags
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
