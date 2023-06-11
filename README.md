[![Release Version](https://img.shields.io/github/release/Kitty-Inu-DAO/Governance-Docs.svg)](https://github.com/Kitty-Inu-DAO/Governance-Docs/releases/latest)[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)


![Kitty Inu DAO](./static/img/kitty_logo.jpg)
# Kitty Inu DAO Governance Docs

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


## Feedback
Please feel free to:

* submit suggestions and bug-reports at: <https://github.com/Kitty-Inu-DAO/Governance-Docs/issues>
* send pull requests after forking: <https://github.com/Kitty-Inu-DAO/Governance-Docs/>

## Copyright and License
see [COPYRIGHT](COPYRIGHT.md) and [LICENSE](LICENSE.md) files for copyright and license information.

### Licensed Works

Materials under `/static/img/kitty_logo.jpg` are licensed under a Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International. See [COPYRIGHT](COPYRIGHT.md) for more details. 


## Contributing 

- All contributions should be made as a pull request to the `dev` branch. Pull requests directly to `main` will be ignored. 

- PRs must include a concise but descriptive title of the feature, bug, chore, etc. the PR is addressing. 

- This repository follows conventional commit semantics. Please read here to ensure you understand the proper commit format: <https://www.conventionalcommits.org/en/v1.0.0/#summary>


## Deployment

- This repository uses Fleek for deployments of the `main` branch to IFPS. 
- ENS is used as the domain.

### All Other Browsers:

#### Cloudflare with .link

Production deployment at: <https://docs-kittyinudao.link/>

Centralized way to access information in the ENS from DNS, managed by Cloudflare.

#### Preferred: Wildcarded DNS Record

Production deployment at: <https://docs-kittyinudao.limo/>

Decentralized alternative to eth.link. Similar to eth.link, eth.limo is based on a wildcarded DNS record, *.eth.limo. However, instead of being managed by a single organization, it is powered by a DAO. 
