The cf-icon component provides
Scalable Vector Graphics (SVG) icons for Capital Framework.
This component can be used by itself,
but is designed to work with Capital Framework.


## Table of contents

- [Variables](#variables)
    - [Size variables](#size-variables)
- [SVG icon basics](#svg-icon-basics)
- [Rotating update icon](#rotating-update-icon)
- [The icons](#the-icons)
    - [Navigation icons](#navigation-icons)
    - [Status icons](#status-icons)
    - [Social/sharing icons](#socialsharing-icons)
    - [Communications icons](#communications-icons)
    - [Document icons](#document-icons)
    - [Financial products, services, and concepts](#financial-products-services-and-concepts)
    - [Web application icons](#web-application-icons)


## Variables

Component variables are used to theme a component.
They likely will be left as is, but if needed can be overwritten by duplicating
the variable in a `@key: value` format with a different value.
This customized variable would be placed in the same file
where this component's less file is imported.

### Size variables

The standard icon height in ems matches the 19px rendered canvas of text
set in Avenir Next sized at 16px (19/16 = 1.1875).

```
@cf-icon-height: 1.1875em;
```

## SVG icon basics

We subscribe to the guidance offered by Chris Coyier in his article,
["A Pretty Good SVG Icon System"](https://css-tricks.com/pretty-good-svg-icon-system/),
in which he concludes, "Just include the icons inline."

As a simple example, you could create one of our icon links like so:

<a class="a-link a-link__icon" href="#">
    <span class="a-link_text">Download the info sheet</span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 651.7 1200" class="cf-icon-svg"><path d="M507.1 692.8c-15.6-15.6-40.9-15.6-56.6 0l-85.1 85.1V466.6c0-22.1-17.9-40-40-40s-40 17.9-40 40V778l-85.1-85.1c-15.6-15.6-40.9-15.6-56.6 0-15.6 15.6-15.6 40.9 0 56.6L297 902.9c7.5 7.5 17.7 11.7 28.3 11.7s20.8-4.2 28.3-11.7l153.3-153.4c15.8-15.7 15.8-41 .2-56.7z"/><path d="M30 161c-16.5 0-30 13.5-30 30v827.8c0 16.5 13.5 30 30 30h591.7c16.5 0 30-13.5 30-30V343.7L469 161H30zm389.6 60v134.8c0 19.9 16.3 36.2 36.2 36.2h135.9V988.8H60V221h359.6z"/></svg>
</a>

```
<a class="a-link a-link__icon" href="#">
    <span class="a-link_text">Download the info sheet</span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 651.7 1200" class="cf-icon-svg"><path d="M507.1 692.8c-15.6-15.6-40.9-15.6-56.6 0l-85.1 85.1V466.6c0-22.1-17.9-40-40-40s-40 17.9-40 40V778l-85.1-85.1c-15.6-15.6-40.9-15.6-56.6 0-15.6 15.6-15.6 40.9 0 56.6L297 902.9c7.5 7.5 17.7 11.7 28.3 11.7s20.8-4.2 28.3-11.7l153.3-153.4c15.8-15.7 15.8-41 .2-56.7z"/><path d="M30 161c-16.5 0-30 13.5-30 30v827.8c0 16.5 13.5 30 30 30h591.7c16.5 0 30-13.5 30-30V343.7L469 161H30zm389.6 60v134.8c0 19.9 16.3 36.2 36.2 36.2h135.9V988.8H60V221h359.6z"/></svg>
</a>
```

The SVG code in this example was copied from `cf-icons/src/icons/download.svg`.

Because including raw SVG code is not necessarily pretty or user-friendly,
we encourage using your templating system to include them by reference.
For example, here is how we include them in the templates of the
Capital Framework documentation site:

```
<a class="a-link a-link__icon" href="#">
    <span class="a-link_text">Download the info sheet</span>
    {% raw %}{% include icons/download.svg %}{% endraw %}
</a>
```

Which renders as:

<a class="a-link a-link__icon" href="#">
    <span class="a-link_text">Download the info sheet</span>
    {% include icons/download.svg %}
</a>

> **Note:** Jinja2, the templating language that cfgov-refresh uses,
has a near-identical syntax for includes, but it requires that the path
be enclosed in quotation marks, like so:
`{% raw %}{% include 'icons/download.svg' %}{% endraw %}`.

The filenames of the SVGs included with cf-icons
match the names in [the tables below](#the-icons).
There are duplicate SVG files for each alias, as well.

> **Note to contributors:** If any icon is ever updated,
you must be sure to also update each of the alias SVGs.

{% comment %}
TODO: Provide better contributing docs for SVG icons,
including how to run the Node script for processing the source SVGs.
{% endcomment %}

### What the Less is doing

If you look in `cf-icons.less`, below the aforementioned sizing variable,
you'll see this simple rule:

```
.cf-icon-svg {
    height: @cf-icon-height;
    vertical-align: text-top;
    fill: currentColor;
    …
}
```

Referring back to the example above, you can see that we have encoded
`class="cf-icon-svg"` in the root element of each of our SVG icons.
As a result, the Less rule gets applied to all of the SVGs on the page,
just like any other HTML element.

We start by limiting the size of the SVG to a proportion of the text height,
using the `@cf-icon-height` variable's em value.
To align the canvas of the icon with the canvas of neighboring text,
we set `vertical-align: text-top;`.
Finally, setting `fill: currentColor;` tells the SVG to set its path's fill
color to match the `color` value of its parent element.

### Caveats

There are two modifications based on restrictions in Internet Explorer 8 and 9
(IE8/IE9).

First, IE8 does not support `fill: currentColor`. Typically the fallback would
be to use a PNG image, but due to the inability to know what the background or
text color of its surroundings are, we found it better to fall back to the
paired text with no icon.

Second, IE9 displays SVGs as full width by default (not the paths, just the
SVG container). To eliminate this issue we've set the width of the SVGs to
match the height. The whitespace to the left or right may not be quite
accurate, but we determined this is an acceptable difference for a legacy
browser like IE9.

## Inline SVG background

In some cases we embed an SVG as a background image.
To accomplish this, a custom less plugin is used to inject the SVG icon source
file inline into the CSS `background-image` property.
This is exposed via a mixin, `.u-svg-inline-bg( @name )`,
where `@name` is the SVG icon canonical name.

## Rotating update icon

Our previous font icon system provided modifiers to rotate any icon. We found
in reality this wasn't practical and only one icon is ever animated, `update`.
We've provided an alias--`updating`--to be used within the UI when a user needs
to be made aware that the website is working on responding to their actions.
[See the status icons table below](#status-icons)


## The icons

Each icon has a circled variant shown in the second column
(or square, in the case of the social media icons)
that can be accessed by appending `-round` (or `-square`) to
the canonical name or any of its aliases.

### Navigation icons

| icon | icon-round | canonical name | aliases |
| ---- | ---------- | -------------- | ------- |
| {% include icons/up.svg %} | {% include icons/up-round.svg %} | up | chevron-up |
| {% include icons/right.svg %} | {% include icons/right-round.svg %} | right | chevron-right |
| {% include icons/down.svg %} | {% include icons/down-round.svg %} | down | chevron-down |
| {% include icons/left.svg %} | {% include icons/left-round.svg %} | left | chevron-left |
| {% include icons/arrow-up.svg %} | {% include icons/arrow-up-round.svg %} | arrow-up |  |
| {% include icons/arrow-right.svg %} | {% include icons/arrow-right-round.svg %} | arrow-right |  |
| {% include icons/arrow-down.svg %} | {% include icons/arrow-down-round.svg %} | arrow-down |  |
| {% include icons/arrow-left.svg %} | {% include icons/arrow-left-round.svg %} | arrow-left |  |
{: class="icon-table"}

### Status icons

| icon | icon-round | canonical name | aliases |
| ---- | ---------- | -------------- | ------- |
| {% include icons/approved.svg %} | {% include icons/approved-round.svg %} | approved | check, checkmark, success |
| {% include icons/error.svg %} | {% include icons/error-round.svg %} | error | delete, close, remove, multiply, multiplication, x |
| {% include icons/warning.svg %} | {% include icons/warning-round.svg %} | warning | alert, exclamation-mark |
| {% include icons/help.svg %} | {% include icons/help-round.svg %} | help | question, question-mark |
| {% include icons/update.svg %} | {% include icons/update-round.svg %} | update | updating _(used for animated state)_ |
| {% include icons/dollar.svg %} | {% include icons/dollar-round.svg %} | dollar |  |
| {% include icons/plus.svg %} | {% include icons/plus-round.svg %} | plus | add, addition, expand |
| {% include icons/minus.svg %} | {% include icons/minus-round.svg %} | minus | subtract, subtraction, collapse |
| {% include icons/divide.svg %} | {% include icons/divide-round.svg %} | divide | division |
| {% include icons/equal.svg %} | {% include icons/equal-round.svg %} | equal | equals |
| {% include icons/percentage.svg %} | {% include icons/percentage-round.svg %} | percentage | percent |
{: class="icon-table"}

### Social/sharing icons

| icon | icon-square | canonical name | aliases |
| ---- | ---------- | -------------- | ------- |
| {% include icons/email.svg %} | {% include icons/email-square.svg %} | email | envelope, envelope-back |
| {% include icons/facebook.svg %} | {% include icons/facebook-square.svg %} | facebook |  |
| {% include icons/flickr.svg %} | {% include icons/flickr-square.svg %} | flickr |  |
| {% include icons/github.svg %} | {% include icons/github-square.svg %} | github |  |
| {% include icons/linkedin.svg %} | {% include icons/linkedin-square.svg %} | linkedin |  |
| {% include icons/twitter.svg %} | {% include icons/twitter-square.svg %} | twitter |  |
| {% include icons/youtube.svg %} | {% include icons/youtube-square.svg %} | youtube |  |
{: class="icon-table"}

### Communications icons

| icon | icon-round | canonical name | aliases |
| ---- | ---------- | -------------- | ------- |
| {% include icons/email.svg %} | {% include icons/email-round.svg %} | email | envelope-back |
| {% include icons/fax.svg %} | {% include icons/fax-round.svg %} | fax | fax-machine |
| {% include icons/mail.svg %} | {% include icons/mail-round.svg %} | mail | envelope-front |
| {% include icons/phone.svg %} | {% include icons/phone-round.svg %} | phone | telephone, handset |
| {% include icons/technology.svg %} | {% include icons/technology-round.svg %} | technology | cellphone, tablet |
| {% include icons/web.svg %} | {% include icons/web-round.svg %} | web | globe, world |
{: class="icon-table"}

### Document icons

| icon | icon-round | canonical name | aliases |
| ---- | ---------- | -------------- | ------- |
| {% include icons/appendix.svg %} | {% include icons/appendix-round.svg %} | appendix |  |
| {% include icons/paper-clip.svg %} | {% include icons/paper-clip-round.svg %} | paper-clip | attach, attachment |
| {% include icons/copy.svg %} | {% include icons/copy-round.svg %} | copy | duplicate |
| {% include icons/document.svg %} | {% include icons/document-round.svg %} | document | doc, pdf |
| {% include icons/download.svg %} | {% include icons/download-round.svg %} | download |  |
| {% include icons/upload.svg %} | {% include icons/upload-round.svg %} | upload |  |
| {% include icons/edit.svg %} | {% include icons/edit-round.svg %} | edit | pencil |
| {% include icons/print.svg %} | {% include icons/print-round.svg %} | print | printer |
| {% include icons/rss.svg %} | {% include icons/rss-round.svg %} | rss | feed |
| {% include icons/save.svg %} | {% include icons/save-round.svg %} | save | disk |
| {% include icons/supplement.svg %} | {% include icons/supplement-round.svg %} | supplement |  |
{: class="icon-table"}

### Financial products, services, and concepts

| icon | icon-round | canonical name | aliases |
| ---- | ---------- | -------------- | ------- |
| {% include icons/bank.svg %} | {% include icons/bank-round.svg %} | bank | bank-account |
| {% include icons/building-credit.svg %} | {% include icons/building-credit-round.svg %} | building-credit | |
| {% include icons/car.svg %} | {% include icons/car-round.svg %} | car | car-loan, auto, auto-loan |
| {% include icons/complaint.svg %} | {% include icons/complaint-round.svg %} | complaint | |
| {% include icons/fountain-pen.svg %} | {% include icons/fountain-pen-round.svg %} | fountain-pen | contract |
| {% include icons/credit-card.svg %} | {% include icons/credit-card-round.svg %} | credit-card | |
| {% include icons/credit-report.svg %} | {% include icons/credit-report-round.svg %} | credit-report |  |
| {% include icons/debt-collection.svg %} | {% include icons/debt-collection-round.svg %} | debt-collection |  |
| {% include icons/debt.svg %} | {% include icons/debt-round.svg %} | debt |  |
| {% include icons/getting-a-credit-card.svg %} | {% include icons/getting-a-credit-card-round.svg %} | getting-a-credit-card | credit-card-contract |
| {% include icons/loan.svg %} | {% include icons/loan-round.svg %} | loan |  |
| {% include icons/money.svg %} | {% include icons/money-round.svg %} | money | dollar-bill |
| {% include icons/money-transfer.svg %} | {% include icons/money-transfer-round.svg %} | money-transfer |  |
| {% include icons/mortgage.svg %} | {% include icons/mortgage-round.svg %} | mortgage | sold |
| {% include icons/house.svg %} | {% include icons/house-round.svg %} | house | buying-a-house, owning-a-home, home |
| {% include icons/payday-loan.svg %} | {% include icons/payday-loan-round.svg %} | payday-loan |  |
| {% include icons/college.svg %} | {% include icons/college-round.svg %} | college | paying-for-college, grad-cap, mortarboard |
| {% include icons/prepaid-cards.svg %} | {% include icons/prepaid-cards-round.svg %} | prepaid-cards | prepaid |
| {% include icons/quick-cash.svg %} | {% include icons/quick-cash-round.svg %} | quick-cash |  |
| {% include icons/piggy-bank.svg %} | {% include icons/piggy-bank-round.svg %} | piggy-bank | retirement |
| {% include icons/piggy-bank-check.svg %} | {% include icons/piggy-bank-check-round.svg %} | piggy-bank-check |  |
| {% include icons/split.svg %} | {% include icons/split-round.svg %} | split |  |
{: class="icon-table"}

### Web application icons

| icon | icon-round | canonical name | aliases |
| ---- | ---------- | -------------- | ------- |
| {% include icons/audio-max.svg %} | {% include icons/audio-max-round.svg %} | audio-max | audio-high |
| {% include icons/audio-medium.svg %} | {% include icons/audio-medium-round.svg %} | audio-medium |  |
| {% include icons/audio-low.svg %} | {% include icons/audio-low-round.svg %} | audio-low |  |
| {% include icons/audio-mute.svg %} | {% include icons/audio-mute-round.svg %} | audio-mute | mute, audio-off |
| {% include icons/bookmark.svg %} | {% include icons/bookmark-round.svg %} | bookmark |  |
| {% include icons/unbookmark.svg %} | {% include icons/unbookmark-round.svg %} | unbookmark |  |
| {% include icons/broadcast.svg %} | {% include icons/broadcast-round.svg %} | broadcast | antenna, radio |
| {% include icons/bullhorn.svg %} | {% include icons/bullhorn-round.svg %} | bullhorn | megaphone |
| {% include icons/chart.svg %} | {% include icons/chart-round.svg %} | chart | graph |
| {% include icons/clock.svg %} | {% include icons/clock-round.svg %} | clock | time |
| {% include icons/date.svg %} | {% include icons/date-round.svg %} | date | calendar |
| {% include icons/dialogue.svg %} | {% include icons/dialogue-round.svg %} | dialogue | discussion |
| {% include icons/disabled.svg %} | {% include icons/disabled-round.svg %} | disabled | no, disallowed |
| {% include icons/external-link.svg %} | {% include icons/external-link-round.svg %} | external-link |  |
| {% include icons/favorite.svg %} | {% include icons/favorite-round.svg %} | favorite | star, starred, fav, fave |
| {% include icons/unfavorite.svg %} | {% include icons/unfavorite-round.svg %} | unfavorite | unstar, unstarred, unfav, unfave |
| {% include icons/information.svg %} | {% include icons/information-round.svg %} | information | info, i |
| {% include icons/lightbulb.svg %} | {% include icons/lightbulb-round.svg %} | lightbulb | idea |
| {% include icons/link.svg %} | {% include icons/link-round.svg %} | link |  |
| {% include icons/list.svg %} | {% include icons/list-round.svg %} | list |  |
| {% include icons/lock.svg %} | {% include icons/lock-round.svg %} | lock | locked |
| {% include icons/unlock.svg %} | {% include icons/unlock-round.svg %} | unlock | unlocked |
| {% include icons/menu.svg %} | {% include icons/menu-round.svg %} | menu | hamburger |
| {% include icons/microphone.svg %} | {% include icons/microphone-round.svg %} | microphone | mic |
| {% include icons/newspaper.svg %} | {% include icons/newspaper-round.svg %} | newspaper | news |
| {% include icons/parent.svg %} | {% include icons/parent-round.svg %} | parent | family |
| {% include icons/play.svg %} | {% include icons/play-round.svg %} | play |  |
| {% include icons/open-quote.svg %} | {% include icons/open-quote-round.svg %} | open-quote |  |
| {% include icons/close-quote.svg %} | {% include icons/close-quote-round.svg %} | close-quote |  |
| {% include icons/search.svg %} | {% include icons/search-round.svg %} | search | zoom, magnifying-glass |
| {% include icons/settings.svg %} | {% include icons/settings-round.svg %} | settings | preferences, gear, cog |
| {% include icons/share.svg %} | {% include icons/share-round.svg %} | share |  |
| {% include icons/speech-bubble.svg %} | {% include icons/speech-bubble-round.svg %} | speech-bubble |  |
| {% include icons/user.svg %} | {% include icons/user-round.svg %} | user | person |
| {% include icons/wifi.svg %} | {% include icons/wifi-round.svg %} | wifi | wi-fi, wireless |
{: class="icon-table"}
