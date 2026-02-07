// pages/verify.js
import { useForm } from 'react-hook-form';
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
const Verify = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        if (data.code === '123456') {
            // إعادة التوجيه إلى لوحة التحكم
            window.location.href = '/dashboard';
        } else {
            alert('رمز التحقق غير صحيح');
        }
    };
    return (
        <FormContainer>
            <h1>التحقق من الحساب</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input {...register('code')} placeholder="رمز التحقق" required />
                <Button type="submit">تحقق</Button>
            </form>
        </FormContainer>
    );
};
export default Verify;
