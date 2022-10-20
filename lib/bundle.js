'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var Highcharts = require('highcharts');
var HighchartsReact = require('highcharts-react-official');
var feather = require('feather-icons');
var reactTable = require('react-table');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var Highcharts__default = /*#__PURE__*/_interopDefaultLegacy(Highcharts);
var HighchartsReact__default = /*#__PURE__*/_interopDefaultLegacy(HighchartsReact);
var feather__default = /*#__PURE__*/_interopDefaultLegacy(feather);

const Column = ({
  name,
  data,
  color,
  colorLabel,
  suffix,
  type
}) => {
  return {
    name,
    data,
    color,
    colorLabel,
    suffix,
    type
  };
};
Column.propTypes = {
  /**
   * Name of the series
   */
  name: PropTypes__default["default"].string.isRequired,
  /**
   * Which data should be shown?
   */
  data: PropTypes__default["default"].array.isRequired,
  /**
   * Should it appear by default?
   */
  visible: PropTypes__default["default"].bool,
  /**
   * Which axis should it represent?
   */
  yAxis: PropTypes__default["default"].number,
  /**
   * What color the series must have? ex.: #000000
   */
  color: PropTypes__default["default"].string,
  /**
   * What color the series label must have? ex.: #000000
   */
  colorLabel: PropTypes__default["default"].string,
  /**
   * What units this series have? (leading space required)
   */
  suffix: PropTypes__default["default"].string,
  /**
   * Type of chart
   */
  type: PropTypes__default["default"].string
};
Column.defaultProps = {
  visible: true,
  color: undefined,
  colorLabel: undefined,
  suffix: undefined,
  yAxis: 0,
  type: 'column'
};

const Line = ({
  name,
  data,
  color,
  colorLabel,
  suffix,
  type
}) => {
  return {
    name,
    data,
    color,
    colorLabel,
    suffix,
    type
  };
};
Line.propTypes = {
  /**
   * Name of the series
   */
  name: PropTypes__default["default"].string.isRequired,
  /**
   * Which data should be shown?
   */
  data: PropTypes__default["default"].array.isRequired,
  /**
   * Should it appear by default?
   */
  visible: PropTypes__default["default"].bool,
  /**
   * Which axis should it represent?
   */
  yAxis: PropTypes__default["default"].number,
  /**
   * What color the series must have? ex.: #000000
   */
  color: PropTypes__default["default"].string,
  /**
   * What color the series label must have? ex.: #000000
   */
  colorLabel: PropTypes__default["default"].string,
  /**
   * What units this series have? (leading space required)
   */
  suffix: PropTypes__default["default"].string,
  /**
   * Line dash style
   */
  dash: PropTypes__default["default"].oneOf(['Solid', 'ShortDash', 'ShortDot', 'ShortDashDot', 'ShortDashDotDot', 'Dot', 'Dash', 'LongDash', 'DashDot', 'LongDashDot', 'LongDashDotDot']),
  /**
   * Line marker style
   */
  marker: PropTypes__default["default"].oneOf(['circle', 'square', 'diamond', 'triangle', 'triangle-down']),
  /**
   * Type of chart
   */
  type: PropTypes__default["default"].string
};
Line.defaultProps = {
  visible: true,
  color: undefined,
  colorLabel: undefined,
  suffix: undefined,
  yAxis: 0,
  dash: 'Solid',
  marker: 'circle',
  type: 'spline'
};

/* eslint-disable react/no-danger */
const Icon = ({
  size,
  stroke,
  color,
  icon,
  className,
  style
}) => /*#__PURE__*/React__default["default"].createElement("i", {
  "data-testid": "icon",
  className: className,
  style: {
    width: size,
    height: size,
    ...style
  },
  dangerouslySetInnerHTML: {
    __html: feather__default["default"].icons[icon].toSvg({
      class: color || '',
      'stroke-width': stroke,
      width: size,
      height: size
    })
  }
});
Icon.propTypes = {
  /**
   * How big should the icon be?
   */
  size: PropTypes__default["default"].number,
  /**
   * How thic should its lines be?
   */
  stroke: PropTypes__default["default"].number,
  /**
   * Which color should it be?
   */
  color: PropTypes__default["default"].oneOf(['color-primary-medium', 'color-primary-light', 'color-primary-lightest', 'color-secondary-medium', 'color-tertiary-medium', 'color-neutral-90', 'color-neutral-70', 'color-neutral-50', 'color-neutral-40', 'color-neutral-30', 'color-neutral-10', 'color-neutral-white', 'color-red-dark', 'color-red-medium', 'color-red-light', 'color-yellow-dark', 'color-yellow-medium', 'color-yellow-light', 'color-green-dark', 'color-green-medium', 'color-green-light', 'color-blue-dark', 'color-blue-medium', 'color-blue-light']),
  /**
   * Which icon should be shown?
   */
  icon: PropTypes__default["default"].oneOf(['activity', 'airplay', 'alert-circle', 'alert-octagon', 'alert-triangle', 'align-center', 'align-justify', 'align-left', 'align-right', 'anchor', 'aperture', 'archive', 'arrow-down', 'arrow-down-circle', 'arrow-down-left', 'arrow-down-right', 'arrow-left', 'arrow-left-circle', 'arrow-right', 'arrow-right-circle', 'arrow-up', 'arrow-up-circle', 'arrow-up-left', 'arrow-up-right', 'at-sign', 'award', 'bar-chart', 'bar-chart-2', 'battery', 'battery-charging', 'bell', 'bell-off', 'bluetooth', 'bold', 'book', 'bookmark', 'book-open', 'box', 'briefcase', 'calendar', 'camera', 'camera-off', 'cast', 'check', 'check-circle', 'check-square', 'chevron-down', 'chevron-left', 'chevron-right', 'chevrons-down', 'chevrons-left', 'chevrons-right', 'chevrons-up', 'chevron-up', 'chrome', 'circle', 'clipboard', 'clock', 'cloud', 'cloud-drizzle', 'cloud-lightning', 'cloud-off', 'cloud-rain', 'cloud-snow', 'code', 'codepen', 'codesandbox', 'coffee', 'columns', 'command', 'compass', 'copy', 'corner-down-left', 'corner-down-right', 'corner-left-down', 'corner-left-up', 'corner-right-down', 'corner-right-up', 'corner-up-left', 'corner-up-right', 'cpu', 'credit-card', 'crop', 'crosshair', 'database', 'delete', 'disc', 'divide', 'divide-circle', 'divide-square', 'dollar-sign', 'download', 'download-cloud', 'dribbble', 'droplet', 'edit', 'edit-2', 'edit-3', 'external-link', 'eye', 'eye-off', 'facebook', 'fast-forward', 'feather', 'figma', 'file', 'file-minus', 'file-plus', 'file-text', 'film', 'filter', 'flag', 'folder', 'folder-minus', 'folder-plus', 'framer', 'frown', 'gift', 'git-branch', 'git-commit', 'github', 'gitlab', 'git-merge', 'git-pull-request', 'globe', 'grid', 'hard-drive', 'hash', 'headphones', 'heart', 'help-circle', 'hexagon', 'home', 'image', 'inbox', 'info', 'instagram', 'italic', 'key', 'layers', 'layout', 'life-buoy', 'link', 'link-2', 'linkedin', 'list', 'loader', 'lock', 'log-in', 'log-out', 'mail', 'map', 'map-pin', 'maximize', 'maximize-2', 'meh', 'menu', 'message-circle', 'message-square', 'mic', 'mic-off', 'minimize', 'minimize-2', 'minus', 'minus-circle', 'minus-square', 'monitor', 'moon', 'more-horizontal', 'more-vertical', 'mouse-pointer', 'move', 'music', 'navigation', 'navigation-2', 'octagon', 'package', 'paperclip', 'pause', 'pause-circle', 'pen-tool', 'percent', 'phone', 'phone-call', 'phone-forwarded', 'phone-incoming', 'phone-missed', 'phone-off', 'phone-outgoing', 'pie-chart', 'play', 'play-circle', 'plus', 'plus-circle', 'plus-square', 'pocket', 'power', 'printer', 'radio', 'refresh-ccw', 'refresh-cw', 'repeat', 'rewind', 'rotate-ccw', 'rotate-cw', 'rss', 'save', 'scissors', 'search', 'send', 'server', 'settings', 'share', 'share-2', 'shield', 'shield-off', 'shopping-bag', 'shopping-cart', 'shuffle', 'sidebar', 'skip-back', 'skip-forward', 'slack', 'slash', 'sliders', 'smartphone', 'smile', 'speaker', 'square', 'star', 'stop-circle', 'sun', 'sunrise', 'sunset', 'tablet', 'tag', 'target', 'terminal', 'thermometer', 'thumbs-down', 'thumbs-up', 'toggle-left', 'toggle-right', 'tool', 'trash', 'trash-2', 'trello', 'trending-down', 'trending-up', 'triangle', 'truck', 'tv', 'twitch', 'twitter', 'type', 'umbrella', 'underline', 'unlock', 'upload', 'upload-cloud', 'user', 'user-check', 'user-minus', 'user-plus', 'users', 'user-x', 'video', 'video-off', 'voicemail', 'volume', 'volume-1', 'volume-2', 'volume-x', 'watch', 'wifi', 'wifi-off', 'wind', 'x', 'x-circle', 'x-octagon', 'x-square', 'youtube', 'zap', 'zap-off', 'zoom-in', 'zoom-out'])
};
Icon.defaultProps = {
  size: 24,
  stroke: 1.5,
  color: undefined,
  icon: 'smile'
};

const AccordionTrigger = ({
  value,
  open,
  onClick,
  children
}) => /*#__PURE__*/React__default["default"].createElement("div", {
  onClick: open ? () => onClick(undefined) : () => onClick(value),
  onKeyPress: () => onClick(value),
  role: "button",
  tabIndex: 0,
  className: ['ragnarok', 'accordion-trigger'].join(' ')
}, /*#__PURE__*/React__default["default"].createElement("span", {
  className: "content"
}, children), /*#__PURE__*/React__default["default"].createElement(Icon, {
  size: 24,
  color: "color-primary-medium",
  icon: open ? 'minus-square' : 'plus-square'
}));
const AccordionItem = ({
  value,
  open,
  // selected,
  children
}) => /*#__PURE__*/React__default["default"].createElement("div", {
  className: ['ragnarok', 'accordion-item', value, open ? 'open' : 'close'].join(' ')
}, children);
const Accordion = ({
  children,
  selected,
  className
}) => {
  const [value, setValue] = React.useState(selected);
  React.useEffect(() => {
    setValue(value);
  }, [selected]);
  const PropedChildren = children && children.map((child, idx) => {
    if ( /*#__PURE__*/React__default["default"].isValidElement(child)) {
      if (child.type === AccordionItem) {
        return /*#__PURE__*/React__default["default"].cloneElement(child, {
          key: idx.toString(),
          open: value === child.props.value,
          selected: value,
          children: child.props.children.map((subChild, i) => {
            if ( /*#__PURE__*/React__default["default"].isValidElement(subChild)) {
              if (subChild.type === AccordionTrigger) {
                return /*#__PURE__*/React__default["default"].cloneElement(subChild, {
                  key: i.toString(),
                  value: child.props.value,
                  open: value === child.props.value,
                  onClick: setValue
                });
              }
            }
            return /*#__PURE__*/React__default["default"].cloneElement(subChild, {
              className: value === child.props.value ? 'open' : 'close'
            });
          })
        });
      }
      return child;
    }
    return child;
  });
  return /*#__PURE__*/React__default["default"].createElement("div", {
    "data-testid": "accordion",
    className: ['ragnarok', 'accordion', className].join(' ')
  }, PropedChildren);
};
Accordion.propTypes = {
  /**
   * Which item should be selected by default?
   */
  selected: PropTypes__default["default"].string
};
Accordion.defaultProps = {
  selected: undefined
};

const Avatar = ({
  src,
  name,
  size,
  ...args
}) => {
  const buildName = str => str.split(' ').map(piece => piece.charAt(0));
  const isImage = url => {
    if (!url) return false;
    const http = new XMLHttpRequest();
    http.open('HEAD', url);
    http.send();
    return http.status !== 404;
  };
  return /*#__PURE__*/React__default["default"].createElement("div", {
    "data-testid": "avatar",
    className: ['ragnarok', 'avatar', isImage(src) ? 'photo' : 'initials', size, args.className].join(' '),
    role: "img",
    style: isImage(src) ? {
      backgroundImage: `url(${src})`
    } : {},
    title: name,
    alt: name
  }, !isImage(src) && buildName(name));
};
Avatar.propTypes = {
  /**
   * Which image should it show?
   */
  src: PropTypes__default["default"].string,
  /**
   * Who is this?
   */
  name: PropTypes__default["default"].string,
  /**
   * How big should the avatar be?
   */
  size: PropTypes__default["default"].oneOf(['sm', 'md', 'lg', 'xl'])
};
Avatar.defaultProps = {
  src: undefined,
  name: 'John Doe',
  size: 'md'
};

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

const Badge = ({
  children,
  variant,
  disabled,
  size,
  ...args
}) => /*#__PURE__*/React__default["default"].createElement("span", _extends({
  "data-testid": "badge",
  className: ['ragnarok', 'badge', size, disabled ? 'disabled' : undefined, variant].join(' ')
}, args), children);
Badge.propTypes = {
  /**
   * Which content should it show?
   */
  children: PropTypes__default["default"].node.isRequired,
  /**
   * How big should it be
   */
  size: PropTypes__default["default"].oneOf(['md', 'sm']),
  /**
   * Which variant should it be
   */
  variant: PropTypes__default["default"].oneOf(['danger', 'warning', 'success', 'information', 'disabled']).isRequired
};
Badge.defaultProps = {
  size: 'md'
};

const LinkText = ({
  to,
  size,
  color,
  allcaps,
  label,
  children,
  className,
  target
}) => /*#__PURE__*/React__default["default"].createElement("a", {
  "data-testid": "link",
  href: to,
  target: target,
  className: ['ragnarok', 'link', `text-link-${size}`, color, allcaps ? 'text-decoration-allcaps' : '', className].join(' ')
}, children || label);
LinkText.propTypes = {
  /**
   * How big should the text be?
   */
  size: PropTypes__default["default"].oneOf(['xxs', 'xs', 'sm']),
  /**
   * Where should this link lead to?
   */
  to: PropTypes__default["default"].string.isRequired,
  /**
   * Which color should it be?
   */
  color: PropTypes__default["default"].oneOf(['color-primary-medium', 'color-primary-light', 'color-primary-lightest']),
  /**
   * Should it be uppercase?
   */
  allcaps: PropTypes__default["default"].bool,
  /**
   * Which Behaviour?
   */
  target: PropTypes__default["default"].oneOf(['_self', '_blank']),
  /**
   * Heading contents
   */
  label: PropTypes__default["default"].string
};
LinkText.defaultProps = {
  size: 'sm',
  color: 'color-primary-medium',
  allcaps: false,
  target: '_self',
  label: 'Lorem Ipsum Dolor Sit Amet'
};

const BreadcrumbItem = ({
  children,
  path,
  active
}) => /*#__PURE__*/React__default["default"].createElement("li", {
  className: ['ragnarok', 'breadcrumb-item', active ? 'active' : undefined].join(' ')
}, active && /*#__PURE__*/React__default["default"].createElement("span", null, children), !active && /*#__PURE__*/React__default["default"].createElement(LinkText, {
  to: path,
  size: "xxs"
}, children));
const Breadcrumb = ({
  children
}) => /*#__PURE__*/React__default["default"].createElement("nav", {
  "data-testid": "breadcrumb",
  className: ['ragnarok', 'breadcrumb'].join(' ')
}, /*#__PURE__*/React__default["default"].createElement("ol", {
  className: "breadcrumb-wrapper no-m no-p"
}, children));
Breadcrumb.propTypes = {
  /**
   * Which content should it show?
   */
  children: PropTypes__default["default"].node
};
Breadcrumb.defaultProps = {
  children: /*#__PURE__*/React__default["default"].createElement(BreadcrumbItem, {
    path: "#"
  }, "Initial")
};

/* eslint-disable react/no-danger */

/**
 * Primary UI component for user interaction
 */
