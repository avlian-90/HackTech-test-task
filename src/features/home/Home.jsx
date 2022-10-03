import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { objectivesAsync } from './objectivesSlice';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {objectives} = useSelector(state => state.objectives)

    useEffect(() => {
        dispatch(objectivesAsync())
    }, [dispatch])

    const logOut = () => {
        localStorage.removeItem("access-token");
        navigate("/login")
    }

    return (
        <>
            <div className="App">
                <h1>Test - Task</h1>
                <button onClick={logOut}>Log Out</button>
            </div>
            <div className={styles.mainContainer}>
                {objectives.map(objective => <div key={objective.id} className={styles.container}>
                    <p><span>Name: </span>{objective.name}</p>
                    <p><span>Owner Name: </span>{objective.owner_full_name}</p>
                    <p><span>Deadline Year: </span>{objective.deadline_year}</p>
                    <p><span>State: </span>{objective.state}</p>
                    <p><span>Status: </span>{objective.status}</p>
                </div>)}
            </div>
        </>
    )
}

export default Home;