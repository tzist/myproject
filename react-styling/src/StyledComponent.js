import React from 'react';
import styled, { css } from 'styled-components';
/* 단순 변수의 형태가 아니라 여러줄의 스타일 구문을 조건부로 설정해야 하는 경우엔
css 를 불러와야합니다. 
*/

/*
const Box = styled.div`
  // props 로 넣어준 값을 직접 전달해줄 수 있습니다.
  background: ${props => props.color || 'blue'};
  padding: 1rem;
  display: flex;
  // 기본적으로는 1024px 에 가운데 정렬을 하고
  //  가로 크기가 작아짐에 따라 사이즈를 줄이고
  //  768px 미만으로 되면 꽉 채웁니다
  width: 1024px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
*/

const sizes = {
    desktop: 1024,
    tablet: 768
  };
  
  // 위에있는 size 객체에 따라 자동으로 media 쿼리 함수를 만들어줍니다.
  // 참고: https://www.styled-components.com/docs/advanced#media-templates
  // 지금은 media 를 StyledComponent.js 에서 만들어주긴 했지만, 
  // 실제로 사용한다면 아예 다로 다른 파일로 분리시켜서 여기저기서 불러와서 사용하는게 훨씬 편할 것.
  const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)};
      }
    `;
  
    return acc;
  }, {});
  
  const Box = styled.div`
    /* props 로 넣어준 값을 직접 전달해줄 수 있습니다. */
    background: ${props => props.color || 'blue'};
    padding: 1rem;
    display: flex;
    width: 1024px;
    margin: 0 auto;
    ${media.desktop`width: 768px;`}
    ${media.tablet`width: 768px;`};
  `;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  /* & 문자를 사용하여 Sass 처럼 자기 자신 선택 가능 */
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  /* 다음 코드는 inverted 값이 true 일 때 특정 스타일을 부여해줍니다. */
  /* 단순 변수의 형태가 아니라 여러줄의 스타일 구문을 조건부로 설정해야 하는 경우엔
css 를 불러와야합니다. 
*/
  ${props =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => (
  <Box color="black">
    <Button>안녕하세요</Button>
    <Button inverted={true}>테두리만</Button>
  </Box>
);

export default StyledComponent;