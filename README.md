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

#### src/pages/Profile.tsx

- profileData를 가져와 id, title, dese를 ProfileContent로 전달한다.

```tsx
const Profile = () => {
  return (
    <AboutLayout title="Profile">
      <DivStyle>
        <H1WhoAmI>WHO AM I</H1WhoAmI>
        <DivProfile>
          {ProfileData.map((v) => (
            <ProfileContent key={v.id} title={v.title} desc={v.desc} />
          ))}
        </DivProfile>
      </DivStyle>
    </AboutLayout>
  );
};
```

<br />

#### src/components/profile/ProfileContent.tsx

```tsx
interface Props {
  title: string;
  desc: string;
}

const ProfileContent: React.FC<Props> = ({ title, desc }) => {
  return (
    <DivData>
      <DivTitle>
        <PTitle>{title}</PTitle>
      </DivTitle>
      <PDesc>{desc}</PDesc>
    </DivData>
  );
};
```

<br />

### Skill

- 내가 사용하는 주 언어, 기술에 대해서 나열하였으며, 그 밑으로는 기초 지식 습득 또는 현재 공부 중인 기술들을 적어놓았다.

![skill](https://user-images.githubusercontent.com/48481448/102966195-beff0f00-4532-11eb-96d8-122a52ceac45.png)
<br />

#### src/pages/Skill.tsx

- react, typescript, redux의 이미지를 나열하고, 다른 skills 들은 SkillContent 컴포넌트에서 관리한다.

```tsx
const Skill = () => {
  return (
    <AboutLayout title="Skill">
      <DivStyle>
        <DivSkills>
          <DivBlur />
          <ImgSkill src={REACT} alt="REACT" />
          <PSkill>React</PSkill>
        </DivSkills>
        <DivSkills>
          <DivBlur />
          <ImgSkill src={TYPESCRIPT} alt="TYPESCRIPT" />
          <PSkill>Typescript</PSkill>
        </DivSkills>
        <DivSkills>
          <DivBlur />
          <ImgSkill src={REDUX} alt="REDUX" />
          <PSkill>Redux</PSkill>
        </DivSkills>
      </DivStyle>

      <SkillContent />
    </AboutLayout>
  );
};
```

<br />

#### src/components/skill/SkillContent.tsx

- SkillData와 EtcData(기본지식 습득 & 공부중인 기술)을 가져와 나열해준다.

```tsx
const SkillContent = () => {
  return (
    <>
      <DivSkills>
        {SkillData.map((v) => (
          <PSkill key={v}>{v}</PSkill>
        ))}
      </DivSkills>
      <DivEtcSkills>
        <SkillEtc />
        <DivSkills>
          {EtcData.map((v) => (
            <PSkill key={v}>{v}</PSkill>
          ))}
        </DivSkills>
      </DivEtcSkills>
    </>
  );
};
```

<br />

### Contact

- 나의 이름, 이메일 주소, 깃허브 주소를 Console 창처럼 보이도록 만들어 보았다.

![contact](https://user-images.githubusercontent.com/48481448/102966272-ebb32680-4532-11eb-96db-c0771f8b62b4.png)
<br />

#### src/pages/Contact.tsx

```tsx
const Contact = () => {
  return (
    <AboutLayout title="Contact">
      <DivStyle>
        <ContactMenu />
        <DivConsole>
          <ContactConsole />
          <DivBlinkInput>
            {"> "} <DivBlink />
          </DivBlinkInput>
        </DivConsole>
      </DivStyle>
    </AboutLayout>
  );
};
```

<br />

#### src/components/ContactConsole.tsx

- contactData를 가져와 input과 output 를 보여준다. github일 때는 링크로 설정해준다.

```tsx
const ContactConsole = () => {
  return (
    <>
      {contactData.map((v) => (
        <DivBorder key={v.input}>
          <PInput>{"> " + v.input}</PInput>
          {v.input === `zeroaan.github` ? (
            <a href="http://github.com/zeroaan" target="_blank" rel="noreferrer">
              <POutput>{"< " + v.output}</POutput>
            </a>
          ) : (
            <POutput>{"< " + v.output}</POutput>
          )}
        </DivBorder>
      ))}
    </>
  );
};
```

<br />

### Project

- 공부했던 프로젝트들을 나열했으며, 클릭 시 해당 github로 이동한다.

![project](https://user-images.githubusercontent.com/48481448/102966640-a7745600-4533-11eb-9823-ee5f9de974d1.png)
<br />

#### src/pages/Project.tsx

- ProjectData에서 프로젝트 이미지, 제목, 설명을 나열한다.

```tsx
const Project = () => {
  return (
    <Layout>
      <PGithub>Click to go to the GitHub</PGithub>
      <DivContainer>
        {ProjectData.map((v) => (
          <AProjects key={v.id} href={v.github} target="_blank">
            <DivProImg src={v.src} alt={v.title} />
            <DivProBack>
              <PTitle>{v.title}</PTitle>
              <PSubTitle>{v.subTitle}</PSubTitle>
            </DivProBack>
          </AProjects>
        ))}
      </DivContainer>
    </Layout>
  );
};
```

<br />

## Components

- 주된 components로 Navbar와 Layout이 있다.

<br />

### Navbar

- useLocation hook을 통해 현재 페이지일 때 border와 color를 조정해주었다.
  <br />

#### src/components/navbar/Navbar.tsx

```tsx
const LinkStyled = styled(Link)<{ $current: boolean }>`
  padding: 12px 30px;
  font-size: 18px;
  text-align: center;
  opacity: ${(props) => (props.$current ? 1 : 0.5)};
  border-bottom: 5px solid ${(props) => (props.$current ? "rgb(60, 173, 212)" : "transparent")};
  transition: all 0.3s linear;
  &:hover {
    opacity: 1;
  }
`;

// 생략

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <>
      <DivStyled>
        <ImgLogo src={LOGO} alt="LOGO" />
        <div>
          <LinkStyled to="/" $current={pathname === "/"}>
            Home
          </LinkStyled>
          <LinkStyled to="/about" $current={pathname === "/about"}>
            About
          </LinkStyled>
          <LinkStyled to="/project" $current={pathname === "/project"}>
            Project
          </LinkStyled>
        </div>
        <AGithub href="https://github.com/zeroaan" target="_blank">
          <ImgGithub src={GITHUB} alt="GITHUB" />
        </AGithub>
      </DivStyled>
    </>
  );
};
```

<br />

### Layout

- 각 페이지에서 Navbar가 모두 포함되도록 Layout 컴포넌트를 만들어 주었다.
  <br/>

#### src/components/layout/Layout.tsx

```tsx
import React from "react";
import Navbar from "components/navbar/Navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
```