const Button = ({
  variant,
  disabled,
  size,
  type,
  icon,
  position,
  label,
  onClick,
  children,
  className
}) => {
  const iconSize = sizeSlug => {
    if (sizeSlug === 'sm') {
      return {
        width: 16,
        height: 16
      };
    }
    if (sizeSlug === 'lg') {
      return {
        width: 24,
        height: 24
      };
    }
    return {
      width: 16,
      height: 16
    };
  };
  return /*#__PURE__*/React__default["default"].createElement("button", {
    "data-testid": "button",
    type: "button",
    disabled: disabled ? 1 : 0,
    onClick: onClick,
    className: ['ragnarok', 'button', `button-${size}`, `button-${type}`, `button-${variant}-medium`, `${icon ? 'icon' : ''}`, `${position !== 'none' && icon ? `icon-${position}` : ''}`, `${!label && icon ? 'no-label' : ''}`, `${icon && !(label || children) ? 'border-radius-circle' : 'border-radius-pill'}`, className].join(' ')
  }, icon && position === 'left' && (label || children) && /*#__PURE__*/React__default["default"].createElement("i", {
    "data-testid": "icon",
    style: {
      height: iconSize(size).height
    },
    dangerouslySetInnerHTML: {
      __html: feather__default["default"].icons[icon].toSvg({
        'stroke-width': 1.5,
        width: iconSize(size).width,
        height: iconSize(size).height
      })
    }
  }), (children || label) && /*#__PURE__*/React__default["default"].createElement("span", {
    className: "label"
  }, children || label), icon && position === 'right' && (label || children) && /*#__PURE__*/React__default["default"].createElement("i", {
    "data-testid": "icon",
    style: {
      height: iconSize(size).height
    },
    dangerouslySetInnerHTML: {
      __html: feather__default["default"].icons[icon].toSvg({
        'stroke-width': 1.5,
        width: iconSize(size).width,
        height: iconSize(size).height
      })
    }
  }), icon && !(label || children) && /*#__PURE__*/React__default["default"].createElement("i", {
    "data-testid": "icon",
    style: {
      height: iconSize(size).height
    },
    dangerouslySetInnerHTML: {
      __html: feather__default["default"].icons[icon].toSvg({
        'stroke-width': 1.5,
        width: iconSize(size).width,
        height: iconSize(size).height
      })
    }
  }));
};
Button.propTypes = {
  /**
   * What variant color to show?
   */
  variant: PropTypes__default["default"].oneOf(['primary']),
  /**
   * Should it be disabled?
   */
  disabled: PropTypes__default["default"].bool,
  /**
   * How big should the button be?
   */
  size: PropTypes__default["default"].oneOf(['sm', 'lg']),
  /**
   * What type is the best?
   */
  type: PropTypes__default["default"].oneOf(['filled', 'outlined', 'ghost']),
  /**
   * Should an Icon be shown? Which one?
   */
  icon: PropTypes__default["default"].oneOf([false, 'activity', 'airplay', 'alert-circle', 'alert-octagon', 'alert-triangle', 'align-center', 'align-justify', 'align-left', 'align-right', 'anchor', 'aperture', 'archive', 'arrow-down', 'arrow-down-circle', 'arrow-down-left', 'arrow-down-right', 'arrow-left', 'arrow-left-circle', 'arrow-right', 'arrow-right-circle', 'arrow-up', 'arrow-up-circle', 'arrow-up-left', 'arrow-up-right', 'at-sign', 'award', 'bar-chart', 'bar-chart-2', 'battery', 'battery-charging', 'bell', 'bell-off', 'bluetooth', 'bold', 'book', 'bookmark', 'book-open', 'box', 'briefcase', 'calendar', 'camera', 'camera-off', 'cast', 'check', 'check-circle', 'check-square', 'chevron-down', 'chevron-left', 'chevron-right', 'chevrons-down', 'chevrons-left', 'chevrons-right', 'chevrons-up', 'chevron-up', 'chrome', 'circle', 'clipboard', 'clock', 'cloud', 'cloud-drizzle', 'cloud-lightning', 'cloud-off', 'cloud-rain', 'cloud-snow', 'code', 'codepen', 'codesandbox', 'coffee', 'columns', 'command', 'compass', 'copy', 'corner-down-left', 'corner-down-right', 'corner-left-down', 'corner-left-up', 'corner-right-down', 'corner-right-up', 'corner-up-left', 'corner-up-right', 'cpu', 'credit-card', 'crop', 'crosshair', 'database', 'delete', 'disc', 'divide', 'divide-circle', 'divide-square', 'dollar-sign', 'download', 'download-cloud', 'dribbble', 'droplet', 'edit', 'edit-2', 'edit-3', 'external-link', 'eye', 'eye-off', 'facebook', 'fast-forward', 'feather', 'figma', 'file', 'file-minus', 'file-plus', 'file-text', 'film', 'filter', 'flag', 'folder', 'folder-minus', 'folder-plus', 'framer', 'frown', 'gift', 'git-branch', 'git-commit', 'github', 'gitlab', 'git-merge', 'git-pull-request', 'globe', 'grid', 'hard-drive', 'hash', 'headphones', 'heart', 'help-circle', 'hexagon', 'home', 'image', 'inbox', 'info', 'instagram', 'italic', 'key', 'layers', 'layout', 'life-buoy', 'link', 'link-2', 'linkedin', 'list', 'loader', 'lock', 'log-in', 'log-out', 'mail', 'map', 'map-pin', 'maximize', 'maximize-2', 'meh', 'menu', 'message-circle', 'message-square', 'mic', 'mic-off', 'minimize', 'minimize-2', 'minus', 'minus-circle', 'minus-square', 'monitor', 'moon', 'more-horizontal', 'more-vertical', 'mouse-pointer', 'move', 'music', 'navigation', 'navigation-2', 'nomes.txt', 'octagon', 'package', 'paperclip', 'pause', 'pause-circle', 'pen-tool', 'percent', 'phone', 'phone-call', 'phone-forwarded', 'phone-incoming', 'phone-missed', 'phone-off', 'phone-outgoing', 'pie-chart', 'play', 'play-circle', 'plus', 'plus-circle', 'plus-square', 'pocket', 'power', 'printer', 'radio', 'refresh-ccw', 'refresh-cw', 'repeat', 'rewind', 'rotate-ccw', 'rotate-cw', 'rss', 'save', 'scissors', 'search', 'send', 'server', 'settings', 'share', 'share-2', 'shield', 'shield-off', 'shopping-bag', 'shopping-cart', 'shuffle', 'sidebar', 'skip-back', 'skip-forward', 'slack', 'slash', 'sliders', 'smartphone', 'smile', 'speaker', 'square', 'star', 'stop-circle', 'sun', 'sunrise', 'sunset', 'tablet', 'tag', 'target', 'terminal', 'thermometer', 'thumbs-down', 'thumbs-up', 'toggle-left', 'toggle-right', 'tool', 'trash', 'trash-2', 'trello', 'trending-down', 'trending-up', 'triangle', 'truck', 'tv', 'twitch', 'twitter', 'type', 'umbrella', 'underline', 'unlock', 'upload', 'upload-cloud', 'user', 'user-check', 'user-minus', 'user-plus', 'users', 'user-x', 'video', 'video-off', 'voicemail', 'volume', 'volume-1', 'volume-2', 'volume-x', 'watch', 'wifi', 'wifi-off', 'wind', 'x', 'x-circle', 'x-octagon', 'x-square', 'youtube', 'zap', 'zap-off', 'zoom-in', 'zoom-out']),
  /**
   * Left or right of Label?
   */
  position: PropTypes__default["default"].oneOf(['none', 'left', 'right']),
  /**
   * Button contents
   */
  label: PropTypes__default["default"].string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes__default["default"].func
};
Button.defaultProps = {
  variant: 'primary',
  disabled: false,
  type: 'filled',
  size: 'sm',
  icon: false,
  position: 'none',
  onClick: undefined
};

const Caption = ({
  allcaps,
  children,
  className
}) => /*#__PURE__*/React__default["default"].createElement("span", {
  "data-testid": "caption",
  allcaps: allcaps ? 1 : 0,
  className: ['ragnarok', 'caption', className, allcaps ? 'text-decoration-allcaps' : ''].join(' ')
}, children);
Caption.propTypes = {
  /**
   * Should it be uppercase?
   */
  allcaps: PropTypes__default["default"].bool
};
Caption.defaultProps = {
  allcaps: undefined
};

const Card = ({
  children,
  ...args
}) => /*#__PURE__*/React__default["default"].createElement("div", _extends({
  "data-testid": "card",
  className: ['ragnarok', 'card'].join(' ')
}, args), children);
Card.propTypes = {
  /**
   * Card contents
   */
  children: PropTypes__default["default"].node
};
Card.defaultProps = {
  children: 'Lorem Ipsum Dolor Sit Amet'
};

const Check = ({
  value,
  children,
  disabled,
  two,
  handleChange
}) => {
  const [checkedValue, setCheckedValue] = React.useState(value);
  const handleCheckValue = () => {
    if (!two) {
      if (checkedValue === '0') {
        setCheckedValue('1');
      }
      if (checkedValue === '1') {
        setCheckedValue('2');
      }
      if (checkedValue === '2') {
        setCheckedValue('0');
      }
      if (handleChange) handleChange(checkedValue);
    } else {
      if (checkedValue === '0') {
        setCheckedValue('1');
      }
      if (checkedValue === '1') {
        setCheckedValue('0');
      }
      if (handleChange) handleChange(checkedValue);
    }
  };
  React.useEffect(() => {
    setCheckedValue(value);
  }, [value]);
  return /*#__PURE__*/React__default["default"].createElement("label", {
    htmlFor: "check-input",
    "data-testid": "check",
    className: ['ragnarok', 'check', 'check-outer'].join(' ')
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    role: "checkbox",
    tabIndex: "-1",
    "aria-labelledby": `check-label-${children ? children.replace(' ', '-') : ''}`,
    "aria-checked": checkedValue === '0' ? 0 : 1,
    onClick: disabled ? undefined : () => handleCheckValue(),
    onKeyPress: disabled ? undefined : () => handleCheckValue(),
    className: ['ragnarok', 'check-wrapper', disabled ? 'disabled' : ''].join(' ')
  }, /*#__PURE__*/React__default["default"].createElement("input", {
    "data-testid": "check-input",
    type: "checkbox",
    name: "check-input",
    checked: checkedValue === '0' ? 0 : 1,
    disabled: disabled,
    hidden: true,
    readOnly: true
    // onChange={(e) => handleChange(e.target.value)}
    ,
    value: checkedValue,
    className: ['ragnarok', 'check-input', checkedValue === '0' ? '' : 'checked'].join(' ')
  }), /*#__PURE__*/React__default["default"].createElement("span", {
    className: "check-control"
  }, checkedValue === '1' && /*#__PURE__*/React__default["default"].createElement(Icon, {
    icon: "check",
    size: 10,
    stroke: 4
  }), checkedValue === '2' && /*#__PURE__*/React__default["default"].createElement(Icon, {
    icon: "minus",
    size: 10,
    stroke: 4
  }))), children && /*#__PURE__*/React__default["default"].createElement("span", {
    id: `check-label-${children.replace(' ', '-')}`,
    className: "check-label"
  }, children));
};
Check.propTypes = {
  /**
   * Initial value
   */
  value: PropTypes__default["default"].oneOf(['0', '1', '2']),
  /**
  * Should it be disabled?
  */
  disabled: PropTypes__default["default"].bool,
  /**
   * Should it have a two step check instead of three?
   */
  two: PropTypes__default["default"].bool,
  /**
   * OnChange handler
   */
  handleChange: PropTypes__default["default"].func
};
Check.defaultProps = {
  disabled: false,
  value: '0',
  two: false,
  handleChange: undefined
};

const Text = ({
  size,
  weight,
  label,
  allcaps,
  children,
  className
}) => /*#__PURE__*/React__default["default"].createElement("p", {
  allcaps: allcaps ? 1 : 0,
  "data-testid": "text-body",
  className: ['ragnarok', 'text', `text-body-${size}-${weight}`, className, allcaps ? 'text-decoration-allcaps' : ''].join(' ')
}, children || label);
Text.propTypes = {
  /**
   * How big should the text be?
   */
  size: PropTypes__default["default"].oneOf(['xxs', 'xs', 'sm']),
  /**
   * How the text should pop?
   */
  weight: PropTypes__default["default"].oneOf(['bold', 'regular']),
  /**
   * Should it be uppercase?
   */
  allcaps: PropTypes__default["default"].bool,
  /**
   * Heading contents
   */
  label: PropTypes__default["default"].string
};
Text.defaultProps = {
  size: 'sm',
  weight: 'regular',
  allcaps: false,
  label: 'Lorem Ipsum Dolor Sit Amet'
};

/* eslint-disable max-len */
const Pagination$1 = ({
  canNextPage,
  canPreviousPage,
  gotoPage,
  nextPage,
  previousPage,
  pageCount,
  pageIndex,
  manualPagination,
  maxEntries,
  paginationCount,
  onPageChange
}) => {
  const buildCans = () => {
    let previous = canPreviousPage;
    let next = canNextPage;
    if (manualPagination) {
      if (pageIndex === 0) {
        previous = false;
      } else if (pageIndex <= pageCount - 1) {
        previous = true;
      }
      if (pageIndex === pageCount - 1) {
        next = false;
      }
    }
    return {
      previous,
      next
    };
  };
  const buildPages = (index, maxToShow = 3) => {
    const max = pageCount < maxToShow ? pageCount : maxToShow;
    const iterator = Array.from(Array(max), (x, idx) => index + idx);
    if (max < 3) {
      if (buildCans().previous && !buildCans().next) {
        iterator[0] = index - 1;
        iterator[1] = index;
      }
      if (!buildCans().previous && buildCans().next) {
        iterator[0] = index;
        iterator[1] = index + 1;
      }
      return iterator;
    }
    if (buildCans().previous && !buildCans().next) {
      iterator[0] = index - 2;
      iterator[1] = index - 1;
      iterator[2] = index;
    }
    if (buildCans().previous && buildCans().next) {
      iterator[0] = index - 1;
      iterator[1] = index;
      iterator[2] = index + 1;
    }
    if (!buildCans().previous && buildCans().next) {
      iterator[0] = index;
      iterator[1] = index + 1;
      iterator[2] = index + 2;
    }
    return iterator;
  };
  React.useEffect(() => {
    if (onPageChange) onPageChange({
      pageIndex: pageIndex + 1,
      paginationCount
    });
  }, [pageIndex]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "pagination-wrapper"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "pagination-label"
  }, `Mostrando ${pageIndex * paginationCount + 1} - ${(pageIndex + 1) * paginationCount > maxEntries ? maxEntries : (pageIndex + 1) * paginationCount} de ${maxEntries}`), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "pagination",
    "data-testid": "pagination"
  }, pageCount > 1 && /*#__PURE__*/React__default["default"].createElement("ul", null, /*#__PURE__*/React__default["default"].createElement("li", {
    className: ['page-item', 'page-prev', !buildCans().previous ? 'disabled' : undefined].join(' ')
  }, /*#__PURE__*/React__default["default"].createElement("button", {
    className: "page-button",
    type: "button",
    href: "#",
    disabled: !buildCans().previous,
    onClick: () => previousPage()
  }, /*#__PURE__*/React__default["default"].createElement(Icon, {
    icon: "chevron-left",
    size: 16
  }), /*#__PURE__*/React__default["default"].createElement("span", {
    className: "visually-hidden"
  }, "Previous"))), buildPages(pageIndex, 3).map(page => /*#__PURE__*/React__default["default"].createElement("li", {
    key: page,
    className: ['page-item', 'page-number', page === pageIndex ? 'disabled' : undefined].join(' ')
  }, /*#__PURE__*/React__default["default"].createElement("button", {
    className: "page-button",
    type: "button",
    onClick: () => gotoPage(page)
  }, page + 1, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "visually-hidden"
  }, page + 1)))).filter(Boolean), /*#__PURE__*/React__default["default"].createElement("li", {
    className: ['page-item', 'page-next', !buildCans().next ? 'disabled' : undefined].join(' ')
  }, /*#__PURE__*/React__default["default"].createElement("button", {
    className: "page-button",
    type: "button",
    href: "#",
    disabled: !buildCans().next,
    onClick: () => nextPage()
  }, /*#__PURE__*/React__default["default"].createElement(Icon, {
    icon: "chevron-right",
    size: 16
  }), /*#__PURE__*/React__default["default"].createElement("span", {
    className: "visually-hidden"
  }, "Next"))))));
};

/* eslint-disable no-nested-ternary */
const DataList = ({
  data,
  dataConfig,
  itemComponent: ItemComponent,
  itemProps,
  onPageChange,
  sort,
  paginationCount = 10,
  recordCount,
  manualPagination = false,
  currentPage
}) => {
  const [tableData, setTableData] = React.useState([]);
  const [controlledIndex, setControlledIndex] = React.useState(currentPage);
  const columns = React__default["default"].useMemo(() => {
    const cols = [];
    dataConfig.map(item => cols.push({
      Header: item.label,
      accessor: item.value
    }));
    return cols;
  }, []);
  React.useEffect(() => {
    setTableData(data);
  }, [data]);
  const {
    state,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage
  } = reactTable.useTable({
    columns,
    data: tableData,
    initialState: {
      sort
    },
    manualPagination,
    pageCount: Math.ceil(recordCount / paginationCount)
  }, reactTable.useFilters, reactTable.useGlobalFilter, reactTable.useSortBy, reactTable.usePagination);
  React.useEffect(() => {
    if (state.pageIndex) {
      setControlledIndex(state.pageIndex + 1);
    }
  }, [state.pageIndex]);
  const PropedComponent = (comp, args) => {
    if ( /*#__PURE__*/React__default["default"].isValidElement(comp)) {
      return /*#__PURE__*/React__default["default"].cloneElement(comp, {
        ...args
      });
    }
    return comp;
  };
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: ['ragnarok', 'datalist'].join(' '),
    "data-testid": "datalist"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "content"
  }, page.map(item => PropedComponent( /*#__PURE__*/React__default["default"].createElement(ItemComponent, null), {
    ...itemProps,
    ...item.original
  }))), /*#__PURE__*/React__default["default"].createElement(Pagination$1, {
    onPageChange: onPageChange,
    canPreviousPage: canPreviousPage,
    gotoPage: gotoPage,
    previousPage: previousPage,
    nextPage: nextPage,
    canNextPage: canNextPage,
    pageCount: pageCount,
    manualPagination: manualPagination,
    pageIndex: manualPagination ? controlledIndex - 1 : state.pageIndex,
    maxEntries: recordCount,
    paginationCount: paginationCount
  }));
};
DataList.propTypes = {
  /**
   * Data to show
   */
  data: PropTypes__default["default"].arrayOf(Object).isRequired,
  /**
   * Data configuration object
   */
  dataConfig: PropTypes__default["default"].arrayOf(Object).isRequired,
  /**
   * Number of records in the list
   */
  recordCount: PropTypes__default["default"].arrayOf(Number).isRequired,
  /**
   * Sorting options
   */
  sort: PropTypes__default["default"].arrayOf(Object),
  /**
   * Which component should render each item?
   */
  itemComponent: PropTypes__default["default"].func.isRequired,
  /**
   * Which aditional props should be passed?
   */
  itemProps: PropTypes__default["default"].object,
  /**
   * Optional page change handler
   */
  onPageChange: PropTypes__default["default"].func,
  /**
   * Indicates if the table is going to be controlled
   */
  manualPagination: PropTypes__default["default"].bool,
  /**
   * If control is manual for pagination, which page is it?
   */
  currentPage: PropTypes__default["default"].number
};
DataList.defaultProps = {
  sort: [],
  itemProps: {},
  onPageChange: undefined,
  manualPagination: false,
  currentPage: 1
};

const TextField = ({
  placeholder,
  label,
  type,
  help,
  helpClass,
  width,
  disabled,
  rightAction,
  iconLeft,
  iconRight,
  value,
  onChange,
  onClickRight,
  readOnly,
  ...args
}) => {
  const [active, setActive] = React.useState(!!value);
  const [overValue, setOverValue] = React.useState(value);
  React.useEffect(() => {
    setOverValue(value);
  }, [value]);
  React.useEffect(() => {
    if (overValue) {
      setActive(true);
    }
  }, [overValue]);
  const changeHandler = event => {
    setOverValue(event.target.value);
    onChange(event.target.value);
  };
  const focusHandler = () => {
    if (!overValue) {
      setActive(true);
    }
  };
  const blurHandler = () => {
    if (!overValue) {
      setActive(false);
    }
  };
  return /*#__PURE__*/React__default["default"].createElement("div", {
    "data-testid": "textfield",
    role: "presentation",
    className: ['ragnarok', 'textfield-outer', helpClass].join(' ')
  }, /*#__PURE__*/React__default["default"].createElement("div", _extends({
    label: label,
    placeholder: placeholder,
    value: overValue,
    role: "presentation",
    className: ['ragnarok', 'textfield-wrapper', `textfield-${type}`, disabled ? 'disabled' : '', active ? 'active' : 'not-active'].join(' '),
    style: {
      width
    }
  }, args), iconLeft && /*#__PURE__*/React__default["default"].createElement("i", {
    "data-testid": "icon",
    className: "icon-left",
    dangerouslySetInnerHTML: {
      __html: feather__default["default"].icons[iconLeft].toSvg({
        'stroke-width': 1.5,
        width: 24,
        height: 24
      })
    }
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "textfield-contents",
    style: {
      width
    }
  }, label && /*#__PURE__*/React__default["default"].createElement("span", _extends({}, args, {
    id: label,
    style: args.width ? {
      width: `calc(${args.width} - 64px)`
    } : {},
    className: ['ragnarok', 'textfield-label', helpClass].join(' ')
  }), label), /*#__PURE__*/React__default["default"].createElement("input", _extends({}, args, {
    "data-testid": "textfield-input",
    type: type,
    disabled: disabled || readOnly ? 1 : 0,
    placeholder: placeholder,
    value: overValue,
    onChange: event => changeHandler(event),
    onFocus: () => focusHandler(),
    onBlur: () => blurHandler(),
    style: {
      width: '100%'
    },
    className: ['ragnarok', 'textfield-input', disabled ? 'disabled' : ''].join(' ')
  }))), iconRight && /*#__PURE__*/React__default["default"].createElement("button", {
    type: "button",
    onClick: () => {
      onClickRight();
      if (!rightAction) setActive(false);
    },
    title: label,
    "aria-label": label,
    disabled: disabled ? 1 : 0
  }, /*#__PURE__*/React__default["default"].createElement("i", {
    "data-testid": "icon",
    className: ['icon-right', disabled ? 'disabled' : '', helpClass].join(' '),
    dangerouslySetInnerHTML: {
      __html: feather__default["default"].icons[iconRight].toSvg({
        'stroke-width': 1.5,
        width: 24,
        height: 24
      })
    }
  }))), help && help !== '' && /*#__PURE__*/React__default["default"].createElement("span", _extends({}, args, {
    className: ['ragnarok', 'textfield-help', 'text-caption', helpClass].join(' ')
  }), help));
};
TextField.propTypes = {
  /**
   * Placeholder text to show before input
   */
  placeholder: PropTypes__default["default"].string,
  /**
   * Descriptive input text
   */
  label: PropTypes__default["default"].string,
  /**
   * Descriptive input text
   */
  type: PropTypes__default["default"].oneOf(['text', 'search', 'tel', 'email', 'password']),
  /**
   * Help text
   */
  help: PropTypes__default["default"].any,
  /**
   * Help text
   */
  helpClass: PropTypes__default["default"].oneOf(['help', 'success', 'error', 'warning']),
  /**
   * Width of textfield
   */
  width: PropTypes__default["default"].string,
  /**
   * Should the input be disabled?
   */
  disabled: PropTypes__default["default"].bool,
  /**
   * Set this to True to not colapse on right click
   */
  rightAction: PropTypes__default["default"].bool,
  /**
   * Show icon on the left side?
   */
  iconLeft: PropTypes__default["default"].oneOf([false, 'activity', 'airplay', 'alert-circle', 'alert-octagon', 'alert-triangle', 'align-center', 'align-justify', 'align-left', 'align-right', 'anchor', 'aperture', 'archive', 'arrow-down', 'arrow-down-circle', 'arrow-down-left', 'arrow-down-right', 'arrow-left', 'arrow-left-circle', 'arrow-right', 'arrow-right-circle', 'arrow-up', 'arrow-up-circle', 'arrow-up-left', 'arrow-up-right', 'at-sign', 'award', 'bar-chart', 'bar-chart-2', 'battery', 'battery-charging', 'bell', 'bell-off', 'bluetooth', 'bold', 'book', 'bookmark', 'book-open', 'box', 'briefcase', 'calendar', 'camera', 'camera-off', 'cast', 'check', 'check-circle', 'check-square', 'chevron-down', 'chevron-left', 'chevron-right', 'chevrons-down', 'chevrons-left', 'chevrons-right', 'chevrons-up', 'chevron-up', 'chrome', 'circle', 'clipboard', 'clock', 'cloud', 'cloud-drizzle', 'cloud-lightning', 'cloud-off', 'cloud-rain', 'cloud-snow', 'code', 'codepen', 'codesandbox', 'coffee', 'columns', 'command', 'compass', 'copy', 'corner-down-left', 'corner-down-right', 'corner-left-down', 'corner-left-up', 'corner-right-down', 'corner-right-up', 'corner-up-left', 'corner-up-right', 'cpu', 'credit-card', 'crop', 'crosshair', 'database', 'delete', 'disc', 'divide', 'divide-circle', 'divide-square', 'dollar-sign', 'download', 'download-cloud', 'dribbble', 'droplet', 'edit', 'edit-2', 'edit-3', 'external-link', 'eye', 'eye-off', 'facebook', 'fast-forward', 'feather', 'figma', 'file', 'file-minus', 'file-plus', 'file-text', 'film', 'filter', 'flag', 'folder', 'folder-minus', 'folder-plus', 'framer', 'frown', 'gift', 'git-branch', 'git-commit', 'github', 'gitlab', 'git-merge', 'git-pull-request', 'globe', 'grid', 'hard-drive', 'hash', 'headphones', 'heart', 'help-circle', 'hexagon', 'home', 'image', 'inbox', 'info', 'instagram', 'italic', 'key', 'layers', 'layout', 'life-buoy', 'link', 'link-2', 'linkedin', 'list', 'loader', 'lock', 'log-in', 'log-out', 'mail', 'map', 'map-pin', 'maximize', 'maximize-2', 'meh', 'menu', 'message-circle', 'message-square', 'mic', 'mic-off', 'minimize', 'minimize-2', 'minus', 'minus-circle', 'minus-square', 'monitor', 'moon', 'more-horizontal', 'more-vertical', 'mouse-pointer', 'move', 'music', 'navigation', 'navigation-2', 'nomes.txt', 'octagon', 'package', 'paperclip', 'pause', 'pause-circle', 'pen-tool', 'percent', 'phone', 'phone-call', 'phone-forwarded', 'phone-incoming', 'phone-missed', 'phone-off', 'phone-outgoing', 'pie-chart', 'play', 'play-circle', 'plus', 'plus-circle', 'plus-square', 'pocket', 'power', 'printer', 'radio', 'refresh-ccw', 'refresh-cw', 'repeat', 'rewind', 'rotate-ccw', 'rotate-cw', 'rss', 'save', 'scissors', 'search', 'send', 'server', 'settings', 'share', 'share-2', 'shield', 'shield-off', 'shopping-bag', 'shopping-cart', 'shuffle', 'sidebar', 'skip-back', 'skip-forward', 'slack', 'slash', 'sliders', 'smartphone', 'smile', 'speaker', 'square', 'star', 'stop-circle', 'sun', 'sunrise', 'sunset', 'tablet', 'tag', 'target', 'terminal', 'thermometer', 'thumbs-down', 'thumbs-up', 'toggle-left', 'toggle-right', 'tool', 'trash', 'trash-2', 'trello', 'trending-down', 'trending-up', 'triangle', 'truck', 'tv', 'twitch', 'twitter', 'type', 'umbrella', 'underline', 'unlock', 'upload', 'upload-cloud', 'user', 'user-check', 'user-minus', 'user-plus', 'users', 'user-x', 'video', 'video-off', 'voicemail', 'volume', 'volume-1', 'volume-2', 'volume-x', 'watch', 'wifi', 'wifi-off', 'wind', 'x', 'x-circle', 'x-octagon', 'x-square', 'youtube', 'zap', 'zap-off', 'zoom-in', 'zoom-out']),
  /**
   * Show icon on the right side?
   */
  iconRight: PropTypes__default["default"].oneOf([false, 'activity', 'airplay', 'alert-circle', 'alert-octagon', 'alert-triangle', 'align-center', 'align-justify', 'align-left', 'align-right', 'anchor', 'aperture', 'archive', 'arrow-down', 'arrow-down-circle', 'arrow-down-left', 'arrow-down-right', 'arrow-left', 'arrow-left-circle', 'arrow-right', 'arrow-right-circle', 'arrow-up', 'arrow-up-circle', 'arrow-up-left', 'arrow-up-right', 'at-sign', 'award', 'bar-chart', 'bar-chart-2', 'battery', 'battery-charging', 'bell', 'bell-off', 'bluetooth', 'bold', 'book', 'bookmark', 'book-open', 'box', 'briefcase', 'calendar', 'camera', 'camera-off', 'cast', 'check', 'check-circle', 'check-square', 'chevron-down', 'chevron-left', 'chevron-right', 'chevrons-down', 'chevrons-left', 'chevrons-right', 'chevrons-up', 'chevron-up', 'chrome', 'circle', 'clipboard', 'clock', 'cloud', 'cloud-drizzle', 'cloud-lightning', 'cloud-off', 'cloud-rain', 'cloud-snow', 'code', 'codepen', 'codesandbox', 'coffee', 'columns', 'command', 'compass', 'copy', 'corner-down-left', 'corner-down-right', 'corner-left-down', 'corner-left-up', 'corner-right-down', 'corner-right-up', 'corner-up-left', 'corner-up-right', 'cpu', 'credit-card', 'crop', 'crosshair', 'database', 'delete', 'disc', 'divide', 'divide-circle', 'divide-square', 'dollar-sign', 'download', 'download-cloud', 'dribbble', 'droplet', 'edit', 'edit-2', 'edit-3', 'external-link', 'eye', 'eye-off', 'facebook', 'fast-forward', 'feather', 'figma', 'file', 'file-minus', 'file-plus', 'file-text', 'film', 'filter', 'flag', 'folder', 'folder-minus', 'folder-plus', 'framer', 'frown', 'gift', 'git-branch', 'git-commit', 'github', 'gitlab', 'git-merge', 'git-pull-request', 'globe', 'grid', 'hard-drive', 'hash', 'headphones', 'heart', 'help-circle', 'hexagon', 'home', 'image', 'inbox', 'info', 'instagram', 'italic', 'key', 'layers', 'layout', 'life-buoy', 'link', 'link-2', 'linkedin', 'list', 'loader', 'lock', 'log-in', 'log-out', 'mail', 'map', 'map-pin', 'maximize', 'maximize-2', 'meh', 'menu', 'message-circle', 'message-square', 'mic', 'mic-off', 'minimize', 'minimize-2', 'minus', 'minus-circle', 'minus-square', 'monitor', 'moon', 'more-horizontal', 'more-vertical', 'mouse-pointer', 'move', 'music', 'navigation', 'navigation-2', 'nomes.txt', 'octagon', 'package', 'paperclip', 'pause', 'pause-circle', 'pen-tool', 'percent', 'phone', 'phone-call', 'phone-forwarded', 'phone-incoming', 'phone-missed', 'phone-off', 'phone-outgoing', 'pie-chart', 'play', 'play-circle', 'plus', 'plus-circle', 'plus-square', 'pocket', 'power', 'printer', 'radio', 'refresh-ccw', 'refresh-cw', 'repeat', 'rewind', 'rotate-ccw', 'rotate-cw', 'rss', 'save', 'scissors', 'search', 'send', 'server', 'settings', 'share', 'share-2', 'shield', 'shield-off', 'shopping-bag', 'shopping-cart', 'shuffle', 'sidebar', 'skip-back', 'skip-forward', 'slack', 'slash', 'sliders', 'smartphone', 'smile', 'speaker', 'square', 'star', 'stop-circle', 'sun', 'sunrise', 'sunset', 'tablet', 'tag', 'target', 'terminal', 'thermometer', 'thumbs-down', 'thumbs-up', 'toggle-left', 'toggle-right', 'tool', 'trash', 'trash-2', 'trello', 'trending-down', 'trending-up', 'triangle', 'truck', 'tv', 'twitch', 'twitter', 'type', 'umbrella', 'underline', 'unlock', 'upload', 'upload-cloud', 'user', 'user-check', 'user-minus', 'user-plus', 'users', 'user-x', 'video', 'video-off', 'voicemail', 'volume', 'volume-1', 'volume-2', 'volume-x', 'watch', 'wifi', 'wifi-off', 'wind', 'x', 'x-circle', 'x-octagon', 'x-square', 'youtube', 'zap', 'zap-off', 'zoom-in', 'zoom-out']),
  /**
   * Inputed value
   */
  value: PropTypes__default["default"].string,
  /**
   * Optional click handler
   */
  onClickRight: PropTypes__default["default"].func
};
TextField.defaultProps = {
  placeholder: 'Placeholder',
  label: 'Label',
  type: 'text',
  help: '',
  helpClass: 'help',
  width: '220px',
  disabled: false,
  rightAction: false,
  iconLeft: false,
  iconRight: false,
  value: '',
  onClickRight: undefined
};

const Filter = ({
  globalFilter,
  setGlobalFilter
}) => {
  const [value, setValue] = React.useState(globalFilter);
  const onChange = reactTable.useAsyncDebounce(val => {
    setGlobalFilter(val || undefined);
  }, 200);
  return /*#__PURE__*/React__default["default"].createElement(TextField, {
    iconLeft: "search",
    label: "Pesquisar",
    value: value || '',
    width: "100%",
    onChange: e => {
      setValue(e);
      onChange(e);
    },
    placeholder: "Palavras, n\xFAmeros...",
    type: "search"
  });
};

/* eslint-disable max-len */
const Pagination = ({
  canNextPage,
  canPreviousPage,
  gotoPage,
  nextPage,
  previousPage,
  pageCount,
  pageIndex,
  maxEntries,
  paginationCount
}) => {
  const buildPages = (index, maxToShow = 3) => {
    const iterator = Array.from(Array(maxToShow), (x, idx) => index + idx);
    if (canPreviousPage && !canNextPage) {
      iterator[0] = index - 2;
      iterator[1] = index - 1;
      iterator[2] = index;
    }
    if (canPreviousPage && canNextPage) {
      iterator[0] = index - 1;
      iterator[1] = index;
      iterator[2] = index + 1;
    }
    if (!canPreviousPage && canNextPage) {
      iterator[0] = index;
      iterator[1] = index + 1;
      iterator[2] = index + 2;
    }
    return iterator;
  };
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "pagination-wrapper"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "pagination-label"
  }, `Mostrando ${pageIndex * paginationCount + 1} - ${(pageIndex + 1) * paginationCount} de ${maxEntries}`), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "pagination",
    "data-testid": "pagination"
  }, pageCount > 1 && /*#__PURE__*/React__default["default"].createElement("ul", null, /*#__PURE__*/React__default["default"].createElement("li", {
    className: ['page-item', 'page-prev', !canPreviousPage ? 'disabled' : undefined].join(' ')
  }, /*#__PURE__*/React__default["default"].createElement("button", {
    className: "page-button",
    type: "button",
    href: "#",
    disabled: !canPreviousPage,
    onClick: () => previousPage()
  }, /*#__PURE__*/React__default["default"].createElement(Icon, {
    icon: "chevron-left",
    size: 16
  }), /*#__PURE__*/React__default["default"].createElement("span", {
    className: "visually-hidden"
  }, "Previous"))), buildPages(pageIndex, 3).map(page => /*#__PURE__*/React__default["default"].createElement("li", {
    key: page,
    className: ['page-item', 'page-number', page === pageIndex ? 'disabled' : undefined].join(' ')
  }, /*#__PURE__*/React__default["default"].createElement("button", {
    className: "page-button",
    type: "button",
    onClick: page !== pageIndex ? () => gotoPage(page) : undefined
  }, page + 1, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "visually-hidden"
  }, page + 1)))).filter(Boolean), /*#__PURE__*/React__default["default"].createElement("li", {
    className: "page-item page-next",
    disabled: !canPreviousPage
  }, /*#__PURE__*/React__default["default"].createElement("button", {
    className: "page-button",
    type: "button",
    href: "#",
    disabled: !canNextPage,
    onClick: () => nextPage()
  }, /*#__PURE__*/React__default["default"].createElement(Icon, {
    icon: "chevron-right",
    size: 16
  }), /*#__PURE__*/React__default["default"].createElement("span", {
    className: "visually-hidden"
  }, "Next"))))));
};

