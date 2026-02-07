// pages/dashboard.js
import { useState, useEffect } from 'react';
import styled from 'styled-components';
const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    max-width: 600px;
    margin: auto;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
const Dashboard = () => {
    const [userName, setUserName] = useState('');
    useEffect(() => {
        if (typeof window !== 'undefined'){
            const storedUserName = localStorage.getItem('userName');
            setUserName(storedUserName);
        }
    }, []);
    
    return (
        <DashboardContainer>
            <h1>مرحبًا، {userName}</h1>
            <p>هذه هي لوحة التحكم الخاصة بك.</p>
        </DashboardContainer>
    );
};
export default Dashboard;