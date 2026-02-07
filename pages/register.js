
// pages/register.js
import { useForm } from 'react-hook-form';
import axios from 'axios';
import styled from 'styled-components';
import { useState } from 'react';

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
const Register = () => {
    const { register, handleSubmit } = useForm();
    const [errors, setErrors] = useState(null);
    const onSubmit = async (data) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/register`, {
                name: data.fullName,
                email: data.email,
                mobile: data.phoneNumber,
                password: data.password,
                password_confirmation: data.passwordConfirmation,
                mobile_country_code: data.countryCode,
            });
            console.log(response.data);
            
            localStorage.setItem('userName', response.data.data.name);
            // إعادة التوجيه إلى صفحة تسجيل الدخول
            window.location.href = '/verify';
        } catch (error) {
            if (error.response && error.response.status === 422) {
      const newH1 = document.createElement("h3"); // Create a new h1 element
const h1Text = document.createTextNode(error.response.data.message); // Create the text content
newH1.appendChild(h1Text);
document.body.appendChild(newH1); 
    }
    else if (error.response && error.response.status === 400) {
   const newH1 = document.createElement("h3"); // Create a new h1 element
const h1Text = document.createTextNode(error.response.data.message); // Create the text content
newH1.appendChild(h1Text);
document.body.appendChild(newH1); 
    } else {
      setErrors('there is error');
    }
        }
    };
    return (
        <FormContainer dir = "rtl" style = {{direction: 'rtl'}}>
            <h1>تسجيل مستخدم جديد</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input {...register('fullName')} placeholder="الاسم الكامل" required />
                <Input {...register('email')} type="email" placeholder="البريد الإلكتروني" required />
                <Input {...register('phoneNumber')} placeholder="رقم الهاتف" required />
                <Input {...register('password')} type="password" placeholder="كلمة المرور" required />
                <Input {...register('passwordConfirmation')} type="password" placeholder="تأكيد كلمة المرور" required />
                <Input {...register('countryCode')} placeholder="رمز الدولة" required />
                <Button type="submit">تسجيل</Button>
            </form>
        </FormContainer>
    );
};
export default Register;