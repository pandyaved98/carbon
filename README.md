# Lithograph

<p align="center">
  <a href="/LICENSE">
    <img src="https://img.shields.io/github/license/dangercove/carbon.svg" alt="MIT License" />
  </a>
  <a href="https://app.fossa.com/projects/git%2Bgithub.com%2FDangerCove%2Fcarbon?ref=badge_shield">
    <img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FDangerCove%2Fcarbon.svg?type=shield" alt="FOSSA Status" />
  </a>
</p>

<br></br>

## Introduction

This is a spin-off of the popular [Carbon](/carbon-app/carbon) project, focused on providing an offline experience.

## Usage

Run an export of the editor:

`npm run-script export`

The output is saved in `out/`.

Run an export and serve the result using `python`'s `SimpleHTTPServer`:

`npm run-script export && pushd out/; python -m SimpleHTTPServer; popd`

#### License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FDangerCove%2Fcarbon.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FDangerCove%2Fcarbon?ref=badge_large)

<br />
<br />

---

## Contribute & Support

Pull requests are welcome! Please see our [contributing guidelines](/.github/CONTRIBUTING.md) for more details.
