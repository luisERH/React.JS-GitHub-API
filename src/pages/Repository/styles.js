import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    background: -webkit-linear-gradient(1deg, black, Maroon);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 16px;
    text-decoration: none;
  }
  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }
  h1 {
    font-size: 24px;
    margin-top: 10px;
    background: -webkit-linear-gradient(1deg, black, Maroon);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    margin-top: 5px;
    font-size: 14px;
    background: -webkit-linear-gradient(1deg, black, Maroon);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;
  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;
    & + li {
      margin-top: 10px;
    }
    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }
    div {
      flex: 1;
      margin-left: 15px;
      strong {
        font-size: 16px;
        a {
          text-decoration: none;
          background: -webkit-linear-gradient(1deg, black, Maroon);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          &:hover {
            color: #7159c1;
          }
        }
        span {
          background: #ffcccc;
          color: #333;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }
      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;
