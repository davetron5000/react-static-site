import React from "react";

import ImageFigure from "../components/ImageFigure";
import ImageFigureCaption from "../components/ImageFigureCaption";
import GuidelineHeader from "../components/GuidelineHeader";

export default function(props) {
  const gauges = `
      var _gauges = _gauges || [];
      (function() { var t   = document.createElement('script');
        t.type  = 'text/javascript';
        t.async = true;
        t.id    = 'gauges-tracker';
        t.setAttribute('data-site-id', '5aff5aa154a1b97a229142e1');
        t.setAttribute('data-track-path', 'https://track.gaug.es/track.gif');
        t.src = 'https://d2fuc4clr7gvcn.cloudfront.net/track.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(t, s);
      })();`;
  return(
<html lang="en">
  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <title>Brutalist Web Design</title>
    <meta name="description" content="Guidelines for web design that adhere to the tenets and ethos of Brutalism" />
    <meta name="author" content="David Copeland" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@davetron5000" />
    <meta name="twitter:creator" content="@davetron5000" />
    <meta name="twitter:title" content="Brutalist Web Design" />
    <meta name="og:title" content="Brutalist Web Design" />
    <meta name="og:url" content="https://brutalist-web.design" />
    <meta property="og:type" content="website" />
    <meta name="twitter:description" content="Guidelines for designing websites true to their materials: content." />
    <link rel="copyright" href="#about" />
    <link rel="apple-touch-icon" sizes="57x57" href="/images/apple-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="60x60" href="/images/apple-icon-60x60.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/images/apple-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="/images/apple-icon-76x76.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/images/apple-icon-114x114.png" />
    <link rel="apple-touch-icon" sizes="120x120" href="/images/apple-icon-120x120.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/images/apple-icon-144x144.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="/images/apple-icon-152x152.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-icon-180x180.png" />
    <link rel="icon" type="image/png" sizes="192x192"  href="/images/android-icon-192x192.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon-96x96.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
    <meta name="msapplication-TileImage" content="/images/ms-icon-144x144.png" />
  </head>
  <body className="bg-near-white near-black">
    <main className="pa3 center  measure-wide lh-copy calisto">
      <article className="bb b--silver mb3">
        <h1 className="f-subheadline-ns f1 helvetica lh-solid mt0 mb3"><small className="f2-ns f3 db">Guidelines for</small> Brutalist Web Design</h1>
        <h2 className="helvetica mt0 fw3">Raw content true to its construction</h2>
        <h3 className="helvetica mt0 fw3 f5">
          By <a href="#about">David Bryant Copeland</a>{ " " }
          Updated <span dangerouslySetInnerHTML={{__html: '<%= htmlWebpackPlugin.options.publishDate %>' }} />
        </h3>
        <ul className="f4 pl0-ns pl3 lst-square lsp-outside">
          <li>
            <a href="#readable-content">
              Content is readable on all reasonable screens and devices.
            </a>
          </li>
          <li>
            <a href="#clickables">
              Only hyperlinks and buttons respond to clicks.
            </a>
          </li>
          <li>
            <a href="#hyperlinks">
              Hyperlinks are underlined and buttons look like buttons.
            </a>
          </li>
          <li>
            <a href="#back-button">
              The back button works as expected.
            </a>
          </li>
          <li>
            <a href="#scrolling">
              View content by scrolling.
            </a>
          </li>
          <li>
            <a href="#decoration">
              Decoration when needed and no unrelated content.
            </a>
          </li>
          <li>
            <a href="#performance">
              Performance is a feature.
            </a>
          </li>
        </ul>
      </article>
      <section className="cf mt2">
        <h1 className="f1 lh-solid mt0 helvetica"><small className="f3 db">What is</small> Brutalist Web Design?</h1>
        <p>
          The term <em>brutalism</em>
          is often associated with <a href="https://en.wikipedia.org/wiki/Brutalist_architecture">Brutalist Architecture</a>, however it can apply to other forms of construction, such as web design.  This website explains how.
        </p>
        <ImageFigure>
          <img src="images/washington-dc-ec-02-station-small.jpg" alt="Washington DC Engine Company 02's Fire Station" className="db ba b--silver" nopin="nopin" />
          <ImageFigureCaption>
            An example of brutalist architecture, DC Engine Company 02's Fire Station
            { " " }<a href="images/washington-dc-ec-02-station.png" target="_new">View full-size (11MB)</a>.
          </ImageFigureCaption>
        </ImageFigure>
        <p>
          The term <em>brutalism</em> is derived from the French <em>béton brut</em>, meaning “raw concrete”.  Although most brutalist buildings are made from concrete, we're more interested in the term <em>raw</em>.  Concrete brutalist buildings often reflect back the forms used to make them, and their overall design tends to adhere to the concept of <a href="https://en.wikipedia.org/wiki/Truth_to_materials">truth to materials</a>.
        </p>
        <p>
          A website's materials aren't HTML tags, CSS, or JavaScript code.  Rather, they are its content and the context in which it's consumed.  A website is for a visitor, using a browser, running on a computer to read, watch, listen, or perhaps to interact.  A website that embraces Brutalist Web Design is raw in its focus on <em>content</em>, and prioritization of the website visitor.
        </p>
        <p>
          Brutalist Web Design is honest about what a website is and what it <em>isn't</em>.  A website is not a magazine, though it might have magazine-like articles.  A website is not an application, although you might use it to purchase products or interact with other people.  A website is not a database, although it might be driven by one.
        </p>
        <p>
          A website is about giving visitors content to enjoy and ways to interact with you.
        </p>
        <p>
          The design guidelines outlined above—and detailed below—all are in the service of making websites more of what they are and less of what they aren't.  These aren't restrictive rules to produce boring, minimalist websites.  Rather these are a set of priorities that put the visitor to your site—the entire reason your website exists—front and center in all things.
        </p>
      </section>
      <section>
        <a name="detailed-guidelines"></a>
        <h1 className="helvetica f2 lh-solid">
          <small className="f4 db">Detailed Guidelines for</small>
          Brutalist Web Design
          <aside className="mt0 fw3 dib f7"><a href="#detailed-guidelines">Permalink</a></aside>
        </h1>
        <p>
          Below is a detailed look into each of the guidelines listed above.  As with all artistic constraints while you may find them frustrating, you should also find them inspiring.
        </p>
        <section className="mt4">
          <a name="readable-content">
            <GuidelineHeader title="Content is readable on all reasonable screens and devices." slug="readable-content" />
            <p>
              Most websites exist to deliver content for you to consume, either words (such as on this site), or images, such as on Pinterest.  To be true to that nature, the content must be readable in all browsers.  Some screens are very large, while others are very small.  Some browsers, such as <a href="https://en.wikipedia.org/wiki/Screen_reader">screen readers</a>, have no screen at all.
            </p>
            <p>
              By default, a website that uses <a href="https://www.w3.org/TR/html52/dom.html#elements">HTML as intended</a> and has no custom styling will be readable on all screens and devices. Only the act of design can make the content less readable, though it can certainly make it more.  For example, this website does not use default styles, yet, it is readable on any size screen.
            </p>
          </a>
        </section>
        <section className="mt4">
          <a name="clickables">
            <GuidelineHeader title="Only hyperlinks and buttons respond to clicks." slug="clickables" />
            <p>
              A website is a <a href="https://en.wikipedia.org/wiki/Hypertext">hypertext</a> document that allows for two primary forms of interaction: navigating a link to another location, and submitting information back to a server.  These functions are performed, respectively, by hyperlinks and buttons.
            </p>
            <p>
              Although JavaScript allows any element to respond to a click, websites are not applications, and the vast majority of websites should have no need to resort to such heroics in order to allow the visitor to navigate or submit data.  Further, clickable areas of a page that are not obviously hyperlinks or buttons can confuse the visitor, causing them to perform unwanted actions or miss links entirely.
            </p>
            <p>
              To trick or deceive the visitor goes against the nature of a website, which is to deliver information and interact honestly with a visitor.
            </p>
          </a>
        </section>
        <section className="mt4">
          <a name="hyperlinks">
            <GuidelineHeader title="Hyperlinks are underlined and buttons look like buttons." slug="hyperlinks" />
            <p>
              As mentioned when <a href="#clickables">discussing clicks</a>, only hyperlinks and buttons should respond to clicks, since this maintains an honest and transparent interaction with a visitor.  To maintain a truth to materials, it follows that the appearance of these elements should also be honest and clear.
            </p>
            <p>
              A hyperlink has no analog in the real world. Since the dawn of the web, convention dictates a hyperlink use an underline to reveal its existence (which is a wonderful solution, since underlining has no place in modern typesetting).  Because of this convention, there is no clearer indicator of more content than a bit of underlined text.
            </p>
            <p>
              Buttons, however, do have an analog in both the real world and computer programs.  The browser being a computer program, it stands to reason that buttons rendered in a browser should look like buttons rendered on the computer operating system running said browser.  With no effort at all, this is precisely what happens.  See for yourself:
            </p>
            <figure className="ba b--gray pa3 ma0">
              <form className="pa3 bg-white black br2">
                <label htmlFor="not-real-form-email" className="fw3 helvetica tracked ttu">Enter your Email</label>
                <input className="db w-100 mt1 mb2" type="email" id="not-real-form-email" name="email" placeholder="e.g. pat@example.com" />
                <input type="submit" value="Submit" />
              </form>
              <figcaption>
                <p className="f7 i fw3 red ma0"><br />Note: this is not a real form</p>
              </figcaption>
            </figure>
            <p>
              This button is unambiguous, both in its function and its difference from a hyperlink.  Where a link promises more information for the visitor, a button agrees to submit <em>the visitor's information</em> to the server.  Hiding this interaction behind a hyperlink or unadorned text betrays the core nature of a website.
            </p>
            <p>
              That said, the default visual appearance of a button is often unpleasant or clashes with the visual language of the site.  Fortunately, many forms indicate button-ness to a visitor, and it's often trivial to style a button to both match the visual language of a site while also looking eminently pressable.  Here is an example of a site using a yellow color scheme and serifed fonts that has an obvious button:
            </p>
            <figure className="ba b--gray pa3 ma0">
              <form className="pa3 bg-washed-yellow black br2 cf">
                <label htmlFor="also-not-real-form-email" className="b db f4 mb2 mid-gray baskerville">Enter your Email</label>
                <input className="db w-100" type="email" id="also-not-real-form-email" name="email" placeholder="e.g. pat@example.com" />
                <input type="submit" value="Submit" className="baskerville fr bg-animate mid-gray hover-bg-light-yellow ba pointer br3 pa2 mt3 bg-yellow" />
              </form>
              <figcaption>
                <p className="f7 i fw3 red ma0"><br />Note: this is not a real form</p>
              </figcaption>
            </figure>
            <p>
              Notice also that the form elements are true to themselves.  An operating system has a visual language for collecting input from a visitor, and a Brutalist Web Design stays as close to that as possible.
            </p>
          </a>
        </section>
        <section className="mt3 cf">
          <a name="back-button">
            <GuidelineHeader title="The back button works as expected." slug="back-button" />
            <ImageFigure>
              <img src="images/netscape-back-button.png" alt="Netscape Communicator's Back button" className="ba b--dark-gray" nopin="nopin" />
              <ImageFigureCaption>
                <a href="https://en.wikipedia.org/wiki/Netscape_Communicator">Netscape Communicator's</a>{ " " } iconic Back button
              </ImageFigureCaption>
            </ImageFigure>
            <p>
              All browsers have a built-in button called the <em>back button</em>.  This button is a form of “undo”, taking the user back to where they were before their last navigational click.
            </p>
            <p>
              To break this core and enduring feature of the web requires a confluence of design and programming (such feats would be better applied to smoothing the experience of going back after a form submission).  It also requires either ignorance of (or contempt for) the site visitor, as the back button is often their only means of undoing an errant click.
            </p>
          </a>
        </section>
        <section className="mt4">
          <a name="scrolling">
            <GuidelineHeader title="View content by scrolling." slug="scrolling" />
            <p>
              A website is neither a book nor a magazine.  Because it's viewed in a browser, users can scroll the browser's viewport to read content that can't fit on one screen.  This mechanism works beautifully and allows visitors to read content without the interruptions caused by clicking and page-reloading (also note that all browsers are able to scroll properly and don't need any assistance from JavaScript).
            </p>
            <p>
              While long-form content may require navigation and multiple pages, there's rarely need to artificially paginate articles, blog posts, or other medium-length content simply to satisfy advertisers or inflate engagement numbers.
            </p>
            <p>
              Scrolling also allows the visitor to consume content at their pace using a method they prefer.  Like the back button, this can only be broken by intentional design and careless implementation.  Advertisers need not suffer from scrollable content, however.
            </p>
            <aside className="baskerville tc ml5-ns mr5-ns pa1 ba br1 bg-near-white dark-gray">
              <h3 className="b tracked-tight helvetica tl ml2 mt0 ma0 pa0">Promotion</h3>
              <h1 className="f4 mb1">Level up As a Technical Leader</h1>
              <h2 className="f5 tracked-tight fw3 ttu mt0">11 Practices You Can Start Doing Now</h2>
              <img src="/images/sweng-cover.png" className="w-33 shadow-5" alt="Book Cover for The Senior Software Engineer" nopin="nopin" />
              <p className="f4 b">
                <form method="get" action="http://bit.ly/dcsweng">
                  <input className="pa2" type="submit" value="Buy Now $25" />
                </form>
              </p>
            </aside>
            <p>
              That was an ad for one of my books.  It was clearly marked, and easy to scroll past while you continue to read this site. It might not be the most creative way to place an advertisement amongst the text, but it demonstrates clearly that the visitor's core need to easily consume a site's content need not be at odds for that site to sell advertising.
            </p>
          </a>
        </section>
        <section className="cf">
          <a name="decoration">
            <GuidelineHeader title="Decoration when needed and no unrelated content." slug="decoration" />
            <p>
              A website is neither an application nor a video game.  It is for content, and so its design must serve that purpose. Being true to these materials need not imply a boring website or require that all sites look the same.
            </p>
            <aside className="dn db-ns fl helvetica f6 fw3 w-50-ns bg-washed-blue dark-gray pl2 pr2 pt1 pb1 mr3 mt1 mb1 tr">
              <span className="fl">
                🧐
              </span>
              <p>
                Web pages don't all need to look the same—they just need to stay true to what they are.
              </p>
            </aside>
            <p>
              For example, on large screens this section has a pull quote with a washed blue background, a different text font, and an emoji!  While this design employs decoration, it's not distracting (though the pull quote it <em>is</em> distracting on a small screen, which is why it's not shown to those visitors).
            </p>
            <p>
              Decoration for its own sake, often to satisfy the vanity of the designer, goes counter to Brutalist Web Design.  Such needless decoration distracts the visitor from the reason for visiting and makes the content secondary.
            </p>
            <p>
              The same can be said of unrelated content, such as misleading links, sensationalist headlines, or distracting images.  These all attempt to take the visitor away from the content either for advertising or to create a false increase in engagement. Effort should be spent on compelling content, not trickery.  Content drives engagement.
            </p>
          </a>
        </section>
        <section className="cf">
          <a name="performance">
            <GuidelineHeader title="Performance is a feature." slug="performance" />
            <p>
              Websites aren't physical like a book or magazine.  Their contents must be downloaded over a computer network and then rendered in a web browser.  This takes time, but visitors are accustomed to this (up to a point).
            </p>
            <p>
              Consider that the entirety of <span className="i">Pride and Prejudice</span> by Jane Austen is  <span className="nowrap">708 kilobytes</span>.  To download this much data using a very slow mobile connection would be around one second (try it for yourself by <a href="https://www.gutenberg.org/files/1342/1342-0.txt">reading it on Project Gutenberg</a>).  <span className="i">Pride and Prejudice</span> is over 200 pages long, and would take <a href="https://www.howlongtoreadthis.com/book_details.php?asin=1503290565">over three hours</a> to read.  Certainly a news article, tweet, or product catalog can be downloaded and rendered in a comparable amount of time to a <em>novel</em>.
            </p>
            <p>
              The good news is that by adhering to the other guidelines, your website will download and render quickly. By embracing its nature and materials, a website adhering to Brutalist Web Design is fast.  It allows the system of network, browser, content, and operating system to work together smoothly and efficiently, as they were designed to.  Even with decoration, advertising, and imagery, a website embracing Brutalist Web Design will respect your visitor's time, bandwidth, and battery.
            </p>
          </a>
        </section>
      </section>
      <section className="mt2 pt3 bt b--silver">
        <a name="what-can-you-do"></a>
        <h1 className="f2 lh-solid mt0 helvetica"><small className="f3 db">Embrace</small> Brutalist Web Design
          <a className="f6 fw3 db mt2 mb1" href="#what-can-you-do">Permalink</a>
        </h1>
        <p>
          How much better would the web be if every site embraced Brutalist Web Design?  How amazing would it be to have readable text, clearly-marked interaction points, unobtrusive advertising, all wrapped up in a fast-loading site you could consume using the native tools of your chosen device?
        </p>
        <p>
          <a href="http://mrmrs.cc">A friend</a> gave me design advice once.  He said to start with left-aligned black text on a white background, and to apply styling <em>only to solve a specific problem</em>.  This is good advice.  Embrace this, and you embrace Brutalist Web Design.  Focus on your content and your visitors will enjoy you and your website.  Focus on decoration or tricking your visitors into clicking ads, and your content will suffer, along with your visitors.
        </p>
        <p>
          Here are some specific tips:
        </p>
        <ul className="pl0-ns pl3 lst-square lsp-outside">
          <li>Understand the semantic meaning of HTML elements.</li>
          <li>Learn about typography.</li>
          <li>Try designing for a small screen by default.</li>
          <li>Learn from designers about the choices they made and why they made them.</li>
          <li>When in doubt, do what <a href="https://en.wikipedia.org/wiki/Tron">Tron</a> does:
            <span className="b dib">
              fight for the users.
            </span>
          </li>
        </ul>
      </section>
    </main>
    <footer>
      <div className="light-gray bg-near-black">
        <section className="pa3 center measure-wide lh-copy mt0 cf calisto">
          <a name="about"></a>
          <h1 className="helvetica f2 mt0">About</h1>
          <p>
            Everything on this site is copyright <span dangerouslySetInnerHTML={{ __html: '&copy;'}} /> 2018–2019, by David Copeland and licensed
            under the Creative Commons <a className="light-blue" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Attribution-NonCommercial-ShareAlike 4.0 International</a> license.  The <a className="light-blue" href="https://github.com/davetron5000/brutalist-web-design">source is hosted on GitHub</a>. I welcome your changes or corrections, especially with regard to accessibility.
          </p>
          <img className="dn db-ns ml3 mb2 fr w-25 mt1 ml0 ba b--moon-gray" src="images/david-copeland-portrait.jpg" alt="Picture of this site's author, David Copeland" nopin="nopin" />
          <p>
            I go by “Dave”, write <a className="light-blue" href="https://naildrivin5.com/books/">books</a> as “David Bryant Copeland” and am <a className="light-blue" href="https://twitter.com/davetron5000">@davetron5000</a> on most social media platforms.  I'm a programmer and author, currently working as a director of engineering at <a className="light-blue" href="https://multithreaded.stitchfix.com/careers/">Stitch Fix</a> (warning: <em>not a Brutalist Web Design</em>).  I write occasionally on my <a className="light-blue" href="https://naildrivin5.com">blog</a>, which mostly follows the tenets of Brutalist Web Design.
          </p>
          <div className="tc">
            <img className="dn-ns w-50 ba b--moon-gray" src="images/david-copeland-portrait.jpg" alt="Picture of this site's author, David Copeland" nopin="nopin" />
          </div>
        </section>
      </div>
      <div>
        <section className="pa3 center measure-wide lh-copy mt0 calisto">
          <h1 className="helvetica f2 mt0">Colophon</h1>
          <p>
            This site was built in HTML by hand and published on <span dangerouslySetInnerHTML={{__html: '<%= htmlWebpackPlugin.options.publishDate %>' }} />{" " }
            Its general assembly and packaging are done using <a className="" href="https://webpack.js.org">Webpack</a>.  The site is styled using <a className="" href="http://tachyons.io/">Tachyons</a>.  Headings are set in Helvetica, with a fallback to the system sans-serif.  Body text is set in Calisto, with a fallback to the system serif.
            This site also supports “dark mode”, based on your OS settings.
          </p>
        </section>
      </div>
    </footer>
    <script dangerouslySetInnerHTML={{ __html: gauges }} />
  </body>
</html>
              )};