/* eslint-disable no-nested-ternary */
const DataTable = ({
  data,
  dataConfig,
  // error,
  onFilterClick,
  sort,
  paginationCount = 10
}) => {
  // if (error || !data || data.length === 0) {
  //   return <span>ERRRROU!</span>;
  // }

  const columns = React__default["default"].useMemo(() => {
    const cols = [];
    dataConfig.map(item => cols.push({
      Header: item.label,
      accessor: item.value
    }));
    return cols;
  }, []);
  const tableData = React__default["default"].useMemo(() => data, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    setGlobalFilter,
    state,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage
  } = reactTable.useTable({
    columns,
    data: tableData,
    initialState: {
      // hiddenColumns: columnsHidden || [],
      sort
    }
  }, reactTable.useFilters, reactTable.useGlobalFilter, reactTable.useSortBy, reactTable.usePagination);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: ['ragnarok', 'datatable', 'table'].join(' '),
    "data-testid": "datatable"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "filter-wrapper"
  }, /*#__PURE__*/React__default["default"].createElement(Filter, {
    globalFilter: state.globalFilter,
    setGlobalFilter: setGlobalFilter
  }), /*#__PURE__*/React__default["default"].createElement(Button, {
    icon: "filter",
    label: "Filtros",
    onClick: onFilterClick,
    position: "left",
    type: "outlined"
  })), /*#__PURE__*/React__default["default"].createElement("table", getTableProps(), /*#__PURE__*/React__default["default"].createElement("thead", null, headerGroups.map(headerGroup => /*#__PURE__*/React__default["default"].createElement("tr", headerGroup.getHeaderGroupProps(), headerGroup.headers.map(column => /*#__PURE__*/React__default["default"].createElement("th", column.getHeaderProps(column.getSortByToggleProps()), /*#__PURE__*/React__default["default"].createElement("span", null, column.render('Header'), column.isSorted ? column.isSortedDesc ? /*#__PURE__*/React__default["default"].createElement(Icon, {
    className: "icon-order",
    icon: "arrow-down",
    size: 16
  }) : /*#__PURE__*/React__default["default"].createElement(Icon, {
    className: "icon-order",
    icon: "arrow-up",
    size: 16
  }) : /*#__PURE__*/React__default["default"].createElement(Icon, {
    className: "icon-order",
    icon: "chevron-down",
    size: 16
  }))))))), /*#__PURE__*/React__default["default"].createElement("tbody", getTableBodyProps(), page.map(row => {
    prepareRow(row);
    return /*#__PURE__*/React__default["default"].createElement("tr", row.getRowProps(), row.cells.map(cell => /*#__PURE__*/React__default["default"].createElement("td", cell.getCellProps(), cell.render('Cell'))));
  }))), /*#__PURE__*/React__default["default"].createElement(Pagination, {
    canPreviousPage: canPreviousPage,
    gotoPage: gotoPage,
    previousPage: previousPage,
    nextPage: nextPage,
    canNextPage: canNextPage,
    pageCount: pageCount,
    pageIndex: state.pageIndex,
    maxEntries: data && data.length,
    paginationCount: paginationCount
  }));
};
DataTable.propTypes = {
  /**
   * Data to show
   */
  data: PropTypes__default["default"].arrayOf(Object).isRequired,
  /**
   * Data configuration object
   */
  dataConfig: PropTypes__default["default"].arrayOf(Object).isRequired,
  /**
   * Sorting options
   */
  sort: PropTypes__default["default"].arrayOf(Object),
  // /**
  //  * How many Items in each page?
  //  */
  // paginationCount: PropTypes.oneOf([10, 25, 50, 100]),
  /**
   * Optional Filter Handler
   */
  onFilterClick: PropTypes__default["default"].func
};
DataTable.defaultProps = {
  sort: [],
  // paginationCount: 10,
  onFilterClick: undefined
};

var formatDistanceLocale$1 = {
  lessThanXSeconds: {
    one: 'menos de um segundo',
    other: 'menos de {{count}} segundos'
  },
  xSeconds: {
    one: '1 segundo',
    other: '{{count}} segundos'
  },
  halfAMinute: 'meio minuto',
  lessThanXMinutes: {
    one: 'menos de um minuto',
    other: 'menos de {{count}} minutos'
  },
  xMinutes: {
    one: '1 minuto',
    other: '{{count}} minutos'
  },
  aboutXHours: {
    one: 'cerca de 1 hora',
    other: 'cerca de {{count}} horas'
  },
  xHours: {
    one: '1 hora',
    other: '{{count}} horas'
  },
  xDays: {
    one: '1 dia',
    other: '{{count}} dias'
  },
  aboutXWeeks: {
    one: 'cerca de 1 semana',
    other: 'cerca de {{count}} semanas'
  },
  xWeeks: {
    one: '1 semana',
    other: '{{count}} semanas'
  },
  aboutXMonths: {
    one: 'cerca de 1 mês',
    other: 'cerca de {{count}} meses'
  },
  xMonths: {
    one: '1 mês',
    other: '{{count}} meses'
  },
  aboutXYears: {
    one: 'cerca de 1 ano',
    other: 'cerca de {{count}} anos'
  },
  xYears: {
    one: '1 ano',
    other: '{{count}} anos'
  },
  overXYears: {
    one: 'mais de 1 ano',
    other: 'mais de {{count}} anos'
  },
  almostXYears: {
    one: 'quase 1 ano',
    other: 'quase {{count}} anos'
  }
};

var formatDistance$2 = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale$1[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', String(count));
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'em ' + result;
    } else {
      return 'há ' + result;
    }
  }

  return result;
};

var formatDistance$3 = formatDistance$2;

function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

var dateFormats$1 = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: 'd MMM y',
  short: 'dd/MM/yyyy'
};
var timeFormats$1 = {
  full: 'HH:mm:ss zzzz',
  long: 'HH:mm:ss z',
  medium: 'HH:mm:ss',
  short: 'HH:mm'
};
var dateTimeFormats$1 = {
  full: "{{date}} 'às' {{time}}",
  long: "{{date}} 'às' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong$2 = {
  date: buildFormatLongFn({
    formats: dateFormats$1,
    defaultWidth: 'full'
  }),
  time: buildFormatLongFn({
    formats: timeFormats$1,
    defaultWidth: 'full'
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats$1,
    defaultWidth: 'full'
  })
};
var formatLong$3 = formatLong$2;

var formatRelativeLocale$1 = {
  lastWeek: function lastWeek(date) {
    var weekday = date.getUTCDay();
    var last = weekday === 0 || weekday === 6 ? 'último' : 'última';
    return "'" + last + "' eeee 'às' p";
  },
  yesterday: "'ontem às' p",
  today: "'hoje às' p",
  tomorrow: "'amanhã às' p",
  nextWeek: "eeee 'às' p",
  other: 'P'
};

var formatRelative$2 = function formatRelative(token, date, _baseDate, _options) {
  var format = formatRelativeLocale$1[token];

  if (typeof format === 'function') {
    return format(date);
  }

  return format;
};

var formatRelative$3 = formatRelative$2;

function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

var eraValues$1 = {
  narrow: ['AC', 'DC'],
  abbreviated: ['AC', 'DC'],
  wide: ['antes de cristo', 'depois de cristo']
};
var quarterValues$1 = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['T1', 'T2', 'T3', 'T4'],
  wide: ['1º trimestre', '2º trimestre', '3º trimestre', '4º trimestre']
};
var monthValues$1 = {
  narrow: ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'],
  abbreviated: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
  wide: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
};
var dayValues$1 = {
  narrow: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
  short: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'],
  abbreviated: ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'],
  wide: ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']
};
var dayPeriodValues$1 = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mn',
    noon: 'md',
    morning: 'manhã',
    afternoon: 'tarde',
    evening: 'tarde',
    night: 'noite'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'meia-noite',
    noon: 'meio-dia',
    morning: 'manhã',
    afternoon: 'tarde',
    evening: 'tarde',
    night: 'noite'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'meia-noite',
    noon: 'meio-dia',
    morning: 'manhã',
    afternoon: 'tarde',
    evening: 'tarde',
    night: 'noite'
  }
};
var formattingDayPeriodValues$1 = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mn',
    noon: 'md',
    morning: 'da manhã',
    afternoon: 'da tarde',
    evening: 'da tarde',
    night: 'da noite'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'meia-noite',
    noon: 'meio-dia',
    morning: 'da manhã',
    afternoon: 'da tarde',
    evening: 'da tarde',
    night: 'da noite'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'meia-noite',
    noon: 'meio-dia',
    morning: 'da manhã',
    afternoon: 'da tarde',
    evening: 'da tarde',
    night: 'da noite'
  }
};

var ordinalNumber$1 = function ordinalNumber(dirtyNumber, options) {
  var number = Number(dirtyNumber);

  if ((options === null || options === void 0 ? void 0 : options.unit) === 'week') {
    return number + 'ª';
  }

  return number + 'º';
};

var localize$2 = {
  ordinalNumber: ordinalNumber$1,
  era: buildLocalizeFn({
    values: eraValues$1,
    defaultWidth: 'wide'
  }),
  quarter: buildLocalizeFn({
    values: quarterValues$1,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues$1,
    defaultWidth: 'wide'
  }),
  day: buildLocalizeFn({
    values: dayValues$1,
    defaultWidth: 'wide'
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues$1,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues$1,
    defaultFormattingWidth: 'wide'
  })
};
var localize$3 = localize$2;

function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

var matchOrdinalNumberPattern$1 = /^(\d+)[ºªo]?/i;
var parseOrdinalNumberPattern$1 = /\d+/i;
var matchEraPatterns$1 = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
  wide: /^(antes de cristo|depois de cristo)/i
};
var parseEraPatterns$1 = {
  any: [/^ac/i, /^dc/i],
  wide: [/^antes de cristo/i, /^depois de cristo/i]
};
var matchQuarterPatterns$1 = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
};
var parseQuarterPatterns$1 = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns$1 = {
  narrow: /^[jfmajsond]/i,
  abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
  wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
};
var parseMonthPatterns$1 = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^fev/i, /^mar/i, /^abr/i, /^mai/i, /^jun/i, /^jul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dez/i]
};
var matchDayPatterns$1 = {
  narrow: /^(dom|[23456]ª?|s[aá]b)/i,
  short: /^(dom|[23456]ª?|s[aá]b)/i,
  abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
  wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
};
var parseDayPatterns$1 = {
  short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i]
};
var matchDayPeriodPatterns$1 = {
  narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
  any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
};
var parseDayPeriodPatterns$1 = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mn|^meia[-\s]noite/i,
    noon: /^md|^meio[-\s]dia/i,
    morning: /manhã/i,
    afternoon: /tarde/i,
    evening: /tarde/i,
    night: /noite/i
  }
};
var match$2 = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern$1,
    parsePattern: parseOrdinalNumberPattern$1,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns$1,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns$1,
    defaultParseWidth: 'any'
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns$1,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns$1,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns$1,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns$1,
    defaultParseWidth: 'any'
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns$1,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns$1,
    defaultParseWidth: 'any'
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns$1,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns$1,
    defaultParseWidth: 'any'
  })
};
var match$3 = match$2;

/**
 * @type {Locale}
 * @category Locales
 * @summary Portuguese locale (Brazil).
 * @language Portuguese
 * @iso-639-2 por
 * @author Lucas Duailibe [@duailibe]{@link https://github.com/duailibe}
 * @author Yago Carballo [@yagocarballo]{@link https://github.com/YagoCarballo}
 */

var locale$1 = {
  code: 'pt-BR',
  formatDistance: formatDistance$3,
  formatLong: formatLong$3,
  formatRelative: formatRelative$3,
  localize: localize$3,
  match: match$3,
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
var locale$2 = locale$1;

function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

function _typeof$1(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof$1(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var timestamp = toDate(dirtyDate).getTime();
  var amount = toInteger(dirtyAmount);
  return new Date(timestamp + amount);
}

var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}

/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/**
 * @name compareDesc
 * @category Common Helpers
 * @summary Compare the two dates reverse chronologically and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return -1 if the first date is after the second,
 * 1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989 reverse chronologically:
 * const result = compareDesc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> 1
 *
 * @example
 * // Sort the array of dates in reverse chronological order:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareDesc)
 * //=> [
 * //   Sun Jul 02 1995 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Wed Feb 11 1987 00:00:00
 * // ]
 */

function compareDesc(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff > 0) {
    return -1;
  } else if (diff < 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate$1(value) {
  requiredArgs(1, arguments);
  return value instanceof Date || _typeof(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  requiredArgs(1, arguments);

  if (!isDate$1(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = toDate(dirtyDate);
  return !isNaN(Number(date));
}

/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, -amount);
}

var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

function startOfUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

function getUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

function startOfUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getUTCISOWeekYear(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary);
  return date;
}

var MILLISECONDS_IN_WEEK$1 = 604800000;
function getUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
}

function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  requiredArgs(1, arguments);
  var defaultOptions = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, options);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  requiredArgs(1, arguments);
  var defaultOptions = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = getUTCWeekYear(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCWeek(firstWeek, options);
  return date;
}

