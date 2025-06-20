this is a fork of the ToDesktop Electron starter that tests

- Playwright for E2E testing in Electron
- Continuous integration via Playwright + GitHub Actions
- All using `bun`

# todesktop-quick-start

**Clone and run for a quick way to see ToDesktop in action.**

This is a minimal Electron application to get you started with [ToDesktop](https://todesktop.com).

**Use this app along with [@todesktop/cli](https://npmjs.com/package/@todesktop/cli)**

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/ToDesktop/todesktop-quick-start
# Go into the repository
cd todesktop-quick-start
# Install dependencies
npm install
# Run the app
npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Deployment

To deploy your application, run `npm run release` at the root of the project. This uses [@todesktop/cli](https://npmjs.com/package/@todesktop/cli). Once it completes, URLs to download your desktop app will be shown in the command line.

## Noteworthy changes from electron-quick-start

This template project is based on [electron-quick-start](https://github.com/electron/electron-quick-start) but here are the important changes:

- [todesktop.json](./todesktop.json) contains some configuaration for ToDesktop. This includes pointing to [icon.png](./icon.png) as the app icon.
- [main.js](./main.js) uses [@todesktop/runtime](https://npmjs.com/package/@todesktop/runtime). This handles auto-updates, etc.
- The [`npm run release` command](./package.json) uses [@todesktop/cli](https://npmjs.com/package/@todesktop/cli) to deploy the app to production.
- The [`npm run build` command](./package.json) uses [@todesktop/cli](https://npmjs.com/package/@todesktop/cli) to build the app for development use.
- The `electron` version in [`devDependencies`](./package.json) is fixed (it doesn't start with `^` or `~`). ToDesktop will use this version when building the app binaries.
- The `author` in [`package.json`](./package.json) contains an email.
- Added `productName` in [`package.json`](./package.json).

## More documentation

See https://docs.todesktop.com/cli/using-the-todesktop-cli

## License

[CC0 1.0 (Public Domain)](LICENSE.md)
