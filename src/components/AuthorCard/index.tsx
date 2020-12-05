import * as React from 'react';
import { AiFillCalendar, AiFillIdcard } from 'react-icons/ai';

import './style.scss';

export interface AuthorCardProps {
  mode?: String;
  githubAddress: string;
  avatar: any;
  id: String;
  createdDate: String;
}

export default ({
  mode = 'vertical',
  githubAddress,
  avatar,
  id,
  createdDate,
}: AuthorCardProps) => {
  return (
    <section className={`IMD-author-card ${mode}`}>
      <a
        className="IMD-author-card__author-area"
        href={githubAddress}
        target="_blank"
      >
        <img
          className={`IMD-author-card__author-image ${mode}`}
          src={avatar.childImageSharp.fixed.src}
          srcSet={avatar.childImageSharp.fixed.srcSet}
          alt="IMD Author Avatar"
        />
      </a>

      <section className={`IMD-author-card__contents-area ${mode}`}>
        <div>
          <AiFillIdcard className={'IMD-author-card__icon'} />
          <span className="IMD-author-card__github-id">{id}</span>
        </div>

        <div>
          <AiFillCalendar className={'IMD-author-card__icon'} />
          <span className="IMD-author-card__created-date">{createdDate}</span>
        </div>
      </section>
    </section>
  );
};