var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters$2 = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return addLeadingZeros(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return addLeadingZeros(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return addLeadingZeros(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return addLeadingZeros(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};
var formatters$3 = formatters$2;

var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */
var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return formatters$3.y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = getUTCWeekYear(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = getUTCISOWeekYear(date); // Padding

    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return formatters$3.M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return addLeadingZeros(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = getUTCWeek(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = getUTCISOWeek(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return formatters$3.d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = getUTCDayOfYear(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return addLeadingZeros(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return addLeadingZeros(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return addLeadingZeros(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return formatters$3.h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return formatters$3.H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return formatters$3.m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return formatters$3.s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return formatters$3.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return addLeadingZeros(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

var formatters$1 = formatters;

var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};

var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};

var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
var longFormatters$1 = longFormatters;

var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

var formatDistance$1 = formatDistance;

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
var formatLong$1 = formatLong;

var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

var formatRelative$1 = formatRelative;

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
var localize$1 = localize;

var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
var match$1 = match;

/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: formatDistance$1,
  formatLong: formatLong$1,
  formatRelative: formatRelative$1,
  localize: localize$1,
  match: match$1,
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
var defaultLocale = locale;

// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;

  requiredArgs(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = getDefaultOptions();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : defaultLocale;
  var firstWeekContainsDate = toInteger((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var weekStartsOn = toInteger((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = toDate(dirtyDate);

  if (!isValid(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
  var utcDate = subMilliseconds(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = longFormatters$1[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = formatters$1[firstCharacter];

    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }

      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param {Date|Number} date - the date that should be after the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is after the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */

function isAfter(dirtyDate, dirtyDateToCompare) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var dateToCompare = toDate(dirtyDateToCompare);
  return date.getTime() > dateToCompare.getTime();
}

/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param {Date|Number} date - the date that should be before the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is before the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */

function isBefore(dirtyDate, dirtyDateToCompare) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var dateToCompare = toDate(dirtyDateToCompare);
  return date.getTime() < dateToCompare.getTime();
}

const THIS_YEAR = +new Date().getFullYear();

// 1 => January, 12 => December
const THIS_MONTH = +new Date().getMonth() + 1;
const WEEK_DAYS = {
  Sunday: 'D',
  Monday: 'S',
  Tuesday: 'T',
  Wednesday: 'Q',
  Thursday: 'Q',
  Friday: 'S',
  Saturday: 'S'
};
const CALENDAR_WEEKS = 6;

// Adds leading zeroes until length is reached
// zeroPad(5, 2) => '05'
const zeroPad = (value, length) => `${value}`.padStart(length, '0');

// (int) Number days in a month for a given year from 28 - 31
const getMonthDays = (month = THIS_MONTH, year = THIS_YEAR) => {
  const months30 = [4, 6, 9, 11];
  const leapYear = year % 4 === 0;
  return month === 2 ? leapYear ? 29 : 28 : months30.includes(month) ? 30 : 31;
};

// (int) First day of the month for a given year from 1 - 7
// 1 => Sunday, 7 => Saturday
const getMonthFirstDay = (month = THIS_MONTH, year = THIS_YEAR) => +new Date(`${year}-${zeroPad(month, 2)}-01`).getDay() + 1;
const isDate = date => {
  const isIt = Object.prototype.toString.call(date) === '[object Date]';
  const isValidDate = date && !Number.isNaN(date.valueOf());
  return isIt && isValidDate;
};
const isDateRange = dates => {
  if (!dates || typeof dates === 'undefined' || dates.length <= 1) return false;
  return dates.length > 1 && !dates.map(date => isDate(date)).includes(false);
};
const isSameMonth = (date, basedate = new Date()) => {
  if (!(isDate(date) && isDate(basedate))) return false;
  const basedateMonth = +basedate.getMonth() + 1;
  const basedateYear = basedate.getFullYear();
  const dateMonth = +date.getMonth() + 1;
  const dateYear = date.getFullYear();
  return +basedateMonth === +dateMonth && +basedateYear === +dateYear;
};
const isSameDay = (date, basedate = new Date()) => {
  if (!(isDate(date) && isDate(basedate))) return false;
  const basedateDate = basedate.getDate();
  const basedateMonth = +basedate.getMonth() + 1;
  const basedateYear = basedate.getFullYear();
  const dateDate = date.getDate();
  const dateMonth = +date.getMonth() + 1;
  const dateYear = date.getFullYear();
  return +basedateDate === +dateDate && +basedateMonth === +dateMonth && +basedateYear === +dateYear;
};
const isInRange = (dateFrom, dateTo, dateCheck) => {
  if (!isDate(dateFrom) && !isDate(dateTo)) {
    return false;
  }
  if (isSameDay(dateFrom, dateCheck) || isSameDay(dateTo, dateCheck)) {
    return true;
  }
  return isBefore(dateCheck, dateTo) && isAfter(dateCheck, dateFrom);
};
const getDateISO = (date = new Date()) => {
  if (!isDate(date)) return null;
  return [date.getFullYear(), zeroPad(+date.getMonth() + 1, 2), zeroPad(+date.getDate(), 2)].join('-');
};

// ({month, year}) Gets the month and year before the given month and year
// For example: getPreviousMonth(1, 2000) => {month: 12, year: 1999}
// while: getPreviousMonth(12, 2000) => {month: 11, year: 2000}
const getPreviousMonth = (month, year) => {
  const prevMonth = month > 1 ? month - 1 : 12;
  const prevMonthYear = month > 1 ? year : year - 1;
  return {
    month: prevMonth,
    year: prevMonthYear
  };
};

// ({month, year}) Gets the month and year after the given month and year
// For example: getNextMonth(1, 2000) => {month: 2, year: 2000}
// while: getNextMonth(12, 2000) => {month: 1, year: 2001}
const getNextMonth = (month, year) => {
  const nextMonth = month < 12 ? month + 1 : 1;
  const nextMonthYear = month < 12 ? year : year + 1;
  return {
    month: nextMonth,
    year: nextMonthYear
  };
};

/* Calendar builder for mont and year
 * Returns an array of the calendar dates each in [YYYY, MM, DD] format
 */
const Calendar = (month = THIS_MONTH, year = THIS_YEAR) => {
  // Get number of days in the month and the month's first day
  const monthDays = getMonthDays(month, year);
  const monthFirstDay = getMonthFirstDay(month, year);

  // Total of 42 days (6 weeks by default) to bedisplayed on the calendar
  const daysFromPrevMonth = monthFirstDay - 1;
  const daysFromNextMonth = CALENDAR_WEEKS * 7 - (daysFromPrevMonth + monthDays);

  // Get the previous and next months and years
  const {
    month: prevMonth,
    year: prevMonthYear
  } = getPreviousMonth(month, year);
  const {
    month: nextMonth,
    year: nextMonthYear
  } = getNextMonth(month, year);

  // Get number of days in previous month
  const prevMonthDays = getMonthDays(prevMonth, prevMonthYear);

  // Builds dates to be displayed from previous month
  const prevMonthDates = [...new Array(daysFromPrevMonth)].map((n, index) => {
    const day = index + 1 + (prevMonthDays - daysFromPrevMonth);
    return [prevMonthYear, zeroPad(prevMonth, 2), zeroPad(day, 2)];
  });

  // Builds dates to be displayed from current month
  const thisMonthDates = [...new Array(monthDays)].map((n, index) => {
    const day = index + 1;
    return [year, zeroPad(month, 2), zeroPad(day, 2)];
  });

  // Builds dates to be displayed from next month
  const nextMonthDates = [...new Array(daysFromNextMonth)].map((n, index) => {
    const day = index + 1;
    return [nextMonthYear, zeroPad(nextMonth, 2), zeroPad(day, 2)];
  });

  // Combines all dates from previous, current and next months
  return [...prevMonthDates, ...thisMonthDates, ...nextMonthDates];
};

const resolveStateFromDate = (date = null) => {
  const isDateObject = isDate(date);
  const parsedDate = isDateObject ? date : new Date();
  return {
    current: isDateObject ? date : null,
    month: +parsedDate.getMonth() + 1,
    year: parsedDate.getFullYear()
  };
};
const getCalendarDates = date => {
  const {
    current,
    month,
    year
  } = resolveStateFromDate(date);
  const calendarMonth = month || +current.getMonth() + 1;
  const calendarYear = year || current.getFullYear();
  return Calendar(calendarMonth, calendarYear);
};
const DatePicker = ({
  today,
  selected,
  range,
  value,
  placeholder,
  onDateChanged
}) => {
  const {
    current: preCurrent,
    month: preMonth,
    year: preYear
  } = resolveStateFromDate(selected);
  const [current, setCurrent] = React.useState(preCurrent);
  const [rangeSpan, setRangeSpan] = React.useState(isDateRange(selected) ? selected : []);
  const [lastRange, setLastRange] = React.useState(0);
  const [month, setMonth] = React.useState(preMonth);
  const [year, setYear] = React.useState(preYear);
  const [yearSelector, setYearSelector] = React.useState(false);
  const [calendarDates, setCalendarDates] = React.useState(getCalendarDates(isDateRange(selected) ? selected[0] : selected || today));
  const [showValue, setShowValue] = React.useState(value);
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    if (range) {
      setShowValue(rangeSpan.map(date => format(date, 'dd/MM/yyyy')).join(' - '));
    }
    if (!range) {
      setShowValue(current ? format(current, 'dd/MM/yyyy') : '');
    }
  }, [current, rangeSpan, setShowValue]);
  const setStates = preState => {
    setCurrent(preState.current || current);
    if (range) {
      setRangeSpan(preState.range || rangeSpan);
      setLastRange(lastRange === 0 ? 1 : 0);
    }
    setMonth(preState.month || month);
    setYear(preState.year || year);
    setCalendarDates(getCalendarDates(new Date(preState.year, preState.month - 1)));
  };
  const gotoDate = date => event => {
    if (event) {
      event.preventDefault();
    }
    const preRange = rangeSpan.length === 0 ? [date] : rangeSpan.length === 1 ? compareDesc(rangeSpan[0], date) === 1 ? [rangeSpan[0], date] : [date, rangeSpan[0]] : [date];
    setStates({
      range: preRange,
      ...resolveStateFromDate(date)
    });
    return onDateChanged(range ? rangeSpan : date);
  };
  const gotoPreviousMonth = () => setStates(getPreviousMonth(month, year));
  const gotoNextMonth = () => setStates(getNextMonth(month, year));
  const calendarDate = (date, index) => {
    const _date = new Date(date.join('-'));
    const isToday = isSameDay(_date, today);
    const isSelected = isDateRange(selected) ? isInRange(selected[0], selected[0], date) : current && isSameDay(_date, current);
    const inMonth = month && year && isSameMonth(_date, new Date([year, month, 1].join('-')));
    const args = {
      onClick: gotoDate(_date),
      onKeyPress: gotoDate(_date),
      title: date.toString()
    };
    return /*#__PURE__*/React__default["default"].createElement("div", {
      key: getDateISO(_date),
      index: index.toString(),
      className: ['bg', range && rangeSpan[0] && isSameDay(_date, rangeSpan[0]) ? 'first-range' : '', range && rangeSpan[1] && isSameDay(_date, rangeSpan[1]) ? 'last-range' : '', range && rangeSpan.length > 1 && isInRange(rangeSpan[0], rangeSpan[1], _date) ? 'range' : ''].join(' ')
    }, /*#__PURE__*/React__default["default"].createElement("div", _extends({
      role: "button",
      tabIndex: 0,
      className: ['ragnarok', 'calendar', 'cell', 'date', isSelected ? 'highlighted' : '', range && isInRange(rangeSpan[0], rangeSpan[1], _date) ? 'range' : '', range && rangeSpan[0] && isSameDay(_date, rangeSpan[0]) ? 'first-range' : '', range && rangeSpan[1] && isSameDay(_date, rangeSpan[1]) ? 'last-range' : '', isToday ? 'today' : '', 'day', inMonth ? 'inmonth' : 'disabled'].join(' ')
    }, args, {
      style: {
        gridColumn: `${index % 7 + 1} / span 1`,
        gridRow: `${Math.floor(index / 7) + 2} / span 1`
      }
    }), /*#__PURE__*/React__default["default"].createElement("div", {
      className: ['ragnarok', 'day-content'].join(' ')
    }, _date.getDate())));
  };
  const monthYearController = () => {
    const monthname = locale$2.localize.month(Math.max(0, Math.min(month - 1, 11)));
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: ['ragnarok', 'calendar', 'header'].join(' ')
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: ['ragnarok', 'calendar', 'month'].join(' ')
    }, monthname, ' ', /*#__PURE__*/React__default["default"].createElement("button", {
      type: "button",
      className: ['ragnarok', 'calendar', 'arrow', 'arrow-down', yearSelector ? 'open' : 'close'].join(' '),
      onClick: () => setYearSelector(!yearSelector),
      title: "Select Year"
    }, year, /*#__PURE__*/React__default["default"].createElement("i", {
      "data-testid": "previous",
      className: "icon-down",
      dangerouslySetInnerHTML: {
        __html: feather__default["default"].icons['chevron-down'].toSvg({
          'stroke-width': 1.5,
          width: 24,
          height: 24
        })
      }
    }))), /*#__PURE__*/React__default["default"].createElement("div", {
      className: ['ragnarok', 'calendar', 'controls'].join(' ')
    }, /*#__PURE__*/React__default["default"].createElement("button", {
      type: "button",
      className: ['ragnarok', 'calendar', 'arrow', 'arrow-left'].join(' '),
      onClick: gotoPreviousMonth,
      title: "Previous Month"
    }, /*#__PURE__*/React__default["default"].createElement("i", {
      "data-testid": "previous",
      className: "icon-left",
      dangerouslySetInnerHTML: {
        __html: feather__default["default"].icons['arrow-left-circle'].toSvg({
          'stroke-width': 1.5,
          width: 24,
          height: 24
        })
      }
    })), /*#__PURE__*/React__default["default"].createElement("button", {
      type: "button",
      className: ['ragnarok', 'calendar', 'arrow', 'arrow-right'].join(' '),
      onClick: gotoNextMonth,
      title: "Next Month"
    }, /*#__PURE__*/React__default["default"].createElement("i", {
      "data-testid": "previous",
      className: "icon-right",
      dangerouslySetInnerHTML: {
        __html: feather__default["default"].icons['arrow-right-circle'].toSvg({
          'stroke-width': 1.5,
          width: 24,
          height: 24
        })
      }
    }))));
  };
  const yearsBack = Array.from(Array(12), (x, index) => year - index - 1).reverse();
  const yearsForward = Array.from(Array(12), (x, index) => year + index + 1);
  const years = [...yearsBack, year, ...yearsForward];
  return /*#__PURE__*/React__default["default"].createElement("div", {
    "data-testid": "datepicker",
    className: ['ragnarok', 'calendar', show ? 'open' : 'close'].join(' ')
  }, /*#__PURE__*/React__default["default"].createElement(TextField, {
    iconLeft: "calendar",
    iconRight: "chevron-down",
    label: "DatePicker",
    onChange: x => setShowValue(format(x, 'dd/MM/yyyy')),
    onClick: () => setShow(!show),
    onClickRight: () => setShow(!show),
    value: showValue,
    readOnly: true,
    placeholder: placeholder,
    style: {
      width: '368px',
      maxWidth: '368px'
    }
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: ['ragnarok', 'container', show ? 'open' : 'close'].join(' ')
  }, monthYearController(), /*#__PURE__*/React__default["default"].createElement("div", {
    className: ['ragnarok', 'calendar', 'years', yearSelector ? 'open' : 'close'].join(' ')
  }, years.map((x, index) => /*#__PURE__*/React__default["default"].createElement("span", {
    key: index.toString(),
    role: "button",
    onKeyPress: () => {},
    tabIndex: 0,
    onClick: () => {
      setStates({
        month,
        year: x
      });
      setYearSelector(false);
    },
    className: ['year', x.toString() === year.toString() ? 'selected' : ''].join(' ')
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "inner"
  }, x)))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: ['ragnarok', 'calendar', 'grid'].join(' ')
  }, /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, Object.keys(WEEK_DAYS).map((day, index) => /*#__PURE__*/React__default["default"].createElement("div", {
    key: index.toString(),
    className: ['ragnarok', 'calendar', 'cell', 'day'].join(' '),
    style: {
      gridColumn: `${index % 7 + 1} / span 1`
    },
    index: index
  }, WEEK_DAYS[day].toUpperCase()))), /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, calendarDates.map((date, index) => calendarDate(date, index))))));
};
DatePicker.propTypes = {
  /**
   * What day is today?
   */
  today: PropTypes__default["default"].instanceOf(Date),
  /**
   * Should it start with a selected day or range:
   */
  selected: PropTypes__default["default"].oneOfType([PropTypes__default["default"].instanceOf(Date), PropTypes__default["default"].array]),
  /**
   * Range of dates instead of a single date
   */
  range: PropTypes__default["default"].bool,
  /**
   * Value to show on picker
   */
  value: PropTypes__default["default"].string,
  /**
   * Value to show while nothing is selected
   */
  placeholder: PropTypes__default["default"].string,
  /**
   * Optional change handler
   */
  onDateChanged: PropTypes__default["default"].func
};
DatePicker.defaultProps = {
  today: new Date(),
  selected: undefined,
  range: false,
  placeholder: 'Select a Date',
  value: '',
  onDateChanged: undefined
};

const Dialog = ({
  children,
  actions,
  overlay,
  width,
  open
}) => /*#__PURE__*/React__default["default"].createElement("div", {
  className: ['ragnarok', 'dialog-wrapper', open ? 'open' : 'close'].join(' ')
}, overlay && /*#__PURE__*/React__default["default"].createElement("div", {
  "data-testid": "overlay",
  className: ['ragnarok', 'overlay'].join(' ')
}), /*#__PURE__*/React__default["default"].createElement("div", {
  "data-testid": "dialog",
  className: ['ragnarok', 'dialog'].join(' '),
  style: {
    width
  }
}, children, actions.length > 0 && /*#__PURE__*/React__default["default"].createElement("div", {
  className: "actions"
}, actions)));
Dialog.propTypes = {
  /**
   * Dialog contents
   */
  children: PropTypes__default["default"].node.isRequired,
  /**
   * Dialog contents
   */
  actions: PropTypes__default["default"].arrayOf(Button),
  /**
   * An overlay should de shown?
   */
  overlay: PropTypes__default["default"].bool,
  /**
   * Dialog's width
   */
  width: PropTypes__default["default"].string,
  /**
   * Show/hide handler
   */
  open: PropTypes__default["default"].bool
};
Dialog.defaultProps = {
  actions: [],
  overlay: false,
  width: '410px',
  open: false
};

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$2=60103,c$1=60106,d$1=60107,e$1=60108,f$1=60114,g$2=60109,h$1=60110,k$2=60112,l$1=60113,m$1=60120,n$1=60115,p$1=60116,q$2=60121,r$1=60122,u=60117,v$2=60129,w$2=60131;
if("function"===typeof Symbol&&Symbol.for){var x$2=Symbol.for;b$2=x$2("react.element");c$1=x$2("react.portal");d$1=x$2("react.fragment");e$1=x$2("react.strict_mode");f$1=x$2("react.profiler");g$2=x$2("react.provider");h$1=x$2("react.context");k$2=x$2("react.forward_ref");l$1=x$2("react.suspense");m$1=x$2("react.suspense_list");n$1=x$2("react.memo");p$1=x$2("react.lazy");q$2=x$2("react.block");r$1=x$2("react.server.block");u=x$2("react.fundamental");v$2=x$2("react.debug_trace_mode");w$2=x$2("react.legacy_hidden");}
function y$2(a){if("object"===typeof a&&null!==a){var t=a.$$typeof;switch(t){case b$2:switch(a=a.type,a){case d$1:case f$1:case e$1:case l$1:case m$1:return a;default:switch(a=a&&a.$$typeof,a){case h$1:case k$2:case p$1:case n$1:case g$2:return a;default:return t}}case c$1:return t}}}var z$2=g$2,A$1=b$2,B$1=k$2,C$1=d$1,D$1=p$1,E$1=n$1,F$1=c$1,G$1=f$1,H$1=e$1,I$1=l$1;var ContextConsumer$1=h$1;var ContextProvider$1=z$2;var Element$1=A$1;var ForwardRef$1=B$1;var Fragment$1=C$1;var Lazy$1=D$1;var Memo$1=E$1;var Portal$1=F$1;var Profiler$1=G$1;var StrictMode$1=H$1;
var Suspense$1=I$1;var isAsyncMode$1=function(){return !1};var isConcurrentMode$1=function(){return !1};var isContextConsumer$1=function(a){return y$2(a)===h$1};var isContextProvider$1=function(a){return y$2(a)===g$2};var isElement$1=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===b$2};var isForwardRef$1=function(a){return y$2(a)===k$2};var isFragment$1=function(a){return y$2(a)===d$1};var isLazy$1=function(a){return y$2(a)===p$1};var isMemo$1=function(a){return y$2(a)===n$1};
var isPortal$1=function(a){return y$2(a)===c$1};var isProfiler$1=function(a){return y$2(a)===f$1};var isStrictMode$1=function(a){return y$2(a)===e$1};var isSuspense$1=function(a){return y$2(a)===l$1};var isValidElementType$1=function(a){return "string"===typeof a||"function"===typeof a||a===d$1||a===f$1||a===v$2||a===e$1||a===l$1||a===m$1||a===w$2||"object"===typeof a&&null!==a&&(a.$$typeof===p$1||a.$$typeof===n$1||a.$$typeof===g$2||a.$$typeof===h$1||a.$$typeof===k$2||a.$$typeof===u||a.$$typeof===q$2||a[0]===r$1)?!0:!1};
var typeOf$1=y$2;

var reactIs_production_min$1 = {
	ContextConsumer: ContextConsumer$1,
	ContextProvider: ContextProvider$1,
	Element: Element$1,
	ForwardRef: ForwardRef$1,
	Fragment: Fragment$1,
	Lazy: Lazy$1,
	Memo: Memo$1,
	Portal: Portal$1,
	Profiler: Profiler$1,
	StrictMode: StrictMode$1,
	Suspense: Suspense$1,
	isAsyncMode: isAsyncMode$1,
	isConcurrentMode: isConcurrentMode$1,
	isContextConsumer: isContextConsumer$1,
	isContextProvider: isContextProvider$1,
	isElement: isElement$1,
	isForwardRef: isForwardRef$1,
	isFragment: isFragment$1,
	isLazy: isLazy$1,
	isMemo: isMemo$1,
	isPortal: isPortal$1,
	isProfiler: isProfiler$1,
	isStrictMode: isStrictMode$1,
	isSuspense: isSuspense$1,
	isValidElementType: isValidElementType$1,
	typeOf: typeOf$1
};

/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var reactIs_development$1 = createCommonjsModule(function (module, exports) {

if (process.env.NODE_ENV !== "production") {
  (function() {

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  symbolFor('react.scope');
  symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});

var reactIs$1 = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min$1;
} else {
  module.exports = reactIs_development$1;
}
});

function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1="function"===typeof Symbol&&Symbol.for,c=b$1?Symbol.for("react.element"):60103,d=b$1?Symbol.for("react.portal"):60106,e=b$1?Symbol.for("react.fragment"):60107,f=b$1?Symbol.for("react.strict_mode"):60108,g$1=b$1?Symbol.for("react.profiler"):60114,h=b$1?Symbol.for("react.provider"):60109,k$1=b$1?Symbol.for("react.context"):60110,l=b$1?Symbol.for("react.async_mode"):60111,m=b$1?Symbol.for("react.concurrent_mode"):60111,n=b$1?Symbol.for("react.forward_ref"):60112,p=b$1?Symbol.for("react.suspense"):60113,q$1=b$1?
Symbol.for("react.suspense_list"):60120,r=b$1?Symbol.for("react.memo"):60115,t=b$1?Symbol.for("react.lazy"):60116,v$1=b$1?Symbol.for("react.block"):60121,w$1=b$1?Symbol.for("react.fundamental"):60117,x$1=b$1?Symbol.for("react.responder"):60118,y$1=b$1?Symbol.for("react.scope"):60119;
function z$1(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g$1:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k$1:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z$1(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k$1;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g$1;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z$1(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z$1(a)===k$1};var isContextProvider=function(a){return z$1(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z$1(a)===n};var isFragment=function(a){return z$1(a)===e};var isLazy=function(a){return z$1(a)===t};
var isMemo=function(a){return z$1(a)===r};var isPortal=function(a){return z$1(a)===d};var isProfiler=function(a){return z$1(a)===g$1};var isStrictMode=function(a){return z$1(a)===f};var isSuspense=function(a){return z$1(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g$1||a===f||a===p||a===q$1||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k$1||a.$$typeof===n||a.$$typeof===w$1||a.$$typeof===x$1||a.$$typeof===y$1||a.$$typeof===v$1)};var typeOf=z$1;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

function y(){return (y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);}return e}).apply(this,arguments)}var v=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},g=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!reactIs$1.typeOf(t)},S=Object.freeze([]),w=Object.freeze({});function E(e){return "function"==typeof e}function b(e){return "production"!==process.env.NODE_ENV&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function _(e){return e&&"string"==typeof e.styledComponentId}var N="undefined"!=typeof process&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",C="undefined"!=typeof window&&"HTMLElement"in window,I=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!==process.env.NODE_ENV),O="production"!==process.env.NODE_ENV?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"}:{};function R(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t);})),e}function D(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw "production"===process.env.NODE_ENV?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):"")):new Error(R.apply(void 0,[O[e]].concat(n)).trim())}var j=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e;}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&D(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0;}for(var i=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++);},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n);}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+=this.tag.getRule(s)+"/*!sc*/\n";return t},e}(),T=new Map,x=new Map,k=1,V=function(e){if(T.has(e))return T.get(e);for(;x.has(k);)k++;var t=k++;return "production"!==process.env.NODE_ENV&&((0|t)<0||t>1<<30)&&D(16,""+t),T.set(e,t),x.set(t,e),t},z=function(e){return x.get(e)},B=function(e,t){t>=k&&(k=t+1),T.set(e,t),x.set(t,e);},M="style["+N+'][data-styled-version="5.3.6"]',G=new RegExp("^"+N+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),L=function(e,t,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r);},F=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),r=[],o=0,s=n.length;o<s;o++){var i=n[o].trim();if(i){var a=i.match(G);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(B(u,c),L(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0;}else r.push(i);}}},Y=function(){return "undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null},q=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(N))return r}}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(N,"active"),r.setAttribute("data-styled-version","5.3.6");var i=Y();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},H=function(){function e(e){var t=this.element=q(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}D(17);}(t),this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return !1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--;},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),$=function(){function e(e){var t=this.element=q(e);this.nodes=t.childNodes,this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return !1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--;},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),W=function(){function e(e){this.rules=[],this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--;},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),U=C,J={isServer:!C,useCSSOMInjection:!I},X=function(){function e(e,t,n){void 0===e&&(e=w),void 0===t&&(t={}),this.options=y({},J,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&C&&U&&(U=!1,function(e){for(var t=document.querySelectorAll(M),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(N)&&(F(e,o),o.parentNode&&o.parentNode.removeChild(o));}}(this));}e.registerId=function(e){return V(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(y({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new W(o):r?new H(o):new $(o),new j(e)));var e,t,n,r,o;},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(V(e),this.names.has(e))this.names.get(e).add(t);else {var n=new Set;n.add(t),this.names.set(e,n);}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(V(e),n);},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear();},t.clearRules=function(e){this.getTag().clearGroup(V(e)),this.clearNames(e);},t.clearTag=function(){this.tag=void 0;},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var s=z(o);if(void 0!==s){var i=e.names.get(s),a=t.getGroup(o);if(i&&a&&i.size){var c=N+".g"+o+'[id="'+s+'"]',u="";void 0!==i&&i.forEach((function(e){e.length>0&&(u+=e+",");})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n';}}}return r}(this)},e}(),Z=/(a)(d)/gi,K=function(e){return String.fromCharCode(e+(e>25?39:97))};function Q(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=K(t%52)+n;return (K(t%52)+n).replace(Z,"$1-$2")}var ee=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},te=function(e){return ee(5381,e)};function ne(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(E(n)&&!_(n))return !1}return !0}var re=te("5.3.6"),oe=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic="production"===process.env.NODE_ENV&&(void 0===n||n.isStatic)&&ne(e),this.componentId=t,this.baseHash=ee(re,t),this.baseStyle=n,X.registerId(t);}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else {var s=_e(this.rules,e,t,n).join(""),i=Q(ee(this.baseHash,s)>>>0);if(!t.hasNameForId(r,i)){var a=n(s,"."+i,void 0,r);t.insertRules(r,i,a);}o.push(i),this.staticRulesId=i;}else {for(var c=this.rules.length,u=ee(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h,"production"!==process.env.NODE_ENV&&(u=ee(u,h+d));else if(h){var p=_e(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=ee(u,f+d),l+=f;}}if(l){var m=Q(u>>>0);if(!t.hasNameForId(r,m)){var y=n(l,"."+m,void 0,r);t.insertRules(r,m,y);}o.push(m);}}return o.join(" ")},e}(),se=/^\s*\/\/.*$/gm,ie=[":","[",".","#"];function ae(e){var t,n,r,o,s=void 0===e?w:e,i=s.options,a=void 0===i?w:i,c=s.plugins,u=void 0===c?S:c,l=new stylis_min(a),d=[],p=function(e){function t(t){if(t)try{e(t+"}");}catch(e){}}return function(n,r,o,s,i,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t);}}}((function(e){d.push(e);})),f=function(e,r,s){return 0===r&&-1!==ie.indexOf(s[n.length])||s.match(o)?e:"."+t};function m(e,s,i,a){void 0===a&&(a="&");var c=e.replace(se,""),u=s&&i?i+" "+s+" { "+c+" }":c;return t=a,n=s,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(i||!s?"":s,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f));},p,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||D(15),ee(e,t.name)}),5381).toString():"",m}var ce=React__default["default"].createContext();ce.Consumer;var le=React__default["default"].createContext(),de=(le.Consumer,new X),he=ae();function pe(){return React.useContext(ce)||de}function fe(){return React.useContext(le)||he}var ye=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=he);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"));},this.toString=function(){return D(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t;}return e.prototype.getName=function(e){return void 0===e&&(e=he),this.name+e.hash},e}(),ve=/([A-Z])/,ge=/([A-Z])/g,Se=/^ms-/,we=function(e){return "-"+e.toLowerCase()};function Ee(e){return ve.test(e)?e.replace(ge,we).replace(Se,"-ms-"):e}var be=function(e){return null==e||!1===e||""===e};function _e(e,n,r,o){if(Array.isArray(e)){for(var s,i=[],a=0,c=e.length;a<c;a+=1)""!==(s=_e(e[a],n,r,o))&&(Array.isArray(s)?i.push.apply(i,s):i.push(s));return i}if(be(e))return "";if(_(e))return "."+e.styledComponentId;if(E(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return "production"!==process.env.NODE_ENV&&reactIs$1.isElement(u)&&console.warn(b(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),_e(u,n,r,o)}var l;return e instanceof ye?r?(e.inject(r,o),e.getName(o)):e:g(e)?function e(t,n){var r,o,s=[];for(var i in t)t.hasOwnProperty(i)&&!be(t[i])&&(Array.isArray(t[i])&&t[i].isCss||E(t[i])?s.push(Ee(i)+":",t[i],";"):g(t[i])?s.push.apply(s,e(t[i],i)):s.push(Ee(i)+": "+(r=i,null==(o=t[i])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in unitlessKeys?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(s,["}"]):s}(e):e.toString()}var Ne=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ae(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return E(e)||g(e)?Ne(_e(v(S,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ne(_e(v(e,n)))}var Ce=/invalid hook call/i,Ie=new Set,Pe=function(e,t){if("production"!==process.env.NODE_ENV){var n="The component "+e+(t?' with the id of "'+t+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",r=console.error;try{var o=!0;console.error=function(e){if(Ce.test(e))o=!1,Ie.delete(n);else {for(var t=arguments.length,s=new Array(t>1?t-1:0),i=1;i<t;i++)s[i-1]=arguments[i];r.apply(void 0,[e].concat(s));}},React.useRef(),o&&!Ie.has(n)&&(console.warn(n),Ie.add(n));}catch(e){Ce.test(e.message)&&Ie.delete(n);}finally{console.error=r;}}},Oe=function(e,t,n){return void 0===n&&(n=w),e.theme!==n.theme&&e.theme||t||n.theme},Re=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,De=/(^-|-$)/g;function je(e){return e.replace(Re,"-").replace(De,"")}var Te=function(e){return Q(te(e)>>>0)};function xe(e){return "string"==typeof e&&("production"===process.env.NODE_ENV||e.charAt(0)===e.charAt(0).toLowerCase())}var ke=function(e){return "function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Ve=function(e){return "__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function ze(e,t,n){var r=e[n];ke(t)&&ke(r)?Be(r,t):e[n]=t;}function Be(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,s=n;o<s.length;o++){var i=s[o];if(ke(i))for(var a in i)Ve(a)&&ze(e,i[a],a);}return e}var Me=React__default["default"].createContext();Me.Consumer;var Fe={};function Ye(e,t,n){var o=_(e),i=!xe(e),a=t.attrs,c=void 0===a?S:a,d=t.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":je(e);Fe[n]=(Fe[n]||0)+1;var r=n+"-"+Te("5.3.6"+n+Fe[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):d,p=t.displayName,v=void 0===p?function(e){return xe(e)?"styled."+e:"Styled("+b(e)+")"}(e):p,g=t.displayName&&t.componentId?je(t.displayName)+"-"+t.componentId:t.componentId||h,N=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,A=t.shouldForwardProp;o&&e.shouldForwardProp&&(A=t.shouldForwardProp?function(n,r,o){return e.shouldForwardProp(n,r,o)&&t.shouldForwardProp(n,r,o)}:e.shouldForwardProp);var C,I=new oe(n,g,o?e.componentStyle:void 0),P=I.isStatic&&0===c.length,O=function(e,t){return function(e,t,n,r){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,p=e.target;"production"!==process.env.NODE_ENV&&React.useDebugValue(h);var m=function(e,t,n){void 0===e&&(e=w);var r=y({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,s,i=e;for(t in E(i)&&(i=i(r)),i)r[t]=o[t]="className"===t?(n=o[t],s=i[t],n&&s?n+" "+s:n||s):i[t];})),[r,o]}(Oe(t,React.useContext(Me),a)||w,t,o),v=m[0],g=m[1],S=function(e,t,n,r){var o=pe(),s=fe(),i=t?e.generateAndInjectStyles(w,o,s):e.generateAndInjectStyles(n,o,s);return "production"!==process.env.NODE_ENV&&React.useDebugValue(i),"production"!==process.env.NODE_ENV&&!t&&r&&r(i),i}(i,r,v,"production"!==process.env.NODE_ENV?e.warnTooManyClasses:void 0),b=n,_=g.$as||t.$as||g.as||t.as||p,N=xe(_),A=g!==t?y({},t,{},g):t,C={};for(var I in A)"$"!==I[0]&&"as"!==I&&("forwardedAs"===I?C.as=A[I]:(d?d(I,isPropValid,_):!N||isPropValid(I))&&(C[I]=A[I]));return t.style&&g.style!==t.style&&(C.style=y({},t.style,{},g.style)),C.className=Array.prototype.concat(c,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),C.ref=b,React.createElement(_,C)}(C,e,t,P)};return O.displayName=v,(C=React__default["default"].forwardRef(O)).attrs=N,C.componentStyle=I,C.displayName=v,C.shouldForwardProp=A,C.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):S,C.styledComponentId=g,C.target=o?e.target:e,C.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return {};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),s=r&&r+"-"+(xe(e)?e:je(b(e)));return Ye(e,y({},o,{attrs:N,componentId:s}),n)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?Be({},e.defaultProps,t):t;}}),"production"!==process.env.NODE_ENV&&(Pe(v,g),C.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var s=t?' with the id of "'+t+'"':"";console.warn("Over 200 classes were generated for component "+e+s+".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={};}}}(v,g)),C.toString=function(){return "."+C.styledComponentId},i&&hoistNonReactStatics_cjs(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var qe=function(e){return function e(t,r,o){if(void 0===o&&(o=w),!reactIs$1.isValidElementType(r))return D(1,String(r));var s=function(){return t(r,o,Ae.apply(void 0,arguments))};return s.withConfig=function(n){return e(t,r,y({},o,{},n))},s.attrs=function(n){return e(t,r,y({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},s}(Ye,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){qe[e]=qe(e);}));function We(e){"production"!==process.env.NODE_ENV&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Ae.apply(void 0,[e].concat(n)).join(""),s=Te(o);return new ye(s,o)}"production"!==process.env.NODE_ENV&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"),"production"!==process.env.NODE_ENV&&"test"!==process.env.NODE_ENV&&"undefined"!=typeof window&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,1===window["__styled-components-init__"]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window["__styled-components-init__"]+=1);var styled = qe;

const StyledGridItem = styled.div.attrs({
  className: 'grid-item'
})`
  min-height: 10px;
`;
const GridItem = args => {
  var _args$size, _args$size2, _args$size3, _args$size4;
  const sm = args !== null && args !== void 0 && (_args$size = args.size) !== null && _args$size !== void 0 && _args$size.sm ? args.size.sm : 1;
  const md = args !== null && args !== void 0 && (_args$size2 = args.size) !== null && _args$size2 !== void 0 && _args$size2.md ? args.size.md : sm;
  const lg = args !== null && args !== void 0 && (_args$size3 = args.size) !== null && _args$size3 !== void 0 && _args$size3.lg ? args.size.lg : md;
  const xl = args !== null && args !== void 0 && (_args$size4 = args.size) !== null && _args$size4 !== void 0 && _args$size4.xl ? args.size.xl : lg;
  return /*#__PURE__*/React__default["default"].createElement(StyledGridItem, _extends({
    "data-sm": sm,
    "data-md": md,
    "data-lg": lg,
    "data-xl": xl
  }, args), args.children);
};
GridItem.propTypes = {
  /**
   * How big should the GridItem be?
   */
  size: PropTypes__default["default"].object,
  /**
   * GridItem contents
   */
  children: PropTypes__default["default"].any
};
GridItem.defaultProps = {
  size: {
    sm: 1
  },
  children: []
};

const Grid = ({
  sidebar,
  children
}) => {
  const sidebarChildren = children && children.map((child, idx) => {
    if ( /*#__PURE__*/React__default["default"].isValidElement(child) && child.type !== GridItem) {
      return /*#__PURE__*/React__default["default"].cloneElement(child, {
        key: idx.toString()
      });
    }
    return false;
  }).filter(Boolean);
  const itemsChildren = children && children.map((child, idx) => {
    if ( /*#__PURE__*/React__default["default"].isValidElement(child) && child.type === GridItem) {
      return /*#__PURE__*/React__default["default"].cloneElement(child, {
        key: idx.toString()
      });
    }
    return false;
  }).filter(Boolean);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    "data-testid": "grid",
    className: `grid-wrapper ${sidebar ? 'with-sidebar' : ''}`
  }, sidebar && sidebarChildren, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "grid-container"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: sidebar ? 'grid grid-system with-sidebar' : ' grid grid-system'
  }, itemsChildren)));
};
Grid.propTypes = {
  /**
   * Sidebar available?
   */
  sidebar: PropTypes__default["default"].bool,
  /**
   * Grid contents
   */
  children: PropTypes__default["default"].node.isRequired
};
Grid.defaultProps = {
  sidebar: false
};

