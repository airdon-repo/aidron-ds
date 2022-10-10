/* eslint-disable react/no-danger */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import feather from 'feather-icons';

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
  const [active, setActive] = useState(!!value);
  const [overValue, setOverValue] = useState(value);

  useEffect(() => {
    setOverValue(value);
  }, [value]);

  useEffect(() => {
    if (overValue) {
      setActive(true);
    }
  }, [overValue]);

  const changeHandler = (event) => {
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

  return (
    <div
      data-testid="textfield"
      role="presentation"
      className={[
        'ragnarok',
        'textfield-outer',
        helpClass
      ].join(' ')}
    >
      <div
        label={label}
        placeholder={placeholder}
        value={overValue}
        role="presentation"
        className={[
          'ragnarok',
          'textfield-wrapper',
          `textfield-${type}`,
          disabled ? 'disabled' : '',
          active ? 'active' : 'not-active'
        ].join(' ')}
        style={{ width }}
        {...args}
      >
        {iconLeft && (
          <i
            data-testid="icon"
            className="icon-left"
            dangerouslySetInnerHTML={{
              __html: feather.icons[iconLeft].toSvg({
                'stroke-width': 1.5,
                width: 24,
                height: 24
              })
            }}
          />
        )}
        <div className="textfield-contents" style={{ width }}>
          {label && (
          <span
            {...args}
            id={label}
            style={args.width ? { width: `calc(${args.width} - 64px)` } : {}}
            className={[
              'ragnarok',
              'textfield-label',
              helpClass
            ].join(' ')}
          >
            {label}
          </span>
          )}
          <input
            {...args}
            data-testid="textfield-input"
            type={type}
            disabled={(disabled || readOnly) ? 1 : 0}
            placeholder={placeholder}
            value={overValue}
            onChange={(event) => changeHandler(event)}
            onFocus={() => focusHandler()}
            onBlur={() => blurHandler()}
            style={{ width: '100%' }}
            className={[
              'ragnarok',
              'textfield-input',
              disabled ? 'disabled' : '',
            ].join(' ')}
          />
        </div>
        {iconRight && (
          <button
            type="button"
            onClick={() => {
              onClickRight();
              if (!rightAction) setActive(false);
            }}
            title={label}
            aria-label={label}
            disabled={disabled ? 1 : 0}
          >
            <i
              data-testid="icon"
              className={[
                'icon-right',
                disabled ? 'disabled' : '',
                helpClass
              ].join(' ')}
              dangerouslySetInnerHTML={{
                __html: feather.icons[iconRight].toSvg({
                  'stroke-width': 1.5,
                  width: 24,
                  height: 24
                })
              }}
            />
          </button>
        )}
      </div>
      {help && help !== '' && <span {...args} className={['ragnarok', 'textfield-help', 'text-caption', helpClass].join(' ')}>{help}</span> }
    </div>
  );
};

  TextField.propTypes = {
  /**
   * Placeholder text to show before input
   */
  placeholder: PropTypes.string,
  /**
   * Descriptive input text
   */
  label: PropTypes.string,
  /**
   * Descriptive input text
   */
  type: PropTypes.oneOf(['text', 'search', 'tel', 'email', 'password']),
  /**
   * Help text
   */
  help: PropTypes.any,
  /**
   * Help text
   */
  helpClass: PropTypes.oneOf(['help', 'success', 'error', 'warning']),
  /**
   * Width of textfield
   */
  width: PropTypes.string,
  /**
   * Should the input be disabled?
   */
  disabled: PropTypes.bool,
  /**
   * Set this to True to not colapse on right click
   */
  rightAction: PropTypes.bool,
  /**
   * Show icon on the left side?
   */
  iconLeft: PropTypes.oneOf([
    false,
    'activity',
    'airplay',
    'alert-circle',
    'alert-octagon',
    'alert-triangle',
    'align-center',
    'align-justify',
    'align-left',
    'align-right',
    'anchor',
    'aperture',
    'archive',
    'arrow-down',
    'arrow-down-circle',
    'arrow-down-left',
    'arrow-down-right',
    'arrow-left',
    'arrow-left-circle',
    'arrow-right',
    'arrow-right-circle',
    'arrow-up',
    'arrow-up-circle',
    'arrow-up-left',
    'arrow-up-right',
    'at-sign',
    'award',
    'bar-chart',
    'bar-chart-2',
    'battery',
    'battery-charging',
    'bell',
    'bell-off',
    'bluetooth',
    'bold',
    'book',
    'bookmark',
    'book-open',
    'box',
    'briefcase',
    'calendar',
    'camera',
    'camera-off',
    'cast',
    'check',
    'check-circle',
    'check-square',
    'chevron-down',
    'chevron-left',
    'chevron-right',
    'chevrons-down',
    'chevrons-left',
    'chevrons-right',
    'chevrons-up',
    'chevron-up',
    'chrome',
    'circle',
    'clipboard',
    'clock',
    'cloud',
    'cloud-drizzle',
    'cloud-lightning',
    'cloud-off',
    'cloud-rain',
    'cloud-snow',
    'code',
    'codepen',
    'codesandbox',
    'coffee',
    'columns',
    'command',
    'compass',
    'copy',
    'corner-down-left',
    'corner-down-right',
    'corner-left-down',
    'corner-left-up',
    'corner-right-down',
    'corner-right-up',
    'corner-up-left',
    'corner-up-right',
    'cpu',
    'credit-card',
    'crop',
    'crosshair',
    'database',
    'delete',
    'disc',
    'divide',
    'divide-circle',
    'divide-square',
    'dollar-sign',
    'download',
    'download-cloud',
    'dribbble',
    'droplet',
    'edit',
    'edit-2',
    'edit-3',
    'external-link',
    'eye',
    'eye-off',
    'facebook',
    'fast-forward',
    'feather',
    'figma',
    'file',
    'file-minus',
    'file-plus',
    'file-text',
    'film',
    'filter',
    'flag',
    'folder',
    'folder-minus',
    'folder-plus',
    'framer',
    'frown',
    'gift',
    'git-branch',
    'git-commit',
    'github',
    'gitlab',
    'git-merge',
    'git-pull-request',
    'globe',
    'grid',
    'hard-drive',
    'hash',
    'headphones',
    'heart',
    'help-circle',
    'hexagon',
    'home',
    'image',
    'inbox',
    'info',
    'instagram',
    'italic',
    'key',
    'layers',
    'layout',
    'life-buoy',
    'link',
    'link-2',
    'linkedin',
    'list',
    'loader',
    'lock',
    'log-in',
    'log-out',
    'mail',
    'map',
    'map-pin',
    'maximize',
    'maximize-2',
    'meh',
    'menu',
    'message-circle',
    'message-square',
    'mic',
    'mic-off',
    'minimize',
    'minimize-2',
    'minus',
    'minus-circle',
    'minus-square',
    'monitor',
    'moon',
    'more-horizontal',
    'more-vertical',
    'mouse-pointer',
    'move',
    'music',
    'navigation',
    'navigation-2',
    'nomes.txt',
    'octagon',
    'package',
    'paperclip',
    'pause',
    'pause-circle',
    'pen-tool',
    'percent',
    'phone',
    'phone-call',
    'phone-forwarded',
    'phone-incoming',
    'phone-missed',
    'phone-off',
    'phone-outgoing',
    'pie-chart',
    'play',
    'play-circle',
    'plus',
    'plus-circle',
    'plus-square',
    'pocket',
    'power',
    'printer',
    'radio',
    'refresh-ccw',
    'refresh-cw',
    'repeat',
    'rewind',
    'rotate-ccw',
    'rotate-cw',
    'rss',
    'save',
    'scissors',
    'search',
    'send',
    'server',
    'settings',
    'share',
    'share-2',
    'shield',
    'shield-off',
    'shopping-bag',
    'shopping-cart',
    'shuffle',
    'sidebar',
    'skip-back',
    'skip-forward',
    'slack',
    'slash',
    'sliders',
    'smartphone',
    'smile',
    'speaker',
    'square',
    'star',
    'stop-circle',
    'sun',
    'sunrise',
    'sunset',
    'tablet',
    'tag',
    'target',
    'terminal',
    'thermometer',
    'thumbs-down',
    'thumbs-up',
    'toggle-left',
    'toggle-right',
    'tool',
    'trash',
    'trash-2',
    'trello',
    'trending-down',
    'trending-up',
    'triangle',
    'truck',
    'tv',
    'twitch',
    'twitter',
    'type',
    'umbrella',
    'underline',
    'unlock',
    'upload',
    'upload-cloud',
    'user',
    'user-check',
    'user-minus',
    'user-plus',
    'users',
    'user-x',
    'video',
    'video-off',
    'voicemail',
    'volume',
    'volume-1',
    'volume-2',
    'volume-x',
    'watch',
    'wifi',
    'wifi-off',
    'wind',
    'x',
    'x-circle',
    'x-octagon',
    'x-square',
    'youtube',
    'zap',
    'zap-off',
    'zoom-in',
    'zoom-out'
  ]),
  /**
   * Show icon on the right side?
   */
   iconRight: PropTypes.oneOf([
    false,
    'activity',
    'airplay',
    'alert-circle',
    'alert-octagon',
    'alert-triangle',
    'align-center',
    'align-justify',
    'align-left',
    'align-right',
    'anchor',
    'aperture',
    'archive',
    'arrow-down',
    'arrow-down-circle',
    'arrow-down-left',
    'arrow-down-right',
    'arrow-left',
    'arrow-left-circle',
    'arrow-right',
    'arrow-right-circle',
    'arrow-up',
    'arrow-up-circle',
    'arrow-up-left',
    'arrow-up-right',
    'at-sign',
    'award',
    'bar-chart',
    'bar-chart-2',
    'battery',
    'battery-charging',
    'bell',
    'bell-off',
    'bluetooth',
    'bold',
    'book',
    'bookmark',
    'book-open',
    'box',
    'briefcase',
    'calendar',
    'camera',
    'camera-off',
    'cast',
    'check',
    'check-circle',
    'check-square',
    'chevron-down',
    'chevron-left',
    'chevron-right',
    'chevrons-down',
    'chevrons-left',
    'chevrons-right',
    'chevrons-up',
    'chevron-up',
    'chrome',
    'circle',
    'clipboard',
    'clock',
    'cloud',
    'cloud-drizzle',
    'cloud-lightning',
    'cloud-off',
    'cloud-rain',
    'cloud-snow',
    'code',
    'codepen',
    'codesandbox',
    'coffee',
    'columns',
    'command',
    'compass',
    'copy',
    'corner-down-left',
    'corner-down-right',
    'corner-left-down',
    'corner-left-up',
    'corner-right-down',
    'corner-right-up',
    'corner-up-left',
    'corner-up-right',
    'cpu',
    'credit-card',
    'crop',
    'crosshair',
    'database',
    'delete',
    'disc',
    'divide',
    'divide-circle',
    'divide-square',
    'dollar-sign',
    'download',
    'download-cloud',
    'dribbble',
    'droplet',
    'edit',
    'edit-2',
    'edit-3',
    'external-link',
    'eye',
    'eye-off',
    'facebook',
    'fast-forward',
    'feather',
    'figma',
    'file',
    'file-minus',
    'file-plus',
    'file-text',
    'film',
    'filter',
    'flag',
    'folder',
    'folder-minus',
    'folder-plus',
    'framer',
    'frown',
    'gift',
    'git-branch',
    'git-commit',
    'github',
    'gitlab',
    'git-merge',
    'git-pull-request',
    'globe',
    'grid',
    'hard-drive',
    'hash',
    'headphones',
    'heart',
    'help-circle',
    'hexagon',
    'home',
    'image',
    'inbox',
    'info',
    'instagram',
    'italic',
    'key',
    'layers',
    'layout',
    'life-buoy',
    'link',
    'link-2',
    'linkedin',
    'list',
    'loader',
    'lock',
    'log-in',
    'log-out',
    'mail',
    'map',
    'map-pin',
    'maximize',
    'maximize-2',
    'meh',
    'menu',
    'message-circle',
    'message-square',
    'mic',
    'mic-off',
    'minimize',
    'minimize-2',
    'minus',
    'minus-circle',
    'minus-square',
    'monitor',
    'moon',
    'more-horizontal',
    'more-vertical',
    'mouse-pointer',
    'move',
    'music',
    'navigation',
    'navigation-2',
    'nomes.txt',
    'octagon',
    'package',
    'paperclip',
    'pause',
    'pause-circle',
    'pen-tool',
    'percent',
    'phone',
    'phone-call',
    'phone-forwarded',
    'phone-incoming',
    'phone-missed',
    'phone-off',
    'phone-outgoing',
    'pie-chart',
    'play',
    'play-circle',
    'plus',
    'plus-circle',
    'plus-square',
    'pocket',
    'power',
    'printer',
    'radio',
    'refresh-ccw',
    'refresh-cw',
    'repeat',
    'rewind',
    'rotate-ccw',
    'rotate-cw',
    'rss',
    'save',
    'scissors',
    'search',
    'send',
    'server',
    'settings',
    'share',
    'share-2',
    'shield',
    'shield-off',
    'shopping-bag',
    'shopping-cart',
    'shuffle',
    'sidebar',
    'skip-back',
    'skip-forward',
    'slack',
    'slash',
    'sliders',
    'smartphone',
    'smile',
    'speaker',
    'square',
    'star',
    'stop-circle',
    'sun',
    'sunrise',
    'sunset',
    'tablet',
    'tag',
    'target',
    'terminal',
    'thermometer',
    'thumbs-down',
    'thumbs-up',
    'toggle-left',
    'toggle-right',
    'tool',
    'trash',
    'trash-2',
    'trello',
    'trending-down',
    'trending-up',
    'triangle',
    'truck',
    'tv',
    'twitch',
    'twitter',
    'type',
    'umbrella',
    'underline',
    'unlock',
    'upload',
    'upload-cloud',
    'user',
    'user-check',
    'user-minus',
    'user-plus',
    'users',
    'user-x',
    'video',
    'video-off',
    'voicemail',
    'volume',
    'volume-1',
    'volume-2',
    'volume-x',
    'watch',
    'wifi',
    'wifi-off',
    'wind',
    'x',
    'x-circle',
    'x-octagon',
    'x-square',
    'youtube',
    'zap',
    'zap-off',
    'zoom-in',
    'zoom-out'
  ]),
  /**
   * Inputed value
   */
  value: PropTypes.string,
  /**
   * Optional click handler
   */
  onClickRight: PropTypes.func,
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

export {
  TextField
};
