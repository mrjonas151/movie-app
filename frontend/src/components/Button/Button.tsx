import React from 'react'

interface ButtonProps {
    title: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    Icon?: React.ElementType;
}

const Button: React.FC<ButtonProps> = ( {title, onClick, className, Icon }: ButtonProps ) => {
  return (
    <div>
      <button 
        type="button"
        onClick={onClick}
        className={className}>
        {Icon && <Icon className="icon"/>}
        {title}
        </button>
    </div>
  )
}

export default Button