const GridSidebar = ({
  children,
  ...args
}) => /*#__PURE__*/React__default["default"].createElement("div", _extends({
  className: "grid-sidebar"
}, args), children);
GridSidebar.propTypes = {
  /**
   * Sidebar contents
   */
  children: PropTypes__default["default"].any
};
GridSidebar.defaultProps = {
  children: []
};

const Heading = ({
  size,
  allcaps,
  label,
  children,
  className
}) => {
  switch (size) {
    case 'display':
      return /*#__PURE__*/React__default["default"].createElement("h1", {
        "data-testid": "heading",
        className: ['ragnarok', 'heading', 'text-display', allcaps ? 'text-decoration-allcaps' : '', className].join(' ')
      }, children || label);
    case 'xl':
      return /*#__PURE__*/React__default["default"].createElement("h2", {
        "data-testid": "heading",
        className: ['ragnarok', 'heading', 'text-heading-xl', allcaps ? 'text-decoration-allcaps' : '', className].join(' ')
      }, children || label);
    case 'lg':
      return /*#__PURE__*/React__default["default"].createElement("h3", {
        "data-testid": "heading",
        className: ['ragnarok', 'heading', 'text-heading-lg', allcaps ? 'text-decoration-allcaps' : '', className].join(' ')
      }, children || label);
    case 'md':
      return /*#__PURE__*/React__default["default"].createElement("h4", {
        "data-testid": "heading",
        className: ['ragnarok', 'heading', 'text-heading-md', allcaps ? 'text-decoration-allcaps' : '', className].join(' ')
      }, children || label);
    case 'sm':
      return /*#__PURE__*/React__default["default"].createElement("h4", {
        "data-testid": "heading",
        className: ['ragnarok', 'heading', 'text-heading-sm', allcaps ? 'text-decoration-allcaps' : '', className].join(' ')
      }, children || label);
    default:
      return /*#__PURE__*/React__default["default"].createElement("h1", {
        "data-testid": "heading",
        className: ['ragnarok', 'heading', 'text-display', allcaps ? 'text-decoration-allcaps' : '', className].join(' ')
      }, children || label);
  }
};
Heading.propTypes = {
  /**
   * How big should the heading be?
   */
  size: PropTypes__default["default"].oneOf(['display', 'xl', 'lg', 'md', 'sm']),
  /**
   * Should it be uppercase?
   */
  allcaps: PropTypes__default["default"].bool,
  /**
   * Heading contents
   */
  label: PropTypes__default["default"].string
};
Heading.defaultProps = {
  size: 'display',
  allcaps: false,
  label: 'Lorem Ipsum Dolor Sit Amet'
};

