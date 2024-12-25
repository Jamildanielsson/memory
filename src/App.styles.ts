import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 0.5rem;

    @media (max-width: 850px) {
grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
    @media (max-width: 440px) {
grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  }
    @media (max-width: 345px) {
grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  }


`;