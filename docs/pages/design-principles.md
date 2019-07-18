---
title: Design Principles
permalink: /foundation/design-principles
layout: generic-page
collection_name: pages
section: foundation
---
### Overall principles

These are the strategic underpinnings for the CFPB’s design and development standards. They should serve as the backbone for the user experience, ensuring that the standards we set enable products that are easy to use and understand for consumers.

#### Public service, public trust

##### Honest, transparent design that wins the public’s trust.

We establish trust through clear, concise, and approachable design that is always consumer-driven. We demonstrate transparency through our user-friendly online experiences and tools and our dedication to open-source content.

#### Give the user control

##### Design to empower users with information.

The CFPB motivates consumers to take the control of their financial decision-making; our designs enable this process. Good design increases transparency and succinctly hands the user all the necessary information, giving consumers control of how they use it. Designers must rely on introspection and research to discover what path users instinctively take and then cater to those instincts.

#### Aesthetic integrity

##### Align appearance with purpose.

Aesthetic integrity is not merely “attractiveness;” it implies the successful integration of design and function. Appearance should align with purpose. Using clear and intuitive design creates a trustworthy tone and a powerful platform for supporting the CFPB’s mission.

##### Maintain consistency and clarity.

Maintaining consistency in design empowers users to seamlessly transfer their knowledge and skills from one product to another. Focusing on consistency helps uphold aesthetic integrity.

#### Design with data

##### Design gives voice to data, and data informs design.

Because the CFPB is a data-driven organization, quantitative measures of success should be integral to the design process. Design should incorporate data to aid understanding of complex issues, and data-driven feedback should influence the design process. Succinct and compelling visualization of information gives data a voice and helps us clarify otherwise indigestible numbers.

#### Inclusion and accessibility

##### Design for the widest possible demographic with bias toward clear articulation, plain language, and intuitive design.

We design to meet each consumer where he or she is. We are sensitive to experiential level, timing, and biases and aim to design experiences that are equally accessible to everyone, and equally empowering no matter what the user’s skill set or familiarity. Simple, clean designs are the most effective and wide-reaching.

#### Coherent end-to-end user experience

##### Unify parts of the user experience and transition seamlessly between them.

The best design guides the user’s experience from beginning-to-end and caters to his or her expectations. Navigation between sections should be intuitive and transitions should be seamless. Consistent quality and attention to detail are essential to maintain a cohesive user experience.

### Accessibility best practices

Perceivable - Operable - Understandable - Robust

The following four principles, as defined by the W3C®, lay the foundation for ensuring that web content is available for all users, including users with disabilities and users on non-desktop devices. These guidelines also enable future compatibility in the event that future devices are radically different from those in use today.

Note: While this document can function as a checklist – and at times, it will – that isn’t the primary purpose. The goal is to foster understanding of why these guidelines are important.

This guide is adapted from the Web Content Accessibility Guidelines 2.0, a W3C Recommendation. More info.

### Perceivable (View Perceivable on W3C site)

Information and user interface elements must be presented to users in ways that they can perceive. This includes considering individuals using assistive technology (e.g., screen readers for blind users or captions for deaf users) and the limitations of different devices (e.g., grayscale screens or muted mobile devices).

#### Include text alternatives for non-text content

For any content that is not text-based (images, audio, video, animations, charts, graphs, etc), provide an alternative version of that content that is text-based.

* Use the alt and title attributes on images and other graphical elements.
* Use the `<title>` and `<desc>` elements in SVG drawings.
* Use fallback text for the `<object>` element.
* Include descriptive text near images (for example, a pie chart legend with percentages of each item).
* Provide transcripts of audio and video recordings.
* Provide alternatives for multimedia
* Multimedia such as audio, video, and animations will usually require more than just descriptive text. In most cases, the timing of text and descriptions in these files is important and should therefore be incorporated in an accessible manner.

##### PRERECORDED CONTENT

* For audio-only content, provide a transcript of both spoken words and descriptions of other sounds.
* For video-only content, provide an audio track or transcript that describes the video.
* Combined audio and video content should accommodate alternatives for both (e.g., closed captioning or sign interpretation for audio, and an audio track or a screenplay-like document that transcribes dialog and descriptions of sounds and action for video).

##### LIVE CONTENT

* Closed captioning or sign language interpretation should always be available, but in some cases providing the prepared remarks or script alongside the audio/video may suffice.

#### Organize content semantically

Semantic content allows user agents to correctly parse documents and present it to end users in a way that is appropriate for their device and medium without losing information or structure.

