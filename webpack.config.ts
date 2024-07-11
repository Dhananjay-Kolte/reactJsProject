import path from 'path';
import dotenv from 'dotenv';
import webpack from 'webpack';
import { buildWebpackConfig } from './configs/build/buildWebpackConfig';
import { BuildEnv, BuildMode, BuildPaths } from './configs/build/types/config';

const getApiUrl = (mode: BuildMode, apiUrl?: string) => {
  if (apiUrl) return apiUrl;
  if (mode === 'production') return '/api';
  return '';
};

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    assets: path.resolve(__dirname, 'public', 'assets'),
    assetsBuild: path.resolve(__dirname, 'build', 'assets'),
    build: path.resolve(__dirname, 'build'),
    buildLocales: path.resolve(__dirname, 'build', 'locales'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    envPath: path.resolve(__dirname, '.env'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    icon: path.resolve(__dirname, 'public', 'logo.svg'),
    locales: path.resolve(__dirname, 'public', 'locales'),
    magicLink: path.resolve(
      __dirname,
      'node_modules/magic-sdk/dist/cjs/index.js',
    ),
    src: path.resolve(__dirname, 'src'),
  };

  // initialization config for dotenv
  dotenv.config().parsed || {};

  const mode = env.mode || 'development';
  const PORT = env.port || 3000;
  const apiURL = getApiUrl(mode, env?.apiURL);
  const sentryToken =
    env?.SENTRY_AUTH_TOKEN || process.env?.SENTRY_AUTH_TOKEN || '';
  const sentryOrg = env?.SENTRY_ORG || process.env?.SENTRY_ORG || '';
  const sentryRelease =
    env?.SENTRY_RELEASE || process.env?.SENTRY_RELEASE || '';
  const sentryProject =
    env?.SENTRY_PROJECT || process.env?.SENTRY_PROJECT || '';

  const isDev = mode === 'development';
  const isDevDebug = Boolean(JSON.stringify(env?.modeDebug)) || false;

  const config: webpack.Configuration = buildWebpackConfig({
    apiURL,
    isDev,
    isDevDebug,
    mode,
    paths,
    port: PORT,
    project: 'frontend',
    sentryOrg,
    sentryProject,
    sentryRelease,
    sentryToken,
  });

  return config;
};
