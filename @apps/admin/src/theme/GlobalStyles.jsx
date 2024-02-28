import { css, Global } from '@emotion/react';

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        html {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          -webkit-tap-highlight-color: transparent;
          width: 100%;
          word-break: break-word;
          overflow-x: hidden;
          font-size: 14px;
        }
        body {
          width: 100%;
          overflow-x: hidden;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: var(--default-font-color);
        }
        a {
          color: var(--default-font-color);
          text-decoration: none;
          cursor: pointer;
        }
        a:visited {
          color: var(--default-font-color);
        }
        #root {
          width: 100%;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        ::-webkit-scrollbar {
          width: 0;
          height: 0;
          background-color: transparent;
        }
        [data-theme='light'] {
          --card-background: white;
          --default-background-color: '#FAFAFA';
          --default-font-color: rgba(0, 0, 0, 0.87);
          --default-line-color: #212121;
          --sider-line-color: white;
          --sider-font-color: #rgba(0, 0, 0, 0.87);
        }
        [data-theme='dark'] {
          --default-background-color: rgb(10, 25, 41);
          --card-background: rgb(33, 33, 33);
          --default-font-color: white;
          --default-line-color: white;
          --sider-line-color: #686868;
          --sider-font-color: #rgb(209, 213, 219);
        }
      `}
    />
  );
};

export default GlobalStyles;
