import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { get } from 'lodash';
import { Container, Card, Comment } from 'semantic-ui-react';

import { MarkdownRemark, MarkdownRemarkEdge } from '@/graphql-types';

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

export default PostList;
