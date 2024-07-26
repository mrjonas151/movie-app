const SignButton = ( {title, onClick, className, Icon }: {title: string, className: string, onClick: () => void} ) => {

    return (
        <div className="button-container">
            <button 
                onClick={onClick} 
                className={`button ${className}`}> 
                {Icon && <Icon className="icon"/>}
                {title} 
            </button>
        </div>
    );
};

export default SignButton;
