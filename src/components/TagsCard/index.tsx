import * as React from 'react';
import { GatsbyLinkProps } from 'gatsby-link';
import { AiFillTag } from 'react-icons/ai';

import { markdownRemarkGroupConnectionConnection } from '@/graphql-types';

import './style.css';

interface TagsCardProps extends React.HTMLProps<HTMLDivElement> {
  tags: markdownRemarkGroupConnectionConnection[];
  Link: React.ComponentClass<GatsbyLinkProps<any>>;
  tag?: string;
}

export default (props: TagsCardProps) => {
  return (
    <section className="tag-card">
      <section className="tag-card__header">
        <h1 className="tag-card__title">Tags</h1>
      </section>
      <section className="tag-card__tag-list">
        {props.tags.map((tag) => {
          const isActive = tag.fieldValue === props.tag;
          const tagLink = isActive ? `/blog` : `/blog/tags/${tag.fieldValue}/`;
          const activeStyle = {
            fontWeight: '700',
          };

          return (
            <div className="tag-card__tag" key={tag.fieldValue}>
              <AiFillTag
                className="tag-card__tag_image"
                color={isActive ? '#4183C4' : null}
              />
              <props.Link to={tagLink}>
                <div
                  className="tag-card__tag__tag-name"
                  style={isActive ? activeStyle : null}
                >
                  {tag.fieldValue} ({tag.totalCount})
                </div>
              </props.Link>
            </div>
          );
        })}
      </section>
    </section>
  );
};
