import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [actresses, setActresses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('https://freetestapi.com/api/v1/actresses');
            setActresses(res.data);
        };
    
        fetchData();
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Actresses Information</h1>
            <div className="card-grid">
                {actresses.map((actress) => (
                    <div key={actress.id} className="card">
                        <img 
                            src={actress.image} 
                            className="card-img-top" 
                            alt={actress.name} 
                        />
                        <div className="card-body">
                            <h5 className="card-title">{actress.name}</h5>
                            <p className="card-text"><small className="text-muted">{actress.biography}</small></p>
                            <p className="card-text">Birth Year : {actress.birth_year}</p>
                            {actress.death_year && <p className="card-text">Death Year : {actress.death_year}</p>}
                            <p className="card-text">Nationality : {actress.nationality}</p>
                            {Array.isArray(actress.most_famous_movies) && (
                                <div className="card-text">
                                    <p>Most Famous Movies</p>
                                    <ul>
                                        {actress.most_famous_movies.map((movie, index) => (
                                            <li key={index}>{movie}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <p className="card-text"> Awards
                                <ul>
                                    {actress.awards && (
                                    actress.awards.split(',').map((award, index) => (
                                        <li key={index}>{award.trim()}</li>
                                        ))
                                     )}
                                </ul>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