* Use semantic HTML, including relative header tags, lists, and semantic tags like `<aside>`, and `<figure>`
* Support HTML tables with semantic tags like `<th>`, `<thead>`, `<tbody>`, and `<caption>`
* Mark up HTML forms with semantic tags like `<label>`, `<fieldset>`, `<legend>`, and – where appropriate – HTML5 form additions like email fields.
* If the sequence of a page matters, the underlying HTML document should be in that order or the sequence should be machine-readable through another method.
* Avoid text descriptions that rely on layout or other sensory items such as “click the round button” or “the image on the right.” However, note that “above” and “below” are generally understood to mean “preceding” and “after,” and as such are permissible usage.

#### Make content easily distinguishable from its surroundings

These guidelines help ensure that content is perceivable for sighted users.

##### TEXT:

* Choose easy-to-read fonts.
* Avoid using images of text, except for logos and images meant to represent physical documents.
* Text should be able to be resized up to 200% without causing overlapping issues with other content on the page. Don’t rely on browser zoom, since some users have settings to force large type.

##### COLOR:

* Do not use color as the only means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.
* Text should have a contrast ratio of at least 4.5 : 1, but there are exceptions.
  1. For large text, a contrast ratio of only 3 : 1 is necessary. Large regular text is at least 18pt/24px, while large bold text is 14pt/18px.
  2. Text or images of text that are either pure decoration or not visible, or are part of a logo, picture that contains significant other visual content, or inactive UI components (like disabled form controls) do not have a color contrast requirement.
* The Color Contrast Check is a nice tool for testing color contrast ratios.

##### AUDIO:

* Avoid auto-playing audio. If this is absolutely unavoidable, provide a control that allows the user to stop the audio and adjust or mute the volume.
* In recorded audio, background sounds should be at least 20 dB lower than foreground sounds and speech. This does not apply to music.

#### Operable (View Operable on W3C site)

User interface components and navigation must be operable: an interface cannot require interaction that a user cannot perform. Following these guidelines will guarantee that all users can navigate a website or app regardless of their input device (mouse, keyboard, touchscreen, screen reader, etc).

##### Ensure that all content is keyboard accessible

In general, if a website can be operated using only the keyboard, it will also be operable with less-common input devices.

* All controls must be addressible by the keyboard. By default, this includes `<a>`, `<area>`, `<object>`, and all form elements. Other elements can be made addressible by applying a tabindex value.
* Avoid keyboard traps. If a user can tab to an element on the page, the user needs to be able to exit that element using only the keyboard as well.
* Do not rely on specific timing of individual keystrokes when implementing keyboard accessibility.

#### Give users ample time to interact with content

You should not use time limits.

For cases in which time limits are unavoidable:

Allow users to turn off or extend the time limit to at least 10 times the default setting.
Warn users at least 20 seconds before a time limit expires and enable a time extension with a simple action, such as pressing the space bar.
If a user needs to log in again after a time limit, make sure that there is no loss of data.
Avoid interrupting users

Avoid popups or other modal dialogs that haven not been prompted by explicit user action or are alerting the user about something that is time-sensitive.
Allow users to pause, stop, or hide anything moving, blinking, or scrolling on the screen if the motion lasts longer than 5 seconds.
Allow users to pause, stop, hide, or control the frequency of auto-updating information.
Do not create designs or interactions that may cause seizures

Nothing on the page should flash more than 3 times in 1 second.
Help users navigate, find content, and determine where they are

Allow users to bypass blocks of content that appear repeatedly on a website, like navigation, with a “skip to main content” or similar link.
Use titles that describe a webpage’s topic or purpose.
Include descriptive section headings to organize content.
Unless content is a step in a process, provide more than one way to access it, such as through browsing and search.
Provide a breadcrumb trail or other way for the user to identify their location in the site on every page.
Use descriptive link text. Avoid calls to action like “click here” or “read more.”
Manage focus
Whe users navigate a webpage using the keyboard or another alternative input device, only one element on the page will be in focus at a given time.

If the order of controls on a page matters, make sure they will be focused in that order when navigating by keyboard.
Make sure there is a visible indicator on screen of which element has focus. This may be an optional mode, but it should be turned on if the user begins to navigate with the keyboard.
If a user action causes a modal dialog to appear on screen, make sure the focus is moved to that dialog or area. When the dialog is dismissed, re-focus back to the original control or to some other logical place in the document.
UnderstandableView Understandable on W3C site 
Users must be able to comprehend content and how to operate an interface.

Create text content that is machine- and human-readable

Specify the language of the content in a machine-readable way. Generally, this means using <html lang="en-us"> or the equivalent for another language. This will help with translation software and ensures that screen readers will use the correct pronunciation.
If part of a document is in a different language from the overall language of the document, specify this with something like <span lang="fr">.
Where possible, provide a way for users to find definitions of unusual words and phrases, especially jargon.
Make the meaning of abbreviations and acronyms available, either directly in the text, such as “Consumer Financial Protection Bureau (CFPB)”, or in a machine-readable way, like <abbr title="Consumer Financial Protection Bureau">CFPB</abbr>).
Write text to an eighth-grade comprehension level, excluding proper names and titles, where possible. If that is not an option, provide a simplified version of the text nearby.
For hard-to-pronounce words, consider including the pronunciation.
Develop sites that behave in a predictable way

