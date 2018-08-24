# General Ember Notes 

## In General...

* the vendor directory is full of content that is compiled into your app
* after installing an add-on, make sure to restart your server
* component names require a '-' to differentiate from possible html elements

### Components

* require a '-'
* using the generator makes 2 things:
    - template in templates/components/component-name.hbs
    - JS source file in app/components/component-name.js
* referenced in views as {{component-name propName=propValue}}
* contains an "actions hash" that will contain code for functions called on the templates 

## Testing 

  * The `new ember app_name` command will install QUnit automatically as the testing framework 
    - Ember CLI automatically runs [Testem test runner](https://github.com/testem/testem), and opens a Chrome window
    - Ember automatically tests for syntax errors using [ESLint](https://eslint.org/)

## Generators

  * Ember generators follow the format `ember g folder file`
    - An example would be: `ember g acceptance-test list-rentals`
    - This creates the file `tests/acceptance/list-rentals-test.js`
    
  *  `ember g route about` <-- create a '/about' route and test 

## Routes

  Using a route generator builds 3 things:
  1) entry in app/router.js which maps the route to a specific url 
  2) route handler file aka controller in `app/routes/name_you_chose`
  3) route template aka view 

## Helpers

  Generic way of calling a helper:

  {{#name_of_helper class='classForElement'}}
    Text to display
  {{/name_of_helper}}

  * link-to (requires a destination inside the tag)
    {{#link-to 'contact' class="button"}}
      Contact Us 
    {{/link-to}}
  
### Handlebars Helpers 

  * each (similar to ruby's .each)
    {{#each passedInObject as |variableName|}}
      {{variableName.attributeName}} is how to implement it.
    {{/each}}

## Outlet 

  In a view, {{outlet}} functions like props.children()

## Hooks

### Root Hook 

  * model() - used to load the model on a route 
      - return value is used like props()

### Lifecycle Hooks

  Lifecycle Hooks are methods that hit certain times in the life of a component

  * beforeModel() - before the data is fetched, before the page is rendered
  * willRender() - called before a component is rendered 
  * didRender() - called after a component is rendered 

#### On Initial Render:

  * init()
  * didReceiveAttrs()
  * willRender()
  * didInsertElement()
  * didRender()

#### On Re-Render:

  * didUpdateAttrs() - "resetting presentation state on attribute change"
      - runs when a component's attributes have changed, PRIOR to rerender 
      - DOES NOT RUN:
          - component.rerender 
          - component.set 
          - on changes in models/services used by the template (?)
  * didReceiveAttrs()
  * willUpdate()
  * willRender()
  * didUpdate()
  * didRender()

#### On Component Destroy:

  * willDestroyElement()
  * willClearRender()
  * didDestroyElement()