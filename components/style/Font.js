/*
 * See https://developers.google.com/web/updates/2016/02/font-display and
 * https://css-tricks.com/font-display-masses/#article-header-id-2
 * for `font-display` information
 */
import React from 'react'

export default () => (
  <style jsx global>
    {`
      @font-face {
        font-family: 'Iosevka';
        font-display: swap;
        src: url('/static/fonts/TypoPRO-iosevka-term-bold.woff') format('woff');
      }

      @font-face {
        font-family: 'Monoid';
        font-display: swap;
        src: url('/static/fonts/TypoPRO-Monoid-Regular.woff') format('woff2'),
          url('/static/fonts/TypoPRO-Monoid-Regular.woff') format('woff');
      }

      @font-face {
        font-family: 'Fantasque Sans Mono';
        font-display: swap;
        src: url('/static/fonts/TypoPRO-FantasqueSansMono-Regular.woff') format('woff2'),
          url('/static/fonts/TypoPRO-FantasqueSansMono-Regular.woff') format('woff');
      }

      @font-face {
        font-family: 'Hack';
        font-display: swap;
        src: url('/static/fonts/hack-regular-webfont.woff2') format('woff2'),
          url('/static/fonts/hack-regular-webfont.woff') format('woff');
      }

      @font-face {
        font-family: 'Fira Code';
        font-display: swap;
        src: url('/static/fonts/FiraCode-Regular.woff2') format('woff2'),
          url('/static/fonts/FiraCode-Regular.woff') format('woff');
      }

      @font-face {
        font-family: 'JetBrains Mono';
        font-display: swap;
        src: url('/static/fonts/JetBrainsMono-Regular.woff2') format('woff2'),
          url('/static/fonts/JetBrainsMono-Regular.woff') format('woff2');
      }

      /* latin */
      @font-face {
        font-family: 'IBM Plex Mono';
        font-display: swap;
        font-weight: 500;
        src: local('IBM Plex Mono Medium Italic'), local('IBMPlexMono-MediumItalic'),
          url('/static/fonts/-F6sfjptAgt5VM-kVkqdyU8n1ioSJlR1gMoQPttozw.woff2') format('woff2');
      }

      /* latin */
      @font-face {
        font-family: 'Anonymous Pro';
        font-display: swap;
        src: local('Anonymous Pro Regular'), local('AnonymousPro-Regular'),
          url('/static/fonts/Zhfjj_gat3waL4JSju74E3n3cbdKJftHIk87C9ihfO8.woff2') format('woff2');
      }

      /* latin */
      @font-face {
        font-family: 'Droid Sans Mono';
        font-display: swap;
        src: local('Droid Sans Mono Regular'), local('DroidSansMono-Regular'),
          url('/static/fonts/ns-m2xQYezAtqh7ai59hJVlgUn8GogvcKKzoM9Dh-4E.woff2') format('woff2');
      }

      /* latin */
      @font-face {
        font-family: 'Inconsolata';
        font-display: swap;
        src: local('Inconsolata Regular'), local('Inconsolata-Regular'),
          url('/static/fonts/BjAYBlHtW3CJxDcjzrnZCIgp9Q8gbYrhqGlRav_IXfk.woff2') format('woff2');
      }

      /* latin */
      @font-face {
        font-family: 'Source Code Pro';
        font-display: swap;
        src: local('Source Code Pro'), local('SourceCodePro-Regular'),
          url('/static/fonts/mrl8jkM18OlOQN8JLgasD5bPFduIYtoLzwST68uhz_Y.woff2') format('woff2');
      }

      /* latin */
      @font-face {
        font-family: 'Ubuntu Mono';
        font-display: swap;
        src: local('Ubuntu Mono'), local('UbuntuMono-Regular'),
          url('/static/fonts/ViZhet7Ak-LRXZMXzuAfkYgp9Q8gbYrhqGlRav_IXfk.woff2') format('woff2');
      }

      /* latin */
      @font-face {
        font-family: 'Space Mono';
        font-display: swap;
        src: local('Space Mono'), local('SpaceMono-Regular'),
          url('/static/fonts/i7dPIFZifjKcF5UAWdDRYEF8RQ.woff2') format('woff2');
      }
    `}
  </style>
)
