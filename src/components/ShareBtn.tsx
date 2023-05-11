import styled from 'styled-components';

interface ButtonProps {
  readonly buttonType: string;
  readonly preference: string;
  onClick: () => void;
}
interface ImageProps {
    readonly preference: string;
}

const ButtonBlue = styled.button<ImageProps>`
    width: ${props => props.preference === 'true' ? '80px' : '50px'};
    height: ${props => props.preference === 'true' ? '80px' : '50px'};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: ${props => props.preference === 'true' ? '40px' : '25px'};
    background: ${props => props.preference === 'true' ? 'linear-gradient(280deg,#063BAB, #236BFE)' : '#FFFFFF'};
`;

const ButtonRed = styled(ButtonBlue)`
    background: ${props => props.preference === 'true' ? 'linear-gradient(100deg,#AA3300, #EE1144)' : '#FFFFFF'};
`;

const IconShareBlue = styled.img<ImageProps>`
    width: ${props => props.preference === 'true' ? '40px' : '20px'};
    height: ${props => props.preference === 'true' ? '40px' : '20px'};
    filter: ${props => props.preference === 'true' ?
        'invert(0%) sepia(0) brightness(1) saturate(80) hue-rotate(230deg)':
        'invert(40%) sepia(0.9) brightness(0.8) saturate(80) hue-rotate(230deg)'};
`;

const IconShareRed = styled(IconShareBlue)`
    filter: ${props => props.preference === 'true' ?
        'invert(0%) sepia(0) brightness(1) saturate(80) hue-rotate(0deg)':
        'invert(40%) sepia(0.9) brightness(0.8) saturate(80) hue-rotate(0deg)'};
`;

export default function ShareBtn(props: ButtonProps) {
    return props.buttonType === 'like' ?
        <ButtonBlue preference={props.preference} onClick={props.onClick}><IconShareBlue preference={props.preference} src='../src/assets/like.svg' /></ButtonBlue>:
        <ButtonRed preference={props.preference} onClick={props.onClick}><IconShareRed preference={props.preference} src='../src/assets/dislike.svg' /></ButtonRed>;
}