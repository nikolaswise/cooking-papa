# Cooking Papa

> Exploring building apps in vanilla es6 in contemporary browsers. Basically it's Gatsby without the Gatsby or the React.

## Goals

- [x] No npm modules in the final app
- [x] No compiling, transpiling, or post-processing
- [x] Vanilla JS & CSS
- [x] Support latest browsers
- [x] Static Server
- [x] Staticly rendered pages for initial load performance
- [x] SPA style page transitions
- [ ] Tree-shaking and conditional loading of JS and CSS

### Exceptions:

- npm modules as CLI helpers:
  - `static-site` to generate html pages from source documents.
  - `whatwg-fetch` to polyfill fetch for node.
  - `serve` for local development.
  - `npm-run-all` for basic tooling.

## Overview

> Note: I just realized I should break the data into a seperate project that handles all the data manipulation and hosts a simple JSON api. That would split concerns, make this app simpler, and demonstrate how to use artibtraty data.

### 📁 /source

The `/source` directory contains all the data files, mapped in the structure of the projects information architecture. The data files are HTML with YML frontmatter, but only becuase we're using [Static Site](https://www.npmjs.com/package/static-site) to turn these files from YML to JSON – if you're using other data sources than you can do whatever. At some point these HTML source files will allow of custom HTML per page thats not explicitly data and template based.

### 📁 /bin

These are node helpers for static site that control how our files are getting generated.

#### 📄 data.js

_Generated_

The data helper consumes the Static Site object (generated from the `/source` dir) and maps it into JSON files that will be used to render templates, both locally for the server and in the client for the browser.

#### 📄 routes.js

The routes helper maps the Static Site source object to the templates for routes found in the `/routes` directory, and renders them with the template in `/layout`.

### 📁 /data

_Generated_

Static Site turns our source files into JSON objects, which are used to render templates.

### 📁 /layouts

Similar to `/routes`, these are JS files that render templates for the initial creation of the static content.

### 📁 /routes

Matching the information architecture of our site, the routes folder contains the logic and templates that each page needs to be rendered.

#### 📄 index.js

`index.js` files are used to render pretty URLs like `/` or `/recipes`.

#### 📄 :slug.js

`:slug.js` files export functions that need a slug to fire, and are used for when pages share a template with different source data. Recipes, for example!

### 📁 /components

Components are smaller templates can take objects and render html, and can be used inside of routes and layouts.

### 📁 /css

This is ... css.

### 📁 /js

Source JS files. `app.js` is used to make all this magic work.


