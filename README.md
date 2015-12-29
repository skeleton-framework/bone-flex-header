# Bone - Flex Header

Here's a reactive, fixed to top header that shrinks on scroll.

### See it in action

Clone the repo, `npm install` all the stuff, and say `gulp`. The example file
should be being served at [localhost:3000](http://localhost:3000)

### Use it in your project

You'll need the `bone.css` and `bone.js` files. We don't have a good way to
bundle everything up yet, so if you want to use this with other bones or whatever,
you'll have to handle that yourself.

The basic class structure is as follows:

    <header class="bone-flex-header">
      <div class="bone-flex-header-inner container">
          <h1 class="bone-flex-header-brand">Your headline or branding or what have you</h1>
      </div>
    </header>

The header is set up to have a height of 250px.

## WIP

This is small and pretty, but is still being actively developed to make it
stable, check if it's actually mobile friendly, and just make it generally less
poo.

TODO:

* Configurable header height
* Configurable trigger scroll position for flexing the head
* Handy dandy nav items that flex with the rest of it
