# @eeacms/volto-tableau

[![Releases](https://img.shields.io/github/v/release/eea/volto-tableau)](https://github.com/eea/volto-tableau/releases)
[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-tableau%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-tableau/job/master/display/redirect)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-tableau&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-tableau)

[Volto](https://github.com/plone/volto) add-on

## Tableau

Registers a VisualizationView component for a content type named 'tableau_visualization'.

![Tableau](https://raw.githubusercontent.com/eea/volto-tableau/master/docs/volto-tableau.gif)

## Upgrade

### Upgrading to 10.x

> This version requires `Volto 18` or `Volto 19` and Node.js 22.

The add-on now ships from `packages/volto-tableau` and the block keeps the same API, so upgrading from 9.x on Volto 18 needs no code changes.

#### Breaking changes

- **Node.js 22 or newer is required** (`engines.node >= 22`), 9.x declared no engine.
- **React 18 is required.** The package declares `react` and `react-dom` as `^18.2.0` peers, 9.x declared no peers.

The package also declares `qs` (`^6.14.2`), which it imports; 9.x relied on it being hoisted from the project.

## Requirements

### Backend

- [Plone](https://plone.org/download)
- [plone.restapi](https://pypi.org/project/plone.restapi/)

### Frontend

- Node.js: `>=22.0.0`

## Installation

#### 7.x.x -> requires >= eea.api.dataconnector@7.0

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```Bash
   docker compose up backend
   ```

1. Start Volto frontend

- If you already have a volto project, just update `package.json`:

  ```JSON
  "dependencies": {
      "@eeacms/volto-tableau": "*"
  }
  ```

   and `volto.config.js`:

   ```JavaScript
   const addons = ['@eeacms/volto-tableau'];
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

1. Go to http://localhost:3000

1. Happy editing!

## License

See [LICENSE.md](LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
