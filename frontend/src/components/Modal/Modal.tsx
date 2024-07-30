import { useState } from "react";
import TitleBar from "../TitleBar";
import "./Modal.css";

interface ModalProps {
    isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, setModalOpen  }) => {

    const [title, setTitle] = useState<string>("");
    const [director, setDirector] = useState<string>("");
    const [duration, setDuration] = useState<number>();
    const [category, setCategory] = useState<string>("");
    const [releaseYear, setReleaseYear] = useState<number>();

    if(isOpen) {
        return (
            <div className="style-background">
                <div className="modal">
                <div className="top-bar">
                    <TitleBar title="Add new movie" />
                    <button onClick={setModalOpen} className="button-close">X</button>
                </div>
                <div className="modal-form">
                    <form>
                        <div className="form-group">
                            <label className="form-label" htmlFor="title">Title</label>
                            <input
                                className="form-input" 
                                type="text" 
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="director">Director</label>
                            <input
                                className="form-input" 
                                type="text" 
                                value={director}
                                onChange={(e) => setDirector(e.target.value)}
                            />
                        </div>
                        <div className="form-line">
                            <div className="form-group">
                                <label className="form-label" htmlFor="duration">Duration</label>
                                <input
                                    className="form-input-1" 
                                    type="number" 
                                    value={duration}
                                    onChange={(e) => setDuration(Number(e.target.value))}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="release-year">Release Year</label>
                                <input 
                                    className="form-input-1"
                                    type="number" 
                                    value={releaseYear}
                                    onChange={(e) => setReleaseYear(Number(e.target.value))}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="category">Category</label>
                            <select
                                className="form-select"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}>
                                <option className="custom-option" value="">Select a category</option>
                                <option value="Action">Action</option>
                                <option value="Adventure">Adventure</option>
                                <option value="Animation">Animation</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Crime">Crime</option>
                                <option value="Drama">Drama</option>
                                <option value="Fantasy">Fantasy</option>
                                <option value="Horror">Horror</option>
                                <option value="Sci-Fi">Sci-Fi</option>
                                <option value="Romance">Romance</option>
                            </select>
                        </div>
                        <div className="end-button">
                            <button className="button-modal">Save</button>
                        </div>
                    </form>
                </div>    
                </div>
            </div>
            
        );
    }

    return null;
 
}

export default Modal;
