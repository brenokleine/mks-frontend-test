import styled from 'styled-components';
import { colors } from '@/styles/colors.js';

interface ButtonProps {
    default?: boolean;
}

const Button = styled.button<ButtonProps>`
    background-color: ${props => props.default ? colors.primary : 'transparent'};
    color: ${props => props.default ? 'white' : colors.primary};
    border: ${props => props.default ? 'none' : `1px solid ${colors.primary}`};
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
