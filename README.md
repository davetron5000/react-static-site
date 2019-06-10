# Static Site using React as the Templating engine

This allows you to create pages in react, render those to static HTML such that your HTML has no runtime JavaScript in it.  The advantage is that you can use
React as a mechanism for decomposing your site into components/partials/whatever.

This is *not* for making an SPA,  PWA, or any other acronym that results in "JS is required to work for your site to work".  You can certainly add
client-side JS as needed, but if you are just wanting to put some HTML up onto e.g. S3, this will work for you.

## How it works

1. You create files in `site/pages` and `site/components`.  Each file in `site/pages` that is `.html.jsx` will be turned into a page for your static site.
   It is expected that those pages will be react components.  You can use the components in `site/components` (or wherever).
2. When you execute `src/js/server/build.js`, the files will be rendered into `site/rendered_html` as static HTML.
3. You should then use Webpack to bring in CSS and handle inserting it into your HTML

## Where stuff is

* config - webpack config
* dev - dev static build - no minification or hashing or whatever
* production - production static build.  This is what you upload to your web server
* site - where you build out your site.  This is viewed as an *input* to Webpack.

  * `site/components` - Reusable React components to remove duplication/create partials, etc.  Remember that these will be rendered static so they can't be interactive.  They are only ever rendered once.
  * `site/css` - Put your CSS here in `styles.css`.  If you use other files, you'll need to edit `site/js/index.js` to pull them in.
  * `site/images` - Any images you need.  They will be copied verbatim.  Note that `favicon.ico` is special and will be copied to the root, not to `images/`
  * `site/js` - Any client-side JavaScript.  Probably this is just a single `index.js` which is Webpack's entry point and it just brings in CSS.
  * `site/pages` - Pages for your site.  They should be named with the suffix `.html.jsx`, and these should be React components.  The difference between these and `site/components` is that each file in here will generate a file for your static site.  You should probably have at least an `index.html.jsx` here.
  * `site/rendered_html` - When you run `yarn build`, each file in `site/pages` is rendered as a static page here.  So `index.html` in here is the fully static version of the file in `site/pages/index.html.jsx`.
* src - source for the build system
