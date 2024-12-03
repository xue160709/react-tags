import React, { useState } from 'react';
import './Tag.css';

type ColorOption = 
  'blue' | 'green' | 'red' | 'yellow' | 'purple' 
  | 'indigo' | 'pink' | 'gray' | 'orange' | 'teal'
  | 'black' | 'white'
  | 'custom'
  | 'gradient-blue' | 'gradient-purple' | 'gradient-green' 
  | 'gradient-sunset' | 'gradient-ocean';

type GradientConfig = {
  from: string;
  to: string;
  direction?: string;
};

export interface TagProps {
  text?: string;
  color?: ColorOption;
  customColor?: {
    text?: string;
    background?: string;
  } | string;
  onClose?: () => void;
  role?: string;
  ariaLabel?: string;
  tabIndex?: number;
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  tooltip?: string;
  borderRadius?: number | string;
  fadeOut?: boolean;
  gradient?: GradientConfig;
  fontSize?: string | number;
  fontWeight?: string | number;
  italic?: boolean;
  borderWidth?: number | string;
  noBorder?: boolean;
  opacity?: number;
  shadow?: boolean;
  interactive?: ('none' | 'pointer' | 'scale' | 'shine')[] | 'none' | 'pointer' | 'scale' | 'shine';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const Tag: React.FC<TagProps> = ({ 
  text, 
  children,
  color = 'blue', 
  customColor, 
  style,
  onClose,
  role = 'status',
  ariaLabel,
  tabIndex = 0,
  size = 'medium',
  icon,
  onClick,
  tooltip,
  borderRadius = '4px',
  fadeOut = false,
  gradient,
  fontSize,
  fontWeight,
  italic = false,
  borderWidth,
  noBorder = false,
  opacity = 100,
  shadow = false,
  interactive = 'none',
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  if (!isVisible) {
    return null;
  }

  const handleClose = () => {
    if (fadeOut) {
      setIsFading(true);
      setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, 300);
    } else {
      setIsVisible(false);
      onClose?.();
    }
  };

  const getTagClassName = () => {
    const classes = ['tag'];
    classes.push(`tag-${size}`);
    if (color !== 'custom') {
      classes.push(`tag-${color}`);
    }
    if (isFading) {
      classes.push('tag-fade-out');
    }
    
    if (interactive !== 'none') {
      classes.push('tag-interactive');
      if (Array.isArray(interactive)) {
        interactive.forEach(effect => {
          if (effect === 'scale') classes.push('tag-scale');
          if (effect === 'shine') classes.push('tag-shine');
        });
      } else {
        if (interactive === 'scale') classes.push('tag-scale');
        if (interactive === 'shine') classes.push('tag-shine');
      }
    }
    
    return classes.join(' ');
  };

  const getCustomStyle = () => {
    const calculatePadding = () => {
      if (!fontSize) return undefined;
      
      const fontSizeNum = parseInt(fontSize.toString());
      if (fontSizeNum <= 12) return '2px 8px';
      if (fontSizeNum <= 14) return '3px 10px';
      if (fontSizeNum <= 16) return '4px 12px';
      if (fontSizeNum <= 18) return '6px 14px';
      return '8px 16px';
    };

    const calculateCloseButtonSize = () => {
      if (!fontSize) return undefined;
      const fontSizeNum = parseInt(fontSize.toString());
      return `${fontSizeNum * 1.2}px`;
    };

    const baseStyle: React.CSSProperties = {
      borderRadius: borderRadius,
      fontSize: fontSize,
      fontWeight: fontWeight,
      padding: calculatePadding(),
      lineHeight: fontSize ? `${parseInt(fontSize.toString()) * 1.4}px` : undefined,
      fontStyle: italic ? 'italic' : undefined,
      border: noBorder ? 'none' : undefined,
      borderWidth: !noBorder && borderWidth ? borderWidth : undefined,
      '--close-button-size': calculateCloseButtonSize(),
      opacity: opacity / 100,
      boxShadow: shadow ? '0 2px 4px rgba(0, 0, 0, 0.1)' : undefined,
      marginRight: '4px',
      marginBottom: '4px',
      ...style,
    } as React.CSSProperties;

    if (gradient) {
      return {
        ...baseStyle,
        background: `linear-gradient(${gradient.direction || '45deg'}, ${gradient.from}, ${gradient.to})`,
        color: 'white',
        border: 'none',
      };
    }

    if (color === 'custom' && customColor) {
      const textColor = typeof customColor === 'string' ? customColor : customColor.text;
      const bgColor = typeof customColor === 'string' ? 'white' : (customColor.background || 'white');
      
      return {
        ...baseStyle,
        backgroundColor: bgColor,
        color: textColor,
        border: noBorder ? 'none' : `${borderWidth || 1}px solid ${textColor}40`,
        boxShadow: noBorder ? 'none' : undefined,
      };
    }

    return baseStyle;
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <span 
      className={getTagClassName()}
      style={getCustomStyle()}
      role={role}
      aria-label={ariaLabel || text || (typeof children === 'string' ? children : undefined)}
      tabIndex={tabIndex}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (onClose && (e.key === 'Backspace' || e.key === 'Delete')) {
          handleClose();
        }
        if (onClick && e.key === 'Enter') {
          onClick(e as unknown as React.MouseEvent<HTMLDivElement, MouseEvent>);
        }
      }}
      title={tooltip}
    >
      {icon && <span className="tag-icon">{icon}</span>}
      {children || text}
      {onClose && (
        <button 
          onClick={(e) => {
            e.stopPropagation();
            handleClose();
          }}
          aria-label="Remove tag"
          className="tag-close-button"
          onMouseOver={e => (e.currentTarget.style.opacity = '1')}
          onMouseOut={e => (e.currentTarget.style.opacity = '0.5')}
        >
          <span className="close-icon">×</span>
        </button>
      )}
    </span>
  );
};

export default Tag;

