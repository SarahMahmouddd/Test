// pages/login.js
import { useForm } from 'react-hook-form';
import axios from 'axios';
import styled from 'styled-components';
const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    max-width: 400px;
    margin: auto;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
`;
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #0070f3;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #005bb5;
    }
`;
const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
                email: data.email,
                password: data.password,
            });
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userName', response.data.name);
            // إعادة التوجيه إلى لوحة التحكم
            window.location.href = '/dashboard';
        } catch (error) {
             if (error.response && error.response.status === 422) {
      console.error('Validation errors:', error.response.data); // This is key
    }
    else if (error.response && error.response.status === 404) {
      console.error('errors:', error.response.data); // This is key
    } else {
      console.error('Other error:', error.message);
    }
        }
    };
    return (
        <FormContainer>
            <h1>تسجيل الدخول</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input {...register('email')} type="email" placeholder="البريد الإلكتروني" required />
                <Input {...register('password')} type="password" placeholder="كلمة المرور" required />
                <Button type="submit">تسجيل الدخول</Button>
            </form>
        </FormContainer>
    );
};
export default Login;
