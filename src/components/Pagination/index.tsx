import * as React from 'react';
import { GatsbyLinkProps } from 'gatsby-link';
import { times } from 'lodash';

import './style.scss';

interface BlogPaginationProps extends React.HTMLProps<HTMLDivElement> {
  pathname: string;
  Link: React.ComponentClass<GatsbyLinkProps<any>>;
  pageCount: number;
}

export default (props: BlogPaginationProps) => {
  if (props.pageCount === 1) {
    return null;
  }

  const activeItem = props.pathname.startsWith('/blog/page/')
    ? props.pathname.split('/')[3]
    : '1';

  return (
    <section className="pagination">
      {times(props.pageCount, (index) => {
        const pageIndex = (index + 1).toString();
        const rangeStep = props.pageCount < 10 ? 5 : 3;
        const isInRange =
          +pageIndex - rangeStep < +activeItem &&
          +pageIndex + rangeStep > +activeItem;
        const isLastPage = +pageIndex === props.pageCount;
        const isFirstPage = +pageIndex === 1;

        const indexingClass =
          activeItem === pageIndex
            ? 'pagination__indexing active'
            : 'pagination__indexing';

        if (isInRange || isFirstPage || isLastPage) {
          return (
            <props.Link to={`/blog/page/${pageIndex}/`}>
              <button className={indexingClass} key={pageIndex}>
                {pageIndex}
              </button>
            </props.Link>
          );
        } else {
          return +pageIndex === props.pageCount - 1 || +pageIndex === 2 ? (
            <button key={pageIndex}>...</button>
          ) : null;
        }
      })}
    </section>
  );
};
