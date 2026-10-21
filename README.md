# [Video demonstration](https://youtu.be/iRhd7lF-z70)

This is my portfolio website, coded in React, that imitating the Windows 10 interface/behavior

The Docker image builds the app with `yarn build` and serves `dist` with Caddy.
Run `yarn dockbuild` to build it and `yarn dockdev` to serve it on
`http://127.0.0.1:3004`. The VPS host's Caddy proxies HTTPS traffic to this port
and manages the public certificates.
