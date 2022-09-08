# jay-business

This project is my business website created with GatsbyJS.

## Structure

- /public -> Static assets
- /blog -> Blog posts
- /projects -> Project posts
- /downloads -> Downloads available from my site
- /content -> Json assets used to populate content in the site
- /src/components -> Reusable components
- /src/hooks -> Reusable hooks
- /src/icons -> Reusable icons
- /src/images -> All the images for the site
- /src/pages -> All the pages for the site
- /src/styles -> Global styles

## Installation

My site is based on yarn as a package manager.
To install node_modules, simply run the below command.

```
yarn install
```

## Development

The development server comes packaged with Gatsby. To start dev server on port **8000**, run the below command.

```
gatsby develop
```

## Cache Clean

Sometimes images and other assets are cached and do not update to reflect the new update in the dev environment. To clean the cache, run the below command.

```
gatsby clean
```

## Building

Production configuration is used when doing a build, it'll be created under **public** directory. To create bundle, run the following command.

```
gatsby build
```

## Testing
