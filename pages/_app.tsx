import type { AppProps } from 'next/app';
import Link from 'next/link';
import Image from 'next/image';
import { AnimateSharedLayout } from 'framer-motion';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../components/globalStyles';
import { lightTheme, darkTheme } from '../components/Theme';
import useStore, { Theme } from '../lib/store';
import ThemeToggle from '../components/ThemeToggle';
import '@fontsource/roboto-condensed/300.css';
import '@fontsource/roboto-condensed/700.css';
import '@fontsource/noto-serif/700.css';
import '@fontsource/raleway/400.css';
import '@fontsource/quicksand/700.css';

function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = useStore();

  return (
    <AnimateSharedLayout>
      {/* FIXME: do both of these components need the theme? */}
      <ThemeProvider theme={theme === Theme.light ? lightTheme : darkTheme}>
        <GlobalStyles theme={theme === Theme.light ? lightTheme : darkTheme} />
        <ContainerOuter>
          <ContainerInner>
            <div>
              <header>
                <SpacedFlexRow>
                  <Avatar
                    src='/img/avatar.jpg'
                    alt='Christopher Ehrlich face'
                    width={128}
                    height={128}
                  />
                  <ThemeToggle />
                </SpacedFlexRow>

                <HelloText>Hi, I&apos;m Christopher.</HelloText>
                <NavLinks>
                  <Link href='/' passHref>
                    <NavLink>Home</NavLink>
                  </Link>
                  <Link href='/projects' passHref>
                    <NavLink>Projects</NavLink>
                  </Link>
                  <Link href='/blog' passHref>
                    <NavLink>Blog</NavLink>
                  </Link>
                  <Link href='/contact' passHref>
                    <NavLink>Contact</NavLink>
                  </Link>
                </NavLinks>
              </header>
              <Component {...pageProps} />
            </div>

            <Footer>
              © 2016-{new Date().getFullYear()} Christopher Ehrlich · Powered by{' '}
              <Link href='https://nextjs.org'>
                <a>Next.js</a>
              </Link>
            </Footer>
          </ContainerInner>
        </ContainerOuter>
      </ThemeProvider>
    </AnimateSharedLayout>
  );
}

const Avatar = styled(Image)`
  border-radius: 50%;
`;

const HelloText = styled.h1`
  font-family: 'Noto Serif';
  font-weight: 700;
`;

const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  width: 100%;
  max-width: 960px;
  padding: 32px 16px 16px 16px;
`;

const ContainerOuter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Footer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 32px;
  font-family: 'Roboto Condensed';
  font-weight: 300px;
  font-size: 16px;
`;

const NavLinks = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const NavLink = styled.a`
  font-family: 'Roboto Condensed';
  font-weight: 700;
  text-transform: uppercase;
`

const SpacedFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default MyApp;
