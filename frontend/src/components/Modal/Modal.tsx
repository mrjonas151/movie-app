import { useState } from "react";
import TitleBar from "../TitleBar/TitleBar";
import axios from "axios";
import styles from "./Modal.module.css"
import { getAuth } from "firebase/auth";

//const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYmUwNmI1ZDdjMmE3YzA0NDU2MzA2MWZmMGZlYTM3NzQwYjg2YmMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY2hhbGxlbmdlMi0yMzU3YSIsImF1ZCI6ImNoYWxsZW5nZTItMjM1N2EiLCJhdXRoX3RpbWUiOjE3MjI1MjI2NDMsInVzZXJfaWQiOiJHc0lLWjZySk5BVVkydDRacXNPTXo2ZFp5QnUyIiwic3ViIjoiR3NJS1o2ckpOQVVZMnQ0WnFzT016NmRaeUJ1MiIsImlhdCI6MTcyMjUyMjY2MCwiZXhwIjoxNzIyNTI2MjYwLCJlbWFpbCI6Im1vdmllQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJtb3ZpZUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.gwPwS7WaUKiE27vjtgiWdGZkQly7dA7oAtQmqPD7PwXP9n0QxjVRYi1G1N6LVhFOnjTu611wdZT3jPHqkIrQ2EyqLEGiQ5-yE_B7q7E56UOtMzg1YQUhUi5pXSh7oEUU8lKb0gIVK96Dn0jCWbXQGwrTSb9Yol1eEB5Y3_qLtG3m7Ok4S3qC_joAfbXagOlwvnlAc3YAyPQsxL-4Vv3_ECTx5_TGhZuYoSLKACiJ23v2Kepy_7hyUj_nn6aiN8cJ4xJOc1NJzyVNYb2QqYV3gJj0qECGgYfLIADQ9YS5Ofj_T-nC7U6zuoYkDhVKOfhoTrlzBb1SWRkuSfR_b4ob9g"

interface ModalProps {
    isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, setModalOpen  }) => {

    const [title, setTitle] = useState<string>("");
    const [director, setDirector] = useState<string>("");
    const [duration, setDuration] = useState<number>(0);
    const [category, setCategory] = useState<string>("");
    const [releaseYear, setReleaseYear] = useState<number>(0);

    

    async function getTokenId() {
        try {
            const auth = getAuth();
            const user = auth.currentUser;

            if(user) {
                const token = await user.getIdToken();
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();

        let token;

        try {
            const auth = getAuth();
            const user = auth.currentUser;

            if(user) {
                token = await user.getIdToken();
            }
        } catch (error) {
            console.log(error);
        }

        const axiosConfig = await {headers: { 'Authorization': `Bearer ${token}` }};

        const movieObj = {
            title: title,
            director: director,
            duration: duration,
            release_year: releaseYear,
            category: category
        }

        try {
            const response = await axios.post("http://localhost:3333/users/movies", movieObj, axiosConfig);
            console.log(movieObj);
            console.log(response.data)
            setTitle("");
            setDirector("");
            setDuration(0);
            setCategory("");
            setReleaseYear(0);
        } catch (error) {
            console.log(movieObj);
            console.log(error);
        } 
    };

    if(isOpen) {
        return (
            <div className={styles.containerBackground}>
                <div className={styles.modal}>
                <div className={styles.topBar}>
                    <TitleBar title="Add new movie" />
                    <button onClick={setModalOpen} className={styles.buttonClose}>X</button>
                </div>
                <div className={styles.modalForm}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label className={styles.formLabel} htmlFor="title">Title</label>
                            <input
                                className={styles.formInput}
                                type="text" 
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.formLabel} htmlFor="director">Director</label>
                            <input
                                className={styles.formInput} 
                                type="text" 
                                value={director}
                                onChange={(e) => setDirector(e.target.value)}
                            />
                        </div>
                        <div className={styles.formLine}>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel} htmlFor="duration">Duration</label>
                                <input
                                    className={styles.formInputSameLine} 
                                    type="number" 
                                    value={duration}
                                    onChange={(e) => setDuration(Number(e.target.value))}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel} htmlFor="release-year">Release Year</label>
                                <input 
                                    className={styles.formInputSameLine}
                                    type="number" 
                                    value={releaseYear}
                                    onChange={(e) => setReleaseYear(Number(e.target.value))}
                                />
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.formLabel} htmlFor="category">Category</label>
                            <select
                                className={styles.formSelect}
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}>
                                <option className={styles.customOption} value="">Select a category</option>
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
                        <div className={styles.endButton}>
                            <button type="submit" className={styles.buttonModal}>Save</button>
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
