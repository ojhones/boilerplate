import * as S from './styles';

export default function Main({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS e Styled Components',
}) {
  return (
    <S.Container>
      <S.Logo
        src="/images/svg/logo.svg"
        alt="imagem de um átomo e React Avancado escrito ao lado"
      />

      <S.Title>{title}</S.Title>

      <S.Description>{description}</S.Description>

      <S.Illustration
        src="/images/svg/illustration.svg"
        alt="Desenvolvedor de frente para tela com código"
      />
    </S.Container>
  );
}
