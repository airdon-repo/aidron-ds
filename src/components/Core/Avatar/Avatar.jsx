import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({
  src,
  name,
  size,
  ...args
}) => {
  const buildName = (str) => str.split(' ').map((piece) => piece.charAt(0));
  const isImage = (url) => {
    if (!url) return false;
    const http = new XMLHttpRequest();
    http.open('HEAD', url);
    http.send();
    return http.status !== 404;
  };
  return (
    <div
      data-testid="avatar"
      className={[
        'ragnarok',
        'avatar',
        isImage(src) ? 'photo' : 'initials',
        size,
        args.className
      ].join(' ')}
      role="img"
      style={isImage(src) ? { backgroundImage: `url(${src})` } : {}}
      title={name}
      alt={name}
    >
      {!isImage(src) && buildName(name)}
    </div>
  );
};

Avatar.propTypes = {
  /**
   * Which image should it show?
   */
  src: PropTypes.string,
  /**
   * Who is this?
   */
  name: PropTypes.string,
  /**
   * How big should the avatar be?
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
};

Avatar.defaultProps = {
  src: undefined,
  name: 'John Doe',
  size: 'md'
};

export {
  Avatar
};
