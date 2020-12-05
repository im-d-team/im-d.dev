import * as React from 'react';
import { AiFillTag } from 'react-icons/ai';

import Tag from '@/components/Tag';

import './style.scss';

interface TagListProps {
  tags: Array<string>;
}

export default ({ tags }: TagListProps) => {
  return (
    <div className="IMD-tag-list">
      <AiFillTag className={'IMD-tag-list__tag-icon'} />
      {tags.map((tagName) => (
        <Tag tagName={tagName} />
      ))}
    </div>
  );
};
