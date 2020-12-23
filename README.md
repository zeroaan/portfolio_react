# portfolio_react

- https://zeroaan.github.io/portfolio_react/
- 기간 : 2020.12.17 ~ 2020.12.21
- 소개 : React로 만든 포트폴리오 사이트
- 사용 기술 : react, react-router, typescript, styled-components

![mainGif](https://user-images.githubusercontent.com/48481448/102965290-e523af80-4530-11eb-8899-28ac201ef088.gif)

<br />

## 페이지 구성

- 페이지는 총 6페이지로 Home, About, Profile, Skill, Contact, Project로 이루어져 있다.
  <br/>

### Home

![main](https://user-images.githubusercontent.com/48481448/102964672-8447a780-452f-11eb-9041-58840131042e.png)
<br />

#### src/pages/Home.tsx

- keyframes을 통해 width를 조정해 줌으로써 글자가 타이핑 되는 듯한 효과를 주었다.

```ts
const typing = keyframes`
  0%, 80%, 100% {
    max-width: 0%;
  }
  30%, 50%, 60% {
    max-width: 100%;
  }
`;
const blinkTyping = keyframes`
    0%, 100%{
      border-color: transparent;
    }
    50% {
      border-color: white;
    }
`;
```

<br />

### About(Profile, Skill, Contact)

![about](https://user-images.githubusercontent.com/48481448/102965728-c4a82500-4531-11eb-907c-6bd323d79a9c.png)

- 페이지 이동 시 부드러운 전환을 위해 페이지마다 fadeIn animation을 적용시켰다.

```ts
const fadeIn = keyframes` 
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
```

<br />

### Profile

- 내가 하고자 하는 일에 대한 생각과 간략한 소개를 적어 놓았다.

![profile](https://user-images.githubusercontent.com/48481448/102965824-fa4d0e00-4531-11eb-85b4-a6fa5855e829.png)

<br />

### Skill

- 내가 사용하는 주 언어, 기술에 대해서 나열하였으며, 그 밑으로는 기초 지식 습득 또는 현재 공부 중인 기술들을 적어놓았다.

![skill](https://user-images.githubusercontent.com/48481448/102966195-beff0f00-4532-11eb-96d8-122a52ceac45.png)

<br />

### Contact

- 나의 이름, 이메일 주소, 깃허브 주소를 Console 창처럼 보이도록 만들어 보았다.

![contact](https://user-images.githubusercontent.com/48481448/102966272-ebb32680-4532-11eb-96db-c0771f8b62b4.png)

<br />

### Project

- 공부했던 프로젝트들을 나열했으며, 클릭 시 해당 github로 이동한다.

![project](https://user-images.githubusercontent.com/48481448/102966640-a7745600-4533-11eb-9823-ee5f9de974d1.png)
