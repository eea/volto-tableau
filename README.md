# volto-tableau

[![Releases](https://img.shields.io/github/v/release/eea/volto-tableau)](https://github.com/eea/volto-tableau/releases)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-tableau%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-tableau/job/master/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-tableau&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-tableau)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-tableau&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-tableau)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-tableau&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-tableau)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-tableau&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-tableau)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-tableau%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-tableau/job/develop/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-tableau&branch=develop&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-tableau&branch=develop)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-tableau&branch=develop&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-tableau&branch=develop)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-tableau&branch=develop&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-tableau&branch=develop)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-tableau&branch=develop&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-tableau&branch=develop)

[Volto](https://github.com/plone/volto) add-on

## Tableau

Registers a VisualizationView component for a content type named 'tableau_visualization'.

![Tableau](https://raw.githubusercontent.com/eea/volto-tableau/master/docs/volto-tableau.gif)

## Getting started

### Upgrade

#### 7.x.x -> requires >= eea.api.dataconnector@7.0

### Try volto-tableau with Docker

      git clone https://github.com/eea/volto-tableau.git
      cd volto-tableau
      make
      make start

Go to http://localhost:3000

`make start` now defaults to Volto 18. To run the same setup against Volto 17, use:

      VOLTO_VERSION=17 make
      VOLTO_VERSION=17 make start

### Add volto-tableau to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```Bash
   docker compose up backend
   ```

1. Start Volto frontend

- If you already have a volto project, just update `package.json`:

  ```JSON
  "addons": [
      "@eeacms/volto-tableau"
  ],

  "dependencies": {
      "@eeacms/volto-tableau": "*"
  }
  ```

- If not, create one with Cookieplone, as recommended by the official Plone documentation for Volto 18+:

  ```
  uvx cookieplone project
  cd project-title
  ```

1. Install or update dependencies, then start the project:

   ```
   make install
   ```

   For a Cookieplone project, start the backend and frontend in separate terminals:

   ```
   make backend-start
   make frontend-start
   ```

   For a legacy Volto 17 project, install the package with `yarn` and restart the frontend as usual.

1. Go to http://localhost:3000

1. Happy editing!

## Release

See [RELEASE.md](https://github.com/eea/volto-tableau/blob/master/RELEASE.md).

## How to contribute

See [DEVELOP.md](https://github.com/eea/volto-tableau/blob/master/DEVELOP.md).

## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](https://github.com/eea/volto-tableau/blob/master/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
