import React, { useState } from 'react';
import './Tag.css';

type ColorOption = 
  'blue' | 'green' | 'red' | 'yellow' | 'purple' 
  | 'indigo' | 'pink' | 'gray' | 'orange' | 'teal'
  | 'custom'
  | 'gradient-blue' | 'gradient-purple' | 'gradient-green' 
  | 'gradient-sunset' | 'gradient-ocean';

type GradientConfig = {
  from: string;
  to: string;
  direction?: string;
};

interface TagProps {
  text: string;
  color?: ColorOption;
  customColor?: string;
  onClose?: () => void;
  role?: string;
  ariaLabel?: string;
  tabIndex?: number;
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
  clickable?: boolean;
  onClick?: () => void;
  tooltip?: string;
  borderRadius?: number | string;
  fadeOut?: boolean;
  gradient?: GradientConfig;
  fontSize?: string | number;
  fontWeight?: string | number;
}

const Tag: React.FC<TagProps> = ({ 
  text, 
  color = 'blue', 
  customColor, 
  onClose,
  role = 'status',
  ariaLabel,
  tabIndex = 0,
  size = 'medium',
  icon,
  clickable = false,
  onClick,
  tooltip,
  borderRadius = '4px',
  fadeOut = false,
  gradient,
  fontSize,
  fontWeight,
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
    if (clickable) {
      classes.push('tag-clickable');
    }
    if (isFading) {
      classes.push('tag-fade-out');
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

    const baseStyle: React.CSSProperties = {
      borderRadius: borderRadius,
      fontSize: fontSize,
      fontWeight: fontWeight,
      padding: calculatePadding(),
      lineHeight: fontSize ? `${parseInt(fontSize.toString()) * 1.4}px` : undefined,
    };

    if (gradient) {
      return {
        ...baseStyle,
        background: `linear-gradient(${gradient.direction || '45deg'}, ${gradient.from}, ${gradient.to})`,
        color: 'white',
        border: 'none',
      };
    }

    if (color === 'custom' && customColor) {
      return {
        ...baseStyle,
        backgroundColor: `${customColor}20`,
        color: customColor,
        border: `1px solid ${customColor}40`,
      };
    }

    return baseStyle;
  };

  return (
    <span 
      className={getTagClassName()}
      style={getCustomStyle()}
      role={role}
      aria-label={ariaLabel || text}
      tabIndex={tabIndex}
      onClick={clickable ? onClick : undefined}
      onKeyDown={(e) => {
        if (onClose && (e.key === 'Backspace' || e.key === 'Delete')) {
          handleClose();
        }
        if (clickable && e.key === 'Enter' && onClick) {
          onClick();
        }
      }}
      title={tooltip}
    >
      {icon && <span className="tag-icon">{icon}</span>}
      {text}
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

