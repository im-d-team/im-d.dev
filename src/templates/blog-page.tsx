import { graphql } from 'gatsby';
import Blog from '@/pages/blog';

export default Blog;

export const pageQuery = graphql`
  query TemplateBlogPage($skip: Int) {
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
      skip: $skip
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
            updatedDate(formatString: "MMMM DD, YYYY")
            createdDate(formatString: "MMMM DD, YYYY")
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
