import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:5000/jobs', {
                headers: { Authorization: `Bearer ${token}` },
            });
            setJobs(response.data);
        };
        fetchJobs();
    }, []);

    return (
        <div>
            <h2>Your Job Applications</h2>
            <ul>
                {jobs.map((job) => (
                    <li key={job.id}>
                        {job.company} - {job.position} ({job.status})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
