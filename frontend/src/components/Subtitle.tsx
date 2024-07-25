import "./Subtitle.css";

const Subtitle = ( {title, text }: {title: string, text: string}) => {
    return (
        <div className="subtitle-container">
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );
};

export default Subtitle;
