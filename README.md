# volto-tableau

[![Releases](https://img.shields.io/github/v/release/eea/volto-tableau)](https://github.com/eea/volto-tableau/releases)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-tableau%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-tableau/job/master/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-tableau-master&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-tableau-master)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-tableau-master&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-tableau-master)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-tableau-master&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-tableau-master)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-tableau-master&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-tableau-master)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-tableau%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-tableau/job/develop/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-tableau-develop&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-tableau-develop)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-tableau-develop&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-tableau-develop)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-tableau-develop&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-tableau-develop)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-tableau-develop&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-tableau-develop)

[Volto](https://github.com/plone/volto) add-on

## Tableau

Registers a VisualizationView component for a content type named 'tableau_visualization'.

![Tableau](https://raw.githubusercontent.com/eea/volto-tableau/master/docs/volto-tableau.gif)

## Getting started

### Try volto-tableau with Docker

      git clone https://github.com/eea/volto-tableau.git
      cd volto-tableau
      make
      make start

Go to http://localhost:3000

### Add volto-tableau to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```Bash
   docker compose up backend
   ```

1. Start Volto frontend

* If you already have a volto project, just update `package.json`:

   ```JSON
   "addons": [
       "@eeacms/volto-tableau"
   ],

   "dependencies": {
       "@eeacms/volto-tableau": "*"
   }
   ```

* If not, create one:

   ```
   npm install -g yo @plone/generator-volto
   yo @plone/volto my-volto-project --canary --addon @eeacms/volto-tableau
   cd my-volto-project
   ```

1. Install new add-ons and restart Volto:

   ```
   yarn
   yarn start
   ```

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
