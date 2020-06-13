---
id: 7
path: /better-containers
thumbnail: css-grid-container.png
date: 2019-9-16T01:00:01.889Z
edited:
next: /dotenv
title: Better Containers
subtitle: Create better containers with css grid
tags:
  - css
  - grid
  - containers
  - responsive
popular: false
---

If you're anything like me chances are you hate css libraries like `bootstrap` but love their containers.

> I don't actually hate bootstrap. But it appears that developers who use bootstrap know bootstrap, not css.

also, I'm very weird about containers and try to have the least amount of nested divs as possible, and constaintly trying to minigate my divs;

> Cmon, I cant be the only one who wants vomit at the site of this

```html
<div>
  <div>
    <div>
      <div>
        <div>
          <div>You gotta be kidding me</div>
        </div>
      </div>
    </div>
  </div>
</div>
```

Ok jokes aside lemme show you my current solution

```scss
.container {
  display: grid;
  grid-template-columns:
    minmax(1em, 1fr)
    [main-start] minmax(0, 60em) [main-end]
    minmax(1em, 1fr);
  width: 100%;

  > * {
    grid-column: main;
  }
}
```

<iframe
  height="500"
  width="100%"
  title="css grid container 1"
  src="//codepen.io/glweems/embed/xxKJQOq/"
  >
    See the Pen
    <a href='https://codepen.io/glweems/pen/xxKJQOq/'>
    css grid container 1
    </a> by Garrett Weems
    (<a href='https://codepen.io/glweems'>@glweems</a>) on
    <a href='https://codepen.io'>CodePen</a>.
</iframe>

That's pretty cool and all but what if you wanted something like _bootstraps_ `container-fluid` class?

Well, we would need to add couple things...

```scss
.container {
  display: grid;
  gap: 1em 0;
  grid-template-columns:
    [flush-start] 1em
    [fluid-start] minmax(1em, 1fr)
    [main-start] minmax(0, 60em) [main-end]
    minmax(1em, 1fr) [fluid-end]
    1em [flush-end];
  width: 100%;

  > * {
    grid-column: main;
  }
  .fluid {
    grid-column: fluid;
  }
  .flush {
    grid-column: flush;
  }
}
```

<iframe
  height="500"
  width="100%"
  scrolling="no"
  title="css grid container 2"
  src="//codepen.io/glweems/embed/jONpQpb/"
  frameborder="no">
    See the Pen <a href='https://codepen.io/glweems/pen/jONpQpb/'>css grid container 2</a> by Garrett Weems
    (<a href='https://codepen.io/glweems'>@glweems</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

This already makes it better than _bootstrap's_ solution because now we can just create a container add `.fluid` _or_ `.flush` to anything within and it will just work.

We can still make this a little better with some breakpoints

> This final form of our container looks something like This

```scss
$sm: 540px;
$md: 720px;
$lg: 960px;
$xl: 1140px;

.container {
  display: grid;
  gap: 1em 0;
  grid-template-columns:
    [flush-start] 1em
    [fluid-start] minmax(0, 1fr)
    [main-start] minmax(0, $sm) [main-end]
    minmax(0, 1fr) [fluid-end]
    1em [flush-end];
  width: 100%;

  @media screen and (min-width: $md) {
    grid-template-columns:
      [flush-start] 1em
      [fluid-start] minmax(0, 1fr)
      [main-start] minmax(0, $md) [main-end]
      minmax(0, 1fr) [fluid-end]
      1em [flush-end];
  }

  @media screen and (min-width: $lg) {
    grid-template-columns:
      [flush-start] 1em
      [fluid-start] minmax(0, 1fr)
      [main-start] minmax(0, $lg) [main-end]
      minmax(0, 1fr) [fluid-end]
      1em [flush-end];
  }
  @media screen and (min-width: $xl) {
    grid-template-columns:
      [flush-start] 1em
      [fluid-start] minmax(0, 1fr)
      [main-start] minmax(0, $xl) [main-end]
      minmax(0, 1fr) [fluid-end]
      1em [flush-end];
  }

  > * {
    grid-column: main;
  }
  .fluid {
    grid-column: fluid;
  }
  .flush {
    grid-column: flush;
  }
}
```

<iframe
  height="500"
  width="100%"
  title="css grid container"
  src="//codepen.io/glweems/embed/xxKJmPQ/"
  frameborder="no">
    See the Pen
    <a href='https://codepen.io/glweems/pen/xxKJmPQ/'>
      css grid container
    </a>
    by Garrett Weems
    (<a href='https://codepen.io/glweems'>@glweems</a>) on
     <a href='https://codepen.io'>CodePen</a>.
</iframe>

Now our content width is based on our breakpoints