const ListItem = ({
  children,
  active,
  trailingIcon,
  onClick,
  onRightClick,
  id,
  className
}) => /*#__PURE__*/React__default["default"].createElement("li", {
  role: "menuitem",
  key: id,
  id: id,
  tabIndex: -1,
  onClick: onClick,
  onKeyPress: onClick,
  className: ['ragnarok', 'list-item', active ? 'active' : undefined, className].join(' '),
  style: onClick ? {
    cursor: 'pointer'
  } : {}
}, children, trailingIcon && /*#__PURE__*/React__default["default"].createElement("span", {
  role: "button",
  tabIndex: 0,
  className: "trailing-icon",
  onClick: onRightClick,
  onKeyPress: onRightClick,
  style: onRightClick ? {
    cursor: 'pointer'
  } : {}
}, /*#__PURE__*/React__default["default"].createElement(Icon, {
  icon: "chevron-right"
})));
const List = ({
  children,
  active,
  width,
  vertical,
  ...args
}) => {
  const PropedChildren = Array.isArray(children) ? children && children.map((child, idx) => {
    if ( /*#__PURE__*/React__default["default"].isValidElement(child) && child.type === ListItem) {
      return /*#__PURE__*/React__default["default"].cloneElement(child, {
        key: idx.toString(),
        id: idx.toString(),
        active: active === idx.toString()
      });
    }
    return child;
  }) : children && /*#__PURE__*/React__default["default"].isValidElement(children) && children.type === ListItem && /*#__PURE__*/React__default["default"].cloneElement(children, {
    id: '0',
    active: active === '0'
  });
  return /*#__PURE__*/React__default["default"].createElement("ul", {
    "data-testid": "list",
    role: "menu",
    className: ['ragnarok', 'list', args.className].join(' '),
    style: {
      width,
      flexDirection: vertical ? 'column' : 'row'
    }
  }, PropedChildren);
};
List.propTypes = {
  /**
   * List contents
   */
  children: PropTypes__default["default"].node.isRequired,
  /**
   * Which item should be active by default?
   */
  active: PropTypes__default["default"].string,
  /**
   * List width
   */
  width: PropTypes__default["default"].string,
  /**
   * Should it show as vertical?
   */
  vertical: PropTypes__default["default"].bool
};
ListItem.propTypes = {
  /**
   * List contents
   */
  children: PropTypes__default["default"].node.isRequired,
  /**
   * Optional active state
   */
  active: PropTypes__default["default"].bool,
  /**
   * Should it show a trailing icon?
   */
  trailingIcon: PropTypes__default["default"].oneOf([false, 'chevron-right', 'edit', 'more-vertical']),
  /**
   * Optional right click handler
   */
  onRightClick: PropTypes__default["default"].func
};
List.defaultProps = {
  width: '100%',
  vertical: true,
  active: undefined
};
ListItem.defaultProps = {
  active: false,
  trailingIcon: false,
  onRightClick: undefined
};

const MenuItem = ({
  children,
  onClick
}) => /*#__PURE__*/React__default["default"].createElement("li", {
  "data-testid": "menu-item",
  className: ['ragnarok', 'menu-item'].join(' ')
}, /*#__PURE__*/React__default["default"].createElement("div", {
  role: "button",
  className: ['ragnarok', 'menu-item-button'].join(' '),
  tabIndex: 0,
  onClick: onClick ? () => onClick() : undefined,
  onKeyPress: onClick ? () => onClick() : undefined
}, children));
const Dropdown = ({
  children,
  open,
  position
}) => /*#__PURE__*/React__default["default"].createElement("ul", {
  "data-testid": "dropdown",
  className: ['ragnarok', 'dropdown', open ? 'open' : 'close', position].join(' ')
}, children);
const Menu = ({
  children
}) => /*#__PURE__*/React__default["default"].createElement("div", {
  "data-testid": "menu",
  className: ['ragnarok', 'menu'].join(' ')
}, children);
Menu.propTypes = {
  /**
   * Menu content
   */
  children: PropTypes__default["default"].node.isRequired
};
Dropdown.defaultProps = {
  open: false,
  position: 'left'
};
Dropdown.propTypes = {
  /**
   * Open/Close condition
   */
  open: PropTypes__default["default"].bool,
  /**
   * Where should it appear?
   */
  position: PropTypes__default["default"].oneOf(['top', 'bottom', 'left', 'right']),
  /**
   * Dropdown content
   */
  children: PropTypes__default["default"].node.isRequired
};
MenuItem.defaultProps = {
  onClick: undefined
};
MenuItem.propTypes = {
  /**
   * Optional click Handler
   */
  onClick: PropTypes__default["default"].func,
  /**
  * MenuItem content
  */
  children: PropTypes__default["default"].node.isRequired
};

const NavBar = ({
  home,
  backLabel,
  brandName,
  children
}) => /*#__PURE__*/React__default["default"].createElement("nav", {
  backlabel: backLabel,
  brandname: brandName,
  "data-testid": "navbar",
  className: ['ragnarok', 'navbar', home ? 'home' : 'inner'].join(' ')
}, children && children);
NavBar.propTypes = {
  /**
   * Label for the back button
   */
  backLabel: PropTypes__default["default"].string,
  /**
   * Brand Name to show
   */
  brandName: PropTypes__default["default"].string,
  /**
   * Is the page located at home?
   */
  home: PropTypes__default["default"].bool
};
NavBar.defaultProps = {
  backLabel: 'Back',
  brandName: '',
  home: true
};

const NavBrand = ({
  backLabel,
  home,
  onBackClick,
  brandName,
  children
}) => {
  if (!home) {
    return /*#__PURE__*/React__default["default"].createElement("button", {
      type: "button",
      onClick: () => onBackClick(),
      className: ['ragnarok', 'back'].join(' ')
    }, /*#__PURE__*/React__default["default"].createElement(Icon, {
      icon: "arrow-left"
    }), backLabel);
  }
  return /*#__PURE__*/React__default["default"].createElement("a", {
    href: "/",
    alt: brandName,
    title: brandName,
    "data-testid": "navbrand",
    className: ['ragnarok', 'navbrand', home ? 'home' : 'inner'].join(' ')
  }, children && children);
};
NavBrand.propTypes = {
  /**
   * Label for the back button
   */
  backLabel: PropTypes__default["default"].string,
  /**
   * Brand Name to show
   */
  brandName: PropTypes__default["default"].string,
  /**
   * Is the page located at home?
   */
  home: PropTypes__default["default"].bool,
  /**
   * Optional Back Click Handler?
   */
  onBackClick: PropTypes__default["default"].func
};
NavBrand.defaultProps = {
  backLabel: 'Back',
  brandName: '',
  home: true,
  onBackClick: () => {}
};

const parseCircularValue = scale => 80 - scale / 100 * 69 + 'px';
const linearProgress = We`
  0% {
    left: -35%;
    right: 100%;
  }
  60% {
    left: 100%;
    right: -90%;
  }
  100% {
    left: 100%;
    right: -90%;
  }
`;
const linearProgressFeedback = We`
  0% {
    left: -200%;
    right: 100%;
  }
  60% {
    left: 107%;
    right: -8%;
  }
  100% {
    left: 107%;
    right: -8%;
  }
`;
const circularProgress = We`
  0% {
    transform-origin: 50% 50%;
  }
  100% {
    transform: rotate(360deg);
  }
`;
const circularProgressInner = We`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0px;
  }
  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }
  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`;
const StyledProgress = styled.div`
  &.circular:not(.controlled) {
    animation-name: ${circularProgress};
    svg {
      circle {
        animation-name: ${circularProgressInner};
      }
    }
  }
  .progress-bar {
    &:first-child {
      animation-name: ${linearProgress};
    }
    &:last-child {
      animation-name: ${linearProgressFeedback};
    }
  }
`;
const Progress = ({
  width,
  circular,
  determinate,
  value
}) => {
  if (determinate) {
    if (circular) {
      return /*#__PURE__*/React__default["default"].createElement(StyledProgress, {
        "data-testid": "progress",
        className: ['ragnarok', 'progress', 'circular', 'controlled'].join(' ')
      }, /*#__PURE__*/React__default["default"].createElement("svg", {
        viewBox: "0 0 24 24"
      }, /*#__PURE__*/React__default["default"].createElement("circle", {
        cx: "12",
        cy: "12",
        r: "11",
        fill: "none",
        strokeWidth: "2",
        style: {
          strokeDashoffset: parseCircularValue(value)
        }
      })));
    }
    return /*#__PURE__*/React__default["default"].createElement("progress", {
      "data-testid": "progress",
      max: "100",
      value: value ? value.toString() : 0,
      style: !circular ? {
        width
      } : {},
      className: ['ragnarok', 'progress'].join(' ')
    });
  }
  if (circular) {
    return /*#__PURE__*/React__default["default"].createElement(StyledProgress, {
      "data-testid": "progress",
      className: ['ragnarok', 'progress', 'circular'].join(' ')
    }, /*#__PURE__*/React__default["default"].createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React__default["default"].createElement("circle", {
      cx: "12",
      cy: "12",
      r: "11",
      fill: "none",
      strokeWidth: "2"
    })));
  }
  return /*#__PURE__*/React__default["default"].createElement(StyledProgress
  // role="progressbar"
  , {
    "data-testid": "progress",
    style: !circular ? {
      width
    } : {},
    className: ['ragnarok', 'progress'].join(' ')
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "progress-bar"
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "progress-bar"
  }));
};
Progress.propTypes = {
  /**
   * Component's width
   */
  width: PropTypes__default["default"].string,
  /**
   * Should it be circular?
   */
  circular: PropTypes__default["default"].bool,
  /**
   * Has a determinate progress?
   */
  determinate: PropTypes__default["default"].bool,
  /**
   * If it is determinate, what is the value of it?
   */
  value: PropTypes__default["default"].number
};
Progress.defaultProps = {
  width: '100%',
  circular: undefined,
  determinate: undefined,
  value: 0
};

const RadioOption = ({
  key,
  value,
  selected,
  children,
  label,
  disabled,
  onClick,
  onChange,
  className
}) => /*#__PURE__*/React__default["default"].createElement("label", {
  htmlFor: label,
  key: key,
  className: ['ragnarok', 'radio-outer', className].join(' ')
}, /*#__PURE__*/React__default["default"].createElement("span", {
  role: "radio",
  onClick: !(!disabled && onClick) ? undefined : () => onClick(value),
  onKeyPress: !(!disabled && onClick) ? undefined : () => onClick(value),
  tabIndex: key,
  "aria-checked": selected,
  className: ['ragnarok', 'radio-wrapper'].join(' ')
}, /*#__PURE__*/React__default["default"].createElement("input", {
  type: "radio",
  name: label,
  id: key,
  checked: selected,
  disabled: disabled,
  onChange: e => onChange(e),
  value: value,
  className: ['ragnarok', 'radio-input', selected ? 'checked' : ''].join(' ')
}), /*#__PURE__*/React__default["default"].createElement("span", {
  className: "radio-control"
})), children && /*#__PURE__*/React__default["default"].createElement("span", {
  className: "radio-label"
}, children));
RadioOption.propTypes = {
  /**
   * Should it be disabled?
   */
  disabled: PropTypes__default["default"].bool,
  /**
   * Radio contents
   */
  label: PropTypes__default["default"].string
};
RadioOption.defaultProps = {
  disabled: false,
  label: ''
  // onChange: undefined,
};

const Radio = ({
  disabled,
  selected,
  label,
  children,
  vertical = false,
  handleChange,
  className
}) => {
  const [selectedValue, setSelectedValue] = React.useState(selected);
  React.useEffect(() => {
    handleChange(selectedValue);
  }, [selectedValue]);
  React.useEffect(() => {
    setSelectedValue(selected);
  }, [selected]);
  const PropedChildren = children && children.map((child, idx) => {
    let subChildren;
    if ( /*#__PURE__*/React__default["default"].isValidElement(child) && child.type !== RadioOption) {
      if (!Array.isArray(child.props.children)) {
        if (child.props.children.type === RadioOption) {
          subChildren = /*#__PURE__*/React__default["default"].cloneElement(child.props.children, {
            key: idx.toString(),
            disabled,
            label,
            onClick: setSelectedValue,
            selected: selectedValue === child.props.children.props.value
          });
        } else {
          subChildren = child.props.children;
        }
      } else if (Array.isArray(child.props.children)) {
        subChildren = child.props.children.map((subChild, i) => {
          if (subChild.type === RadioOption) {
            return /*#__PURE__*/React__default["default"].cloneElement(subChild, {
              key: `sub-${i.toString()}`,
              disabled,
              label,
              onClick: setSelectedValue,
              selected: selectedValue === subChild.props.value
            });
          }
          return subChild;
        });
      } else {
        subChildren = child.props.children;
      }
      return /*#__PURE__*/React__default["default"].cloneElement(child, {
        key: `sub-${idx.toString()}`,
        children: subChildren
      });
    }
    if ( /*#__PURE__*/React__default["default"].isValidElement(child) && child.type === RadioOption) {
      return /*#__PURE__*/React__default["default"].cloneElement(child, {
        key: idx.toString(),
        disabled,
        label,
        onClick: setSelectedValue,
        selected: selectedValue === child.props.value
      });
    }
    return child;
  });
  return /*#__PURE__*/React__default["default"].createElement("div", {
    "data-testid": "radio",
    className: ['ragnarok', 'radio', disabled ? 'disabled' : '', className].join(' '),
    style: vertical ? {
      flexDirection: 'column'
    } : {}
  }, PropedChildren && PropedChildren);
};
Radio.propTypes = {
  /**
   * Should it be disabled?
   */
  disabled: PropTypes__default["default"].bool,
  /**
   * Which item should be selected by default?
   */
  selected: PropTypes__default["default"].string.isRequired,
  /**
   * Internal Identificator
   */
  label: PropTypes__default["default"].string,
  /**
   * Should it be displayed vertically?
   */
  vertical: PropTypes__default["default"].bool,
  /**
   * Optional change handler
   */
  handleChange: PropTypes__default["default"].func
};
Radio.defaultProps = {
  disabled: false,
  label: '',
  vertical: false,
  handleChange: undefined
};

const SelectItem = ({
  value,
  children,
  selected,
  onSelect,
  ...args
}) => /*#__PURE__*/React__default["default"].createElement("button", _extends({
  type: "button",
  key: value.toString(),
  className: ['ragnarok', 'menu-select-item', selected ? 'selected-item' : ''].join(' '),
  onClick: () => onSelect(value)
}, args), /*#__PURE__*/React__default["default"].createElement("span", null, /*#__PURE__*/React__default["default"].createElement(Icon, {
  icon: "check"
})), /*#__PURE__*/React__default["default"].createElement("span", {
  className: "button-content"
}, children));
SelectItem.propTypes = {
  /**
   * Function to select item
   */
  onSelect: PropTypes__default["default"].func,
  /**
   * Which iten is selected?
   */
  selected: PropTypes__default["default"].bool,
  /**
   * Option contents
   */
  children: PropTypes__default["default"].any
};
SelectItem.defaultProps = {
  children: '',
  selected: false,
  onSelect: undefined
};

const Select = ({
  children,
  label,
  width,
  selected,
  placeholder,
  multiselect,
  handleChange,
  readOnly
}) => {
  const [selectedItem, setSelectedItem] = React.useState(typeof selected === 'object' ? undefined : selected);
  const [multiSelected, setMultiSelected] = React.useState(multiselect ? selected : []);
  const [selectedText, setSelectedText] = React.useState(undefined);
  const [richChildren, setRichChildren] = React.useState(children);
  const [showOptions, setShowOptions] = React.useState(false);
  const node = React.useRef();
  const checkSelected = value => {
    if (multiselect) {
      return multiSelected.some(e => e === value);
    }
    return selectedItem === value;
  };
  const handleMultiple = value => {
    setShowOptions(true);
    setMultiSelected(multiSelected.some(e => e === value) ? multiSelected.filter(e => e !== value) : [value, ...multiSelected]);
  };
  const PropedChildren = richChildren && richChildren.map((child, idx) => {
    if ( /*#__PURE__*/React__default["default"].isValidElement(child) && child.type === SelectItem) {
      return /*#__PURE__*/React__default["default"].cloneElement(child, {
        key: idx.toString(),
        onSelect: multiselect ? handleMultiple : setSelectedItem,
        selected: checkSelected(child.props.value)
      });
    }
    return child;
  });
  const changeHandler = x => {
    if (x !== '') {
      setShowOptions(true);
    } else {
      setShowOptions(false);
    }
    const filtered = children === null || children === void 0 ? void 0 : children.filter(child => {
      var _child$props, _child$props3;
      if (typeof ((_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.children) === 'string') {
        var _child$props2;
        return ((_child$props2 = child.props) === null || _child$props2 === void 0 ? void 0 : _child$props2.children.toLowerCase().indexOf(x.toLowerCase())) !== -1;
      }
      if (typeof ((_child$props3 = child.props) === null || _child$props3 === void 0 ? void 0 : _child$props3.children) === 'object') {
        var _child$props4;
        return ((_child$props4 = child.props) === null || _child$props4 === void 0 ? void 0 : _child$props4.label.toLowerCase().indexOf(x.toLowerCase())) !== -1;
      }
      return false;
    });
    setRichChildren(filtered);
  };
  const parseName = names => {
    if (names.length > 1) {
      return `${names[0]}...(+${names.length - 1})`;
    }
    return names.reduce((a, x) => `${a}, ${x}`, '').substr(2);
  };
  React.useEffect(() => {
    if (multiselect) {
      const names = children === null || children === void 0 ? void 0 : children.filter(child => {
        if (multiSelected.some(e => e === child.props.value)) {
          return child.props.children;
        }
        return false;
      }).filter(Boolean).map(x => x.props.children);
      setSelectedText(parseName(names));
    }
    if (handleChange) handleChange(multiSelected);
  }, [multiSelected]);
  React.useEffect(() => {
    if (!multiselect) {
      if (handleChange) handleChange(selectedItem);
      const [first] = children === null || children === void 0 ? void 0 : children.filter(child => child.props.value === selectedItem);
      if (selectedItem) setSelectedText(first.props.children);
    }
  }, [selectedItem]);
  React.useEffect(() => {
    if (!multiselect) setSelectedItem(selected);
  }, [selected]);

  // eslint-disable-next-line consistent-return
  const handleClickOutside = e => {
    if (!node.current.contains(e.target)) {
      // setSelectedText('');
      return setShowOptions(false);
    }
  };
  React.useEffect(() => {
    if (showOptions) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showOptions]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("select", {
    defaultValue: selectedItem,
    title: "menu-select-hidden",
    hidden: true,
    multiple: multiselect ? 1 : 0,
    onChange: handleChange,
    className: ['ragnarok', 'menu-select-hidden'].join(' ')
  }, children && children.map((option, idx) => /*#__PURE__*/React__default["default"].createElement("option", {
    value: option.props.value.toString(),
    key: idx.toString()
  }, option.props.children))), /*#__PURE__*/React__default["default"].createElement("div", {
    ref: node,
    style: {
      width
    },
    "data-testid": "select",
    className: ['ragnarok', 'menu-select-wrapper', showOptions ? 'open' : 'close'].join(' ')
  }, /*#__PURE__*/React__default["default"].createElement(TextField, {
    iconRight: "chevron-down",
    width: width,
    readOnly: readOnly,
    onClickRight: () => setShowOptions(!showOptions),
    label: selectedText || label,
    helpClass: "help",
    type: "search",
    onChange: changeHandler,
    placeholder: placeholder
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    "data-testid": "menu-select",
    className: ['ragnarok', 'menu-select', showOptions ? 'open' : 'close'].join(' ')
  }, PropedChildren && PropedChildren)));
};
Select.propTypes = {
  /**
   * Which item should be selected?
   */
  selected: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].array]),
  /**
   * Width of the whole component
   */
  width: PropTypes__default["default"].string,
  /**
   * Width of the whole component
   */
  readOnly: PropTypes__default["default"].bool,
  /**
   * Should it accept multiselect?
   */
  multiselect: PropTypes__default["default"].bool,
  /**
   * Heading contents
   */
  children: PropTypes__default["default"].any,
  /**
   * Optional change handler
   */
  handleChange: PropTypes__default["default"].func
};
Select.defaultProps = {
  children: '',
  selected: undefined,
  multiselect: false,
  width: '250px',
  readOnly: false,
  handleChange: undefined
};

const Sidebar = ({
  children,
  open,
  onColapse
}) => /*#__PURE__*/React__default["default"].createElement("div", {
  "data-testid": "sidebar",
  className: ['ragnarok', 'sidebar', open ? 'open' : 'close'].join(' ')
}, /*#__PURE__*/React__default["default"].createElement(Button, {
  className: "colapse",
  icon: open ? 'minimize' : 'maximize',
  label: "",
  onClick: () => onColapse(!open),
  type: "ghost"
}), children);
Sidebar.propTypes = {
  /**
   * Sidebar content
   */
  children: PropTypes__default["default"].node.isRequired,
  /**
   * Open or close state
   */
  open: PropTypes__default["default"].bool,
  /**
   * Open/Close handler
   */
  onColapse: PropTypes__default["default"].func
};
Sidebar.defaultProps = {
  open: true,
  onColapse: undefined
};

const Snackbar = ({
  children,
  isOpen,
  action,
  onColapse,
  display,
  timeoutMs,
  variant
}) => {
  const [show, setShow] = React.useState(isOpen);
  if (timeoutMs) {
    setTimeout(() => {
      setShow(false);
    }, timeoutMs);
  }
  React.useEffect(() => {
    setShow(isOpen);
  }, [isOpen]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    "data-testid": "snackbar",
    className: ['ragnarok', 'snackbar', show ? 'open' : 'close', display ? 'row' : '', variant].join(' ')
  }, /*#__PURE__*/React__default["default"].createElement("div", null, children && children), action && /*#__PURE__*/React__default["default"].createElement("div", {
    className: display ? 'end' : ''
  }, /*#__PURE__*/React__default["default"].createElement(Button, {
    id: "colapse",
    size: "sm",
    label: "",
    onClick: () => {
      onColapse(!isOpen);
    },
    type: "ghost",
    className: "no-m"
  }, action)));
};
Snackbar.propTypes = {
  /**
   * Snackbar content
   */
  children: PropTypes__default["default"].node.isRequired,
  /**
   * Open or close state
   */
  isOpen: PropTypes__default["default"].bool,
  /**
   * Text state for button
   */
  action: PropTypes__default["default"].node,
  /**
   * Open/Close handler
   */
  onColapse: PropTypes__default["default"].func,
  /**
   * Double row in content
   */
  display: PropTypes__default["default"].bool,
  /**
   * Time for it close in ms
   */
  timeoutMs: PropTypes__default["default"].number,
  /**
   * Which variant should it be
   */
  variant: PropTypes__default["default"].oneOf(['danger', 'warning', 'success', 'information'])
};
Snackbar.defaultProps = {
  isOpen: false,
  display: false,
  action: null,
  onColapse: undefined,
  timeoutMs: undefined,
  variant: null
};

const Switch = ({
  value,
  children,
  disabled,
  handleChange
}) => {
  const [checkedValue, setCheckedValue] = React.useState(value);
  React.useEffect(() => {
    handleChange(checkedValue);
  }, [checkedValue]);
  React.useEffect(() => {
    setCheckedValue(value);
  }, [value]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: ['ragnarok', 'switch-outer', disabled ? 'disabled' : undefined].join(' ')
  }, children && /*#__PURE__*/React__default["default"].createElement("span", {
    id: `switch-label-${children.replace(' ', '-')}`,
    className: "switch-label"
  }, children), /*#__PURE__*/React__default["default"].createElement("label", {
    htmlFor: "switch-input",
    "data-testid": "switch",
    className: ['ragnarok', 'switch', disabled ? 'disabled' : undefined].join(' ')
  }, /*#__PURE__*/React__default["default"].createElement("input", {
    "data-testid": "switch-input",
    type: "checkbox",
    name: "switch-input",
    checked: checkedValue,
    disabled: disabled,
    hidden: true,
    onChange: e => handleChange(e.target.value),
    value: checkedValue,
    className: ['ragnarok', 'switch-input', disabled ? 'disabled' : undefined, !checkedValue ? '' : 'checked'].join(' ')
  }), /*#__PURE__*/React__default["default"].createElement("span", {
    className: ['switch-hit', disabled ? 'disabled' : undefined].join(' '),
    role: "switch",
    tabIndex: "-1",
    "aria-labelledby": `switch-label-${children.replace(' ', '-')}`,
    "aria-checked": checkedValue,
    onClick: !disabled ? () => setCheckedValue(!checkedValue) : undefined,
    onKeyPress: !disabled ? () => setCheckedValue(!checkedValue) : undefined
  })));
};
Switch.propTypes = {
  /**
   * Initial value
   */
  value: PropTypes__default["default"].bool,
  /**
  * Should it be disabled?
  */
  disabled: PropTypes__default["default"].bool,
  /**
   * OnChange handler
   */
  handleChange: PropTypes__default["default"].func
};
Switch.defaultProps = {
  disabled: false,
  value: false,
  handleChange: undefined
};

const Tab = ({
  children,
  selected,
  alias
}) => /*#__PURE__*/React__default["default"].createElement("div", {
  className: ['ragnarok', 'tab', selected ? 'selected' : undefined, alias].join(' ')
}, children && children);
Tab.propTypes = {
  /**
   * Which content should it show?
   */
  children: PropTypes__default["default"].node.isRequired,
  /**
   * Is it selected?
   */
  selected: PropTypes__default["default"].bool
};
Tab.defaultProps = {
  selected: false
};

const TabHeader = ({
  index,
  children,
  selected,
  disabled,
  alias = index.toString(),
  onClick
}) => {
  const PropedChildren = typeof children === 'object' && (children === null || children === void 0 ? void 0 : children.map(child => {
    if (typeof child === 'string') {
      return /*#__PURE__*/React__default["default"].createElement("span", null, child);
    }
    if ( /*#__PURE__*/React__default["default"].isValidElement(child)) {
      return /*#__PURE__*/React__default["default"].cloneElement(child, {
        disabled
      });
    }
    return child;
  }));
  return /*#__PURE__*/React__default["default"].createElement("button", {
    role: "tab",
    type: "button",
    tabIndex: index,
    onClick: !disabled ? () => onClick(alias) : undefined,
    onKeyPress: () => {},
    className: ['ragnarok', 'tab-header', disabled ? 'disabled' : undefined, selected ? 'selected' : undefined].join(' ')
  }, PropedChildren || children);
};
TabHeader.propTypes = {
  /**
   * Which content should it show?
   */
  children: PropTypes__default["default"].node.isRequired,
  /**
   * Is it selected?
   */
  selected: PropTypes__default["default"].bool,
  /**
   * Should it be disabled?
   */
  disabled: PropTypes__default["default"].bool,
  /**
   * Alias linking TabHeader with TabContent
   */
  alias: PropTypes__default["default"].string,
  /**
   * Optional click handler
   */
  onClick: PropTypes__default["default"].func
};
TabHeader.defaultProps = {
  selected: false,
  disabled: false,
  alias: '',
  onClick: () => {}
};

const TabContent = ({
  children,
  selected
}) => /*#__PURE__*/React__default["default"].createElement("div", {
  role: "presentation",
  className: ['ragnarok', 'tab-content', selected ? 'selected' : undefined].join(' ')
}, children && children);
TabContent.propTypes = {
  /**
   * Which content should it show?
   */
  children: PropTypes__default["default"].node.isRequired,
  /**
   * Is it selected?
   */
  selected: PropTypes__default["default"].bool
};
TabContent.defaultProps = {
  selected: false
};

const Tabs = ({
  children,
  selected,
  ...args
}) => {
  const [which, setWhich] = React.useState(selected);
  React.useEffect(() => {
    setWhich(selected);
  }, [selected]);
  const TabElements = {
    headers: children && children.map((child, idx) => {
      if ( /*#__PURE__*/React__default["default"].isValidElement(child) && child.type === Tab) {
        var _child$props;
        return child === null || child === void 0 ? void 0 : (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.children.map(navTab => {
          if ( /*#__PURE__*/React__default["default"].isValidElement(navTab) && navTab.type === TabHeader) {
            var _child$props2, _child$props3;
            return /*#__PURE__*/React__default["default"].cloneElement(navTab, {
              key: `headerkey${idx.toString()}`,
              index: `header${idx.toString()}`,
              selected: child.props.alias === which,
              alias: child === null || child === void 0 ? void 0 : (_child$props2 = child.props) === null || _child$props2 === void 0 ? void 0 : _child$props2.alias,
              disabled: child === null || child === void 0 ? void 0 : (_child$props3 = child.props) === null || _child$props3 === void 0 ? void 0 : _child$props3.disabled,
              onClick: setWhich
            });
          }
          return false;
        }).filter(Boolean);
      }
      return false;
    }).filter(Boolean).flat(),
    contents: children && children.map((child, index) => {
      if ( /*#__PURE__*/React__default["default"].isValidElement(child) && child.type === Tab) {
        var _child$props4;
        return child === null || child === void 0 ? void 0 : (_child$props4 = child.props) === null || _child$props4 === void 0 ? void 0 : _child$props4.children.map(contTab => {
          if ( /*#__PURE__*/React__default["default"].isValidElement(contTab) && contTab.type === TabContent) {
            var _child$props5;
            return /*#__PURE__*/React__default["default"].cloneElement(contTab, {
              key: `contentkey${index.toString()}`,
              index: `content${index.toString()}`,
              selected: child.props.alias === which,
              alias: child === null || child === void 0 ? void 0 : (_child$props5 = child.props) === null || _child$props5 === void 0 ? void 0 : _child$props5.alias
            });
          }
          return false;
        }).filter(Boolean);
      }
      return false;
    }).filter(Boolean).flat()
  };
  return /*#__PURE__*/React__default["default"].createElement("div", _extends({
    "data-testid": "tabs",
    role: "tablist",
    className: ['ragnarok', 'tabs'].join(' ')
  }, args), (TabElements === null || TabElements === void 0 ? void 0 : TabElements.headers) && /*#__PURE__*/React__default["default"].createElement("div", {
    "data-testid": "tabs-controller",
    className: ['ragnarok', 'tabs-controller'].join(' ')
  }, TabElements.headers.map(el => el)), (TabElements === null || TabElements === void 0 ? void 0 : TabElements.contents) && /*#__PURE__*/React__default["default"].createElement("div", {
    "data-testid": "tabs-inner",
    className: ['ragnarok', 'tabs-inner'].join(' ')
  }, TabElements.contents.map(el => el)));
};
Tabs.propTypes = {
  /**
   * Which content should it show?
   */
  children: PropTypes__default["default"].node.isRequired,
  /**
   * Default content to be shown
   */
  selected: PropTypes__default["default"].string
};
Tabs.defaultProps = {
  selected: ''
};

const Tooltip = ({
  children,
  direction,
  className
}) => /*#__PURE__*/React__default["default"].createElement("span", {
  "data-testid": "tooltip",
  className: ['ragnarok', 'tooltip-wrapper', 'caption', direction, className].join(' ')
}, children);
Tooltip.propTypes = {
  /**
   * Tooltip contents
   */
  children: PropTypes__default["default"].node.isRequired,
  /**
   * Tooltip's position
   */
  direction: PropTypes__default["default"].oneOf(['top', 'bottom', 'left', 'right'])
};
Tooltip.defaultProps = {
  direction: 'bottom'
};

var theme = /*#__PURE__*/Object.freeze({
  __proto__: null
});

/* eslint-disable max-len */
const HighChart = ({
  stack,
  xLabels,
  children,
  className
}) => {
  const chartComponent = React.useRef(null);
  const [stackOn, setStackOn] = React.useState(stack);
  const [series, setSeries] = React.useState([]);
  const [isZoomed, setIsZoomed] = React.useState(false);
  const [chartOption] = React.useState({
    zoomType: 'x',
    events: {
      selection: e => {
        if (e.resetSelection) {
          setIsZoomed(false);
        } else {
          setIsZoomed(true);
        }
      }
    }
  });
  const resetZoom = () => {
    if (chartComponent && chartComponent.current) {
      chartComponent.current.chart.zoomOut();
    }
  };
  const buildSeries = Array.isArray(children) && children.map(child => {
    if (child.type === Column || child.type === Line) {
      var _child$props, _child$props2;
      return {
        name: child.props.name,
        type: child.props.type,
        color: child.props.color,
        visible: child.props.visible,
        dataLabels: {
          color: child.props.colorLabel || undefined,
          style: child.props.colorLabel ? {
            textOutline: 'none',
            fontWeight: 'regular'
          } : {},
          verticalAlign: child.type === Column ? 'top' : undefined
        },
        yAxis: child.props.yAxis,
        data: child.props.data,
        marker: {
          symbol: child.type === Line ? (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.marker : undefined,
          fillColor: '#FFFFFF',
          lineWidth: 2,
          lineColor: undefined
        },
        dashStyle: child.type === Line ? (_child$props2 = child.props) === null || _child$props2 === void 0 ? void 0 : _child$props2.dash : undefined,
        tooltip: {
          valueSuffix: child.props.suffix || undefined
        }
      };
    }
    return false;
  }).filter(Boolean);
  React.useEffect(() => {
    setStackOn(stack);
  }, [stack]);
  React.useEffect(() => {
    setSeries(buildSeries);
  }, []);
  const optionsDefault = {
    chart: chartOption,
    title: {
      text: undefined
    },
    subtitle: {
      text: undefined
    },
    xAxis: [{
      categories: xLabels,
      crosshair: true
    }],
    yAxis: [{
      gridLineWidth: 0,
      labels: {
        format: '{value:.0f}'
      },
      title: {
        text: undefined
      }
    }, {
      labels: {
        format: '{value}%'
      },
      title: {
        text: undefined
      },
      opposite: true
    }],
    tooltip: {
      backgroundColor: '#181818',
      borderRadius: 4,
      borderWidth: 0,
      padding: 4,
      shadow: false,
      shared: true,
      style: {
        color: '#ffffff',
        fontSize: '10.2px'
      }
    },
    legend: {
      align: 'left',
      floating: false,
      itemStyle: {
        fontWeight: 'regular'
      },
      layout: 'horizontal',
      verticalAlign: 'top',
      x: 0,
      y: 0
    },
    plotOptions: {
      column: {
        stacking: stackOn ? 'normal' : undefined,
        dataLabels: {
          enabled: true
        }
      },
      series: {
        borderColor: undefined
      }
    },
    series
  };
  Highcharts__default["default"].Chart.prototype.showResetZoom = () => {};
  return /*#__PURE__*/React__default["default"].createElement("div", {
    "data-testid": "highcharts",
    className: ['ragnarok', 'highcharts', className].join(' ')
  }, /*#__PURE__*/React__default["default"].createElement(HighchartsReact__default["default"], {
    ref: chartComponent,
    highcharts: Highcharts__default["default"],
    options: optionsDefault
  }), isZoomed && /*#__PURE__*/React__default["default"].createElement(Button, {
    className: "reset-zoom",
    icon: "zoom-out",
    onClick: resetZoom
  }));
};
HighChart.propTypes = {
  /**
   * Should columns stack on top of each other?
   */
  stack: PropTypes__default["default"].bool,
  /**
   * Labels that show on X Axis
   */
  xLabels: PropTypes__default["default"].array
};
HighChart.defaultProps = {
  stack: false,
  xLabels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11']
};

exports.Accordion = Accordion;
exports.AccordionItem = AccordionItem;
exports.AccordionTrigger = AccordionTrigger;
exports.Avatar = Avatar;
exports.Badge = Badge;
exports.Breadcrumb = Breadcrumb;
exports.Button = Button;
exports.Caption = Caption;
exports.Card = Card;
exports.Check = Check;
exports.Column = Column;
exports.DataList = DataList;
exports.DataTable = DataTable;
exports.DatePicker = DatePicker;
exports.Dialog = Dialog;
exports.Dropdown = Dropdown;
exports.Grid = Grid;
exports.GridItem = GridItem;
exports.GridSidebar = GridSidebar;
exports.Heading = Heading;
exports.HighChart = HighChart;
exports.Icon = Icon;
exports.Line = Line;
exports.LinkText = LinkText;
exports.List = List;
exports.ListItem = ListItem;
exports.Menu = Menu;
exports.MenuItem = MenuItem;
exports.NavBar = NavBar;
exports.NavBrand = NavBrand;
exports.Progress = Progress;
exports.Radio = Radio;
exports.RadioOption = RadioOption;
exports.Select = Select;
exports.SelectItem = SelectItem;
exports.Sidebar = Sidebar;
exports.Snackbar = Snackbar;
exports.Switch = Switch;
exports.Tab = Tab;
exports.TabContent = TabContent;
exports.TabHeader = TabHeader;
exports.Tabs = Tabs;
exports.Text = Text;
exports.TextField = TextField;
exports.Tooltip = Tooltip;
exports.theme = theme;
//# sourceMappingURL=bundle.js.map
