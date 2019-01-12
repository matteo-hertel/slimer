# Slimer

[Slimer](https://en.wikipedia.org/wiki/Slimer) is a fork of [Ghost's](https://ghost.org/) theme [Casper](https://github.com/TryGhost/Casper) built for [Hugo](http://gohugo.io) static site generator. I'm not that good at porting things, but I'm remarkably good at copy-paste, so I've used [hugo-casper-two](https://github.com/eueung/hugo-casper-two) as base and try not to break it too much 😅.

## Structure

There are two layers on this theme, the HTML+CSS and the Web Components.
The different script allow to work on specific part in isolation for easier development

## Installation

To run the whole thing locally a few bits are needed:
- [node and npm](https://github.com/creationix/nvm) 
- [hugo](https://gohugo.io/)

To run the site open two terminals/pane/split and run in one

```sh
npm run start:hugo
```

and in the other one

```sh
npm run dev 
```

the whole theme with fake content and hot-reloading will be available at [ http://localhost:3000 ](http://localhost:3000)

To run the webcomponents stack open two terminals/pane/split and run in one
```sh
npm run components:start
```

and in the other one

```sh
npm run storybook 
```

The storybook app will be running at [http://localhost:9001](http://localhost:9001), it'll autoload all the files called `stories.js` in all the different components.

## Test

For now tests are only available for web componentes as they are the only place with some logic, once the theme is completed visual tests will be added for the critical paths.

## License 
This repo in licensed un the [MIT](./LICENSE) license, so is [Casper](https://github.com/TryGhost/Casper/blob/master/LICENSE) and [hugo-casper-two](https://github.com/eueung/hugo-casper-two/blob/master/LICENSE.md).
