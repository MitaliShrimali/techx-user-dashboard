import styled from 'styled-components';

const Button = styled.button`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.sm};
  border: none;
  font-size: ${({ theme }) => theme.typography.body};
  cursor: pointer;
  background: ${({ variant, theme }) =>
    variant === 'danger' ? theme.colors.danger : theme.colors.primary};
  color: white;

  &:hover {
    opacity: 0.9;
  }
`;

export default Button;
