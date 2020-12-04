import * as React from 'react';
import { AiFillCalendar, AiFillIdcard } from 'react-icons/ai';

import './style.css';

interface AuthorCardProps {
  githubAddress: String;
  avatar: any;
  id: String;
  createdDate: String;
}

export default ({
  githubAddress,
  avatar,
  id,
  createdDate,
}: AuthorCardProps) => {
  return (
    <>
      <a
        className="IMD-post-card__author-area"
        href={githubAddress}
        target="_blank"
      >
        <img
          className="IMD-post-card__author-image"
          src={avatar.childImageSharp.fixed.src}
          srcSet={avatar.childImageSharp.fixed.srcSet}
          alt="IMD Author Avatar"
        />
      </a>

      <div>
        <AiFillIdcard className={'IMD-post-card__icon'} />
        <span className="IMD-post-card__github-id">{id}</span>
      </div>

      <div>
        <AiFillCalendar className={'IMD-post-card__icon'} />
        <span className="IMD-post-card__created-date">{createdDate}</span>
      </div>
    </>
  );
};
