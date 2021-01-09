[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
    <img src="https://www.drupal.org/files/styles/grid-3/public/meltmedia_alternate_logo.png?itok=KDrusUFD" alt="Logo" width="200" height="200">

  <h1 align="center">meltmedia Challenge!</h1>

  <h3 align="center">
    Vanilla React/Sass - HTML/CSS Wireframe
  </h3>
  <h3 align="center">
    You can check out the live page <a href="https://melt-challenge.vercel.app" target="_blank">HERE!</a>
  </h3>
  <p align="center">
    ...or run <code>npm i && npm start</code> 😅
  </p>
</p>

> ---
>
> _This will be a pithy README covering the basic structure of the app so you know what the heck is going on!_
>
> ---

---

# wireframe:

Static page built using vanilla html and css. Both the `.html` and `.css` files are broken up into sections using big fancy ASCII art, aligning with the page layout. There's also a small table of contents at the top of the `.css` page!

- _I personally used a VSCode extension called "live server" to run the page locally in the browser. It's a handy tool that requires no setup and even has hot reloading 👌_

# src:

Using React components helped to visualize the different sections of the page (at least from a code perspective), and each section has it's own dedicated file in the `src/components/` folder.

## src/components:

Nothing really too complex about the page as a whole. Some notable things:

- NavBar: added a `'scroll'` event listener to the `window` to create a dynamic style for the nav container

- Splash + Careers: did a 'hacky' background trick to mimic color and opacity over the mock background images

- About: offloaded long urls to a helper object to clean up the JSX

- MapModal: render variable for the modal info to clean up the JSX

## src/components/shared:

Some reusable single-tag components for reuse around the page. I created a simple API for their use, particularly with the `'variant'` prop to support different stylings if needed.

## src/styles:

Again, not much to say here. I used my personally CSS reset (which is fairly light), variables for colors and fonts, and mixins for setting media queries and a dynamic html font-size (very helpful for even more responsiveness!).

### Random Stuff:

#### tsconfig.json:

Basically what's going on here is I'm "aliasing" the `src/` folder. First, set the root directory `{ "baseUrl": "." }` followed by creating the alias itself `{ "paths": "src/*": ["./src/*"] }` which will make any import url starting with `'src/'` instead of `'./'` will default to the `src/` folder, allowing you to import like this:

```js
import { NavBar } from 'src/components';
```

#### Barrels...

You may have already noticed that there are actually many [ index.js ] files peppered throughout the app. These are (sometimes) known as "barrel" exports, and have a few advantages when dealing with a larger file-directory. The index file in the `components/` folder for example:

```javascript
export { default as NavBar } from './navBar/navBar'
export { default as Splash } from './splash/splash'
etc...
```

You can see this in action in **` /app.js `**:

```js
import {
  NavBar,
  Splash,
  About,
  Careers,
  MapModal,
  ContactForm,
  Footer,
} from 'src/components';
```

- _Note that the import doesn't point to the index file. Node perceives **`index.js`** files as points of entry and the default file to grab exports from, essentially making it an implicit file in import statements_

---

## <!-- CONTACT -->

## Contact

#### Github - [musicMan1337][github]

#### LinkedIn - [Derek-8Bit-Nellis][linkedin]

#### Facebook - [Derek Nellis][facebook]

#### Instagram - [@derek.8bit.nellis][instagram]

<!-- MARKDOWN LINKS & IMAGES -->

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/GIT-USERNAME-HERE/REPO-NAME-HERE.svg?style=flat-square
[contributors-url]: https://github.com/GIT-USERNAME-HERE/REPO-NAME-HERE/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/GIT-USERNAME-HERE/REPO-NAME-HERE.svg?style=flat-square
[forks-url]: https://github.com/GIT-USERNAME-HERE/REPO-NAME-HERE/network/members
[stars-shield]: https://img.shields.io/github/stars/GIT-USERNAME-HERE/REPO-NAME-HERE.svg?style=flat-square
[stars-url]: https://github.com/GIT-USERNAME-HERE/REPO-NAME-HERE/stargazers
[issues-shield]: https://img.shields.io/github/issues/GIT-USERNAME-HERE/REPO-NAME-HERE.svg?style=flat-square
[issues-url]: https://github.com/GIT-USERNAME-HERE/REPO-NAME-HERE/issues
[license-shield]: https://img.shields.io/github/license/GIT-USERNAME-HERE/REPO-NAME-HERE.svg?style=flat-square
[license-url]: https://github.com/GIT-USERNAME-HERE/REPO-NAME-HERE/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: www.linkedin.com/in/derek-8bit-nellis
[jsconfig-docs]: https://code.visualstudio.com/docs/languages/jsconfig

<!-- project links -->

<!-- links to social media accounts -->

[twitter]: http://www.twitter.com/userName
[facebook]: http://www.facebook.com/derek.nellis.9
[googleplus]: https://plus.google.com/+userName
[tumblr]: http://userName.tumblr.com
[dribble]: http://dribbble.com/userName
[linkedin]: https://www.linkedin.com/in/derek-8bit-nellis/
[github]: http://www.github.com/musicMan1337
[instagram]: https://www.instagram.com/derek.8bit.nellis/?hl=en
