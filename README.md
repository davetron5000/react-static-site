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
