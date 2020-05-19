import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;
  h1 {
    font-size: 20px;
    background: -webkit-linear-gradient(150deg, black, Maroon);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    svg {
      margin-right: 10px;
    }
  }
`;

export default Container;