Related webpages should have a consistent navigation structure and layout.
Components that perform the same action should be labelled the same way.
Maintain context
Avoid changing a user’s context without an explicit request from the user, like clicking or otherwise activating a link or button.

If an automatic context change is necessary, warn the user in advance and give them an opportunity to stop the change.

A few examples of context changes:

* Submitting a form
* Moving focus to a different element
* Popping open a help dialog box
* Launching a new window
* Following a link
* Reloading most of the content on a page

#### Robust (View Robust on W3C site)

Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies. A robust site will be broadly compatible with past, current, and future web browsers and devices.

##### Follow standard web best practices

This means using standard HTML markup. If complex widgets are required, use WAI-ARIA to make the use, states, and properties clear to browsers and assistive technologies.

##### Make sure your HTML validates.

* Use unique IDs on individual pages.
* Avoid deprecated or proprietary markup.
  Make sure states and properties of elements are machine readable.
  Note that this is specific to HTML and does not include CSS.

### Form best practices

* [Choosing a form structure](#choosing-a-form-structure)
* [Helping users](#helping-users)
* [Communicating errors](#communicating-errors)
* [Saving progress](#saving-progress)
* [Setting expectations](#setting-expectations)
* [Keeping it simple](#keeping-it-simple)

Web forms provide an incredible advantage over paper forms in their potential for accessibility, usability, and operational efficiency, but when designed without users in mind they can lose many of these benefits. In this guide, we've outlined several ways to ensure the best possible user experience.

_This guide is adapted from [Designing transactions](https://www.gov.uk/service-manual/user-centred-design/designing-transactions.html) in the [GOV.UK Government Service Design Manual](https://www.gov.uk/service-manual). [More info.](#attribution)_

## Choosing a form structure

The structure of your form should fit with the ways in which your users will want to use it.

Ask yourself:

* Will your users want to move through the form in a fixed order, or one of their choosing?
* Will they be able to complete the form in a single go?
* Will their answers affect other parts of the form?
* Will they want to go back and review or change answers to previous questions?
* Will they need to add or remove items from a list, or change the order of things?
* How many parties are involved in the form?
* Do any parts of the form take place offline?
* At what point is the form regarded as complete?

How you answer these questions will help you decide how to structure the form. It can help to think in terms of levels: sections, subsections, groups, etc. Try not to worry about how those levels should be represented in the interface until you have a broader understanding of the overall structure.

For example, on a website, you might choose to have one section per page, or multiple sections per page. It depends on what's going to work best for your users.

## Example structures

### Option 1: Single page

All sections are positioned on a single page.

![Diagram showing all sections on a page](https://cfpb.github.io/design-manual/static/img/effective-forms/EffectiveForms1@2x.png)

#### The good

* There's only one submit button to press
* A single URL gives access to all form fields
* It doesn't force a fixed order of completion
* You benefit from context of neighboring sections
* Progress is self-evident

#### The bad

* Long forms can be overwhelming and off-putting
* It's less well suited to branching or non-linear flow
* How do you save partial progress?
* Can be harder to track analytics like drop-off rates

- - -

### Option 2: Wizard

Each section goes on its own page.

![Diagram showing each section on its own page](https://cfpb.github.io/design-manual/static/img/effective-forms/EffectiveForms2@2x.png)

#### The good

* It's easier to handle branching and dependencies between sections
* It's easier to let the user save progress
* A long form can feel more manageable
* Easier to guide a user through an unfamiliar process
* Easier to capture analytics like drop-off rates for each section

#### The bad

* Can be harder for users to see where they are within the form
* It can slow users down as they have to click and load each section
* You lose the contextual information from neighboring sections
* Harder for users to review and edit previous sections
* There's no single place for users to go back and edit their data
* Not a natural fit for non-linear processes like looping, adding and removing

- - -

### Option 3: Accordion form

All sections on a single page, but each new section only appears once the previous section has been completed. Done well, option 3 is a hybrid of the other two that has benefits of both the other options. Within this hybrid option there are still some important design decisions to make, for example:

* Will future questions be shown in any way or will you only see the questions you've answered?
* What happens if you go back and edit a previous question?
  * Does the current question stay open or closed?
  * How do you get back to the current question once you've edited a previous one?
  * Do you lose all your answers to questions that follow the one you go back to edit?

![Diagram showing an accordion form](https://cfpb.github.io/design-manual/static/img/effective-forms/EffectiveForms3@2x.png)

#### The good

* Can handle branching and dependencies between sections
* Can easily review and edit previous questions
* Can help guide a user through an unfamiliar process
* User still benefits from some surrounding context
* Progress is clear

#### The bad

* Implementation and interface is more complex

- - -

### Option 4: Hybrid

For more complicated forms, some combination of the other options might be your best bet.

Done well, this can give you the benefits of both the single page and wizard approaches. It also allows you to create a sense of rhythm to the overall flow, which can help users understand when they have moved into a different part of the form, and break up the monotony of filling in forms.

As always, these design decisions must have a strong, user-centred rationale behind them.

![Diagram showing a hybrid form](https://cfpb.github.io/design-manual/static/img/effective-forms/EffectiveForms4@2x.png)

## Helping users

You should be aiming for a service that's so intuitive people don't need any help in using it. If you find yourself explaining the interface within the interface it's a sign that something has gone wrong. 

Sometimes though, people are going to need extra help. Many government forms involve concepts and terminology that people will be unfamiliar with. Some of this stuff takes a lot of explaining, so we need a way of providing contextual help of varying degrees of detail throughout a form.

#### Methods for providing extra help:

##### Inline help

Short, snappy text, positioned near the part of the interface it refers to. If it's something that everyone needs to know, make it permanently visible.

##### Progressive disclosure

A fancy phrase for hiding stuff until it's clicked on. Used carefully this is a good way of keeping the interface free from potentially confusing clutter. Only use this for help that's intended for a small subset of your audience (say, less than 10%).

##### Field masking

When a specific data entry format is required, as for phone numbers, dates, and social security numbers, provide an example of the required format (e.g., XXX-XX-XXXX).

##### Rich contextual help

Sometimes you need to give users access to supporting content, in case they're unfamiliar with the terminology or concepts involved in the form. This kind of content should probably exist as a page outside of the form, and then be repurposed in some way within the form.

## Communicating errors

Despite providing the best possible helper text and contextual help, you should still plan for when users make errors when filling out your forms.

#### Tips for communicating errors:

##### Indicate optional and/or required fields

If most of the fields are required, leave them alone and just mark the optional fields as optional. If most of the fields are optional, leave them alone and just mark the required fields as required. If it’s close to a tie, go with whichever choice might be better for your users.

##### Combine field-level error text with a page-level error message

This is particularly important for accessibility. If someone is using a screenreader to navigate the page, a digest of errors at the top of the page will help them understand which fields need fixing. Including anchor links to the invalid fields will allow them to find and fix the error without re-navigating the entire form. 

##### Be descriptive with error text

Tell the user what caused the error and how to correct it.

##### Validate fields before the user submits

Check for errors as the user fills out the form (e.g., using javascript) and provide inline messaging with instructions for how to correct the error.

Also consider including affirmative inline validation (such as green checkmarks) for required text fields, especially those that require specific formats or character counts, such as Zip Codes and passwords.

## Saving progress

If the average time to complete a form is more than you can reasonably expect your users to spend in a single session, then you need to provide a way for them to save their progress.

The same goes if the session is likely to be interrupted for some reason. For example, if the user is suddenly asked for information which they might not have immediately on hand (a way to mitigate this is to warn users if they're going to be asked for that kind of information). Another example is that the user might start a form on their mobile device and want to continue filling it out on their desktop computer.

## Setting expectations

The further in to a form someone gets, the more time they have invested in it and the greater their annoyance if they have to abandon it for some reason.

Be honest about what you're offering users, and what you're not offering them. In particular, people need to know up front about any:

* Costs involved
* Waiting periods or delays
* Uncommon or hard-to-find infomation they'll need to provide
* Constraints on who can complete the form (age, nationality etc)
* Equipment that will be required (e.g., a printer)
* Non-digital parts of the form

Use common sense, though. Don't try to make everyone read a page of terms and conditions before they start (they won't).

The best approach is to meet (or exceed) people's expectations. For example, if your delivery times are typical and you accept all the usual payment methods then you won't need to warn everyone about them up front.

## Keeping it simple

Every request for information from the user:

* Requires additional physical and cognitive effort 
* Creates another opportunity for them to get something 'wrong'
* Increases the time it takes to complete the form
* Increases the perception that the service is invasive
* Increases the risk that users will give up or fail to submit your form

Asking for information because 'it might be useful' or 'it helps with our record keeping' should be considered against all of these factors.

Attribution

This guide on accessible interfaces has been adapted from the Web Content Accessibility Guidelines (WCAG) 2.0. That document’s status is Recommendation. The document is copyright © 2008 W3C® (MIT, ERCIM, Keio), All Rights Reserved. W3C liability, trademark and document use rules apply.
