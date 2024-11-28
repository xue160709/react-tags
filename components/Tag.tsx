import React, { useState } from 'react';
import './Tag.css';

type ColorOption = 
  'blue' | 'green' | 'red' | 'yellow' | 'purple' 
  | 'indigo' | 'pink' | 'gray' | 'orange' | 'teal'
  | 'custom'
  | 'gradient-blue' | 'gradient-purple' | 'gradient-green' 
  | 'gradient-sunset' | 'gradient-ocean';

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
  fadeOut = false
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

  const customStyle = {
    ...(color === 'custom' && customColor ? {
      backgroundColor: `${customColor}20`,
      color: customColor,
      border: `1px solid ${customColor}40`,
    } : {}),
    borderRadius: borderRadius
  };

  return (
    <span 
      className={getTagClassName()}
      style={customStyle}
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

