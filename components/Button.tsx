import styled from 'styled-components';

interface ButtonProps {
    default?: boolean;
}

//bg-[#0f52ba] w-full rounded-b-xl flex justify-center items-center gap-3 p-2 mt-auto
const Button = styled.button<ButtonProps>`
    background-color: ${props => props.default ? '#0f52ba' : 'transparent'};
    color: ${props => props.default ? 'white' : '#0f52ba'};
    border: ${props => props.default ? 'none' : '1px solid #0f52ba'};
    border-radius: ${props => props.default ? '0px 0px 10px 10px' : '10px'};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 0.5rem 1rem;
    margin-top: auto;
    cursor: pointer;
    transition: background-color 0.3s;
    
    &:hover {
        background-color: ${props => props.default ? '#0d459a' : '#0d459a'};
        color: white;
    }
`;

export default Button;
