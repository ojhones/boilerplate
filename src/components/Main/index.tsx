import * as S from './styles';

export default function Main() {
  return (
    <S.Container>
      <S.Logo
        src="/images/svg/logo.svg"
        alt="imagem de um átomo e React Avancado escrito ao lado"
      />

      <S.Title>React Avançado</S.Title>

      <S.Description>
        Typescript, ReactJS, ReactJS e Styled Components
      </S.Description>

      <S.Illustration
        src="/images/svg/illustration.svg"
        alt="Desenvolvedor de frente para tela com código"
      />
    </S.Container>
  );
}
