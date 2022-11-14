# Minimal Startpage

Very simple page for web browser startpage or homepage.
Built with Vitejs, Vue, UnoCSS.
The favicon is from Iconmonstr.

## How to edit

### Links

You might wanna look at `LinkSection.vue` in `/src/components`.
In Vue's data() function, you'd see links object. Edit how you wish.

-   In `links` object, you have it's children 1,2....8, I use them to identify the link, they are also related to the Hotkeys section, make sure they are matched
-   Each children has `id: x`, I used to view the number in the template, it also matches the hotkey and it's object name.
-   In `mounted` hook, it's the function to capture keypress. Again, it maches with `links` objects and it's property `id`

## How to setup my browser to open the page on load and new tab?

-   You can set your custom startpage URL as homepage. And set browser startup to open homepage.
-   Use extension like New Page Redirect to open custom URL when open new tab.

## Recommended IDE Setup

-   [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Before you run

You gonna need Nodejs installed, latest is recommended.

## Dependencies

-   Tinykeys (https://github.com/jamiebuilds/tinykeys)
-   Vue 3
-   Vitejs
-   UnoCSS

## How to run

-   Clone this repo
-   Open terminal and `cd startpage`
-   Install dependencies `npm install `
-   Finally run using `npm run dev`

## Build

-   Run `npm run build`

## Enjoy! and help me correct spaghetti code. :(
