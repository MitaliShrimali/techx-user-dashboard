import styled from 'styled-components';

const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`;

export default Card;
