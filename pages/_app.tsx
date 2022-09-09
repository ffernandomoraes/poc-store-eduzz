import { CacheProvider, EmotionCache } from '@emotion/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { HoustonThemeProps } from '@eduzz/houston-styles';
import createTheme from '@eduzz/houston-styles/createTheme';
import ThemeProvider from '@eduzz/houston-ui/ThemeProvider';

import createEmotionCache from '../src/utils/createThemeCache';

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache
}: AppProps & { emotionCache?: EmotionCache }) {
  const theme: HoustonThemeProps = createTheme('orbita');

  return (
    <>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <Head>
            <title>Eduzz Store</title>
          </Head>
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default MyApp;
