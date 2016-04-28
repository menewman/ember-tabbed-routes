# Ember-tabbed-routes

This is a demonstration of how to use [Bootstrap tabs](http://getbootstrap.com/javascript/#tabs) with nested routes in Ember.js.

You can see a live demo here: [http://menewman.github.io/ember-tabbed-routes/](http://menewman.github.io/ember-tabbed-routes/)

## Why?

The examples on the Bootstrap site show how to use tabs to switch between content. However, they assume that all of the content markup is on the same page and that you're just showing or hiding it as needed. When you're working with Ember, you may want to make each tab's content its own nested route, rather than having all of the tab content in the same route. This repository is meant to demonstrate how to do that.

## How does it work?

With Bootstrap installed, this functionality can be accomplished entirely with markup -- no JavaScript or actions involved! All you need to do is create a tabstrip that looks something like this:

  ```handlebars
  <ul class="nav nav-tabs">
    {{#each model.tabs as |tab|}}
      {{#link-to tab.route tagName='li' href=false}}
        {{#link-to tab.route}}{{tab.name}}{{/link-to}}
      {{/link-to}}
    {{/each}}
  </ul>
  <div class="tab-content">
    <div role="tabpanel" class="tab-pane active">
      {{outlet}}
    </div>
  </div>
  ```

(In this example, the markup is assuming that the model has a `tabs` property that is an array of tab objects, each of which has a `name` and `route`.)

By default, a Bootstrap tabstrip is an unordered list defined by the CSS class name "nav nav-tabs". Each tab is comprised of a list-item element that contains an anchor. The selected tab's list-item element receives the "active" CSS class.

Coincidentally, the `link-to` element in Ember automatically receives the "active" CSS class if its linked route is active. We can take advantage of that by creating a `link-to` that renders itself as a list-item element, with `href=false` to suppress it from actually linking to anything. Then, we can nest a real `link-to` inside of that to actually make the tab link to a nested route. That way, the `li` associated with the active route will automatically be marked with the "active" CSS class, just as Bootstrap expects.

* Note: This solution was inspired by the discussion in this thread: [https://github.com/emberjs/ember.js/pull/1849](https://github.com/emberjs/ember.js/pull/1849)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200/ember-tabbed-routes](http://localhost:4200/ember-tabbed-routes).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

