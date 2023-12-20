# Battlesnake Documentation

This repository contains a rewrite of all
[documentation](https://github.com/BattlesnakeOfficial/docs) for Battlesnake,
which is made and maintained by the community. We aim to not only improve the
old docs, but also provide more helpful content.

Contributions are more than welcome, feel free to make a
pull request, after you have read the [contributing guide](CONTRIBUTING.md).

## Setting up/building the project

As a prerequisite, you need to have at least Node.js 18 installed. The
preferred package manager is `npm`. First, install all Docusaurus dependencies:

```shell
$ npm install
```

Then, you can start a live development environment:

```shell
$ npm start
```

This command starts a local development server and opens up a browser window.
Most changes are reflected live without having to restart the server.

To build the documentation into a static page:

```shell
$ npm run build
```

This command generates static content into the `build` directory and can be
served using any static contents hosting service.
