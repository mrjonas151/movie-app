import "./TitleBar.css";

const TitleBar = ( {title}: {title: string}) => {
    return <div className="title-container"><h1>{title}</h1></div>;
};

export default TitleBar;
