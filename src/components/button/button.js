import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import ButtonGroup from './components/button-group';
import Element from '../element';
import renderAsShape from '../../modifiers/render-as';

const colors = [null, ''].concat(Object.values(CONSTANTS.COLORS));

const Button = ({
  children,
  className,
  renderAs,
  color,
  size,
  outlined,
  inverted,
  state,
  submit,
  reset,
  fullwidth,
  loading,
  disabled,
  remove,
  isSelected,
  isStatic,
  rounded,
  onClick,
  text,
  ...props
}) => {
  // let Element = isStatic ? 'span' : renderAs;
  let otherProps = {};
  if (submit) {
    otherProps = {
      type: 'submit',
      renderAs: renderAs || 'button',
    };
  }
  if (reset) {
    otherProps = {
      type: 'reset',
      renderAs: renderAs || 'button',
    };
  }

  if (isStatic) {
    otherProps = {
      renderAs: 'span',
    };
  }

  return (
    <Element
      tabIndex={disabled ? -1 : 0}
      renderAs={renderAs}
      {...props}
      {...otherProps}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      className={classnames(className, {
        [`is-${color}`]: color,
        [`is-${size}`]: size,
        [`is-${state}`]: state,
        'is-selected': isSelected,
        'is-static': isStatic,
        'is-rounded': rounded,
        'is-outlined': outlined,
        'is-inverted': inverted,
        'is-fullwidth': fullwidth,
        // 'is-loading': loading,
        'is-text': text,
        delete: remove,
        button: !remove,
      })}
    >
      {children}
    </Element>
  );
};

Button.Group = ButtonGroup;

Button.propTypes = {
  ...modifiers.propTypes,
  /**
   * Children of Button.
   */
  children: PropTypes.node,
  /**
   * Additional CSS classes to pass to Button.
   */
  className: PropTypes.string,
  /**
   * React style object for Button.
   */
  style: PropTypes.shape({}),
  /**
   * A custom component that Button should be rendered as.
   */
  renderAs: renderAsShape,
  /**
   * Callback function when Button is clicked.
   */
  onClick: PropTypes.func,
  /**
   * Color of Button
   */
  color: PropTypes.oneOf(colors),
  /**
   * Size of Button
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * State of Button.
   */
  state: PropTypes.oneOf(['hover', 'focus', 'active', 'loading']),
  /**
   * Whether Button should have an outline.
   */
  outlined: PropTypes.bool,
  /**
   * Whether Button should have an inverted color scheme. Useful when button is used on colored background
   */
  inverted: PropTypes.bool,
  submit: PropTypes.bool,
  reset: PropTypes.bool,
  loading: PropTypes.bool,
  /**
   * Whether Button should occupy the full width of parent
   */
  fullwidth: PropTypes.bool,
  disabled: PropTypes.bool,
  remove: PropTypes.bool,
  /**
   * Whether Button is selected. Useful in a Button.Group.
   */
  isSelected: PropTypes.bool,
  /**
   * Whether Button is non-interactive/static.
   */
  isStatic: PropTypes.bool,
  /**
   * Whether Button should have fully-rounded corners
   */
  rounded: PropTypes.bool,
  /**
   * Whether Button is a text button.
   */
  text: PropTypes.bool,
};

Button.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'button',
  onClick: () => null,
  color: undefined,
  size: undefined,
  state: undefined,
  outlined: false,
  inverted: false,
  submit: false,
  reset: false,
  fullwidth: false,
  loading: false,
  disabled: false,
  remove: false,
  isSelected: false,
  isStatic: false,
  rounded: false,
  text: false,
};

export default Button;
