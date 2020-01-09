---
---

# Showbie colours

> In visual perception a color is almost never seen as it really is — 
> as it physically is. This fact makes color the most relative medium 
> in art. \
> — *Josef Albers*

Here’s an overview of the full Showbie colour palette. View the
individual swatches for details and usage notes.

<ColorScale hue="grey" />

<ColorScale hue="slate" />

<ColorScale hue="blue" />

<ColorScale hue="green" />

<ColorScale hue="yellow" />

<ColorScale hue="red" />

## Grey

### Grey 50

<ColorSwatch hue="grey" scale="50" />

Use case one: hover state for a white-background element

- hover state background for help menu buttons (sbe-help)
- hover state background for file attachment buttons (sbe-actions-menu)
- hover background for x-list items, a new component that hasn't been deployed yet so I didn't check it out
- hover state for post list files
- hover background for voice note bubble

Use case two: background colour for light grey elements, like master panel and detail panel headers

- background colour for announcements-only banner
- background colour for master panel
- border colour for main tab-bar badges (to match master panel bg)
- in-popover heading for a list (e.g. list of parents in student info popover) (`form-group__heading`)
- background for `portfolio__header`

And this??

- border colour for `sbe-attach__options` where it seems to have no effect, probably deprecated

#### Notes

When it's used as a hover state, it has the same appearance as `rgba(0,0,0,0.3)`
over a white background. This transparent version is used in some other
places like the wrench menu items. Might consider standardizing on one of the
two approaches.

### Grey 200

<ColorSwatch hue="grey" scale="200" />

### Grey 500

<ColorSwatch hue="grey" scale="500" />

The standard opaque colour for grey secondary text labels.

Used exclusively for text colours, no fills. The current
definition works best over white or almost-white backgrounds.

::: tip Todo
We might consider replacing this with a dark-and-
transparent rgba colour for more consistent contrast on
varying background colours.
:::

## Slate

### Slate 600

<ColorSwatch hue="slate" scale="600" />

## Blue

### Blue 50

<ColorSwatch hue="blue" scale="50" />

A super-super-light blue used in:

- panel background for pending group invites
- header background for post list headers (e.g. announcements-only, 
  new live-update posts)
- hover, active, and focused state of text box `.handle`, in
  slightly transparentized form.

#### Notes:

Hover variant was decided during dev (not spec'd via PSD) so it could
be easily expressed as SCSS function relative to main definition.

Use in `.handle` states was decided during dev. Use here is not 
closely coupled with the other two contexts. Debatable whether the 
addition of transparency makes sense (default state of handles is 
opaque), and whether hover state is needed, given that the cursor also
changes on hover.

### Blue 100

<ColorSwatch hue="blue" scale="100" />

Used for background-color of select boxes. Also used in AudioNote
component controls.

### Blue 200

<ColorSwatch hue="blue" scale="200" />

Used as a background-color.

### Blue 500

<ColorSwatch hue="blue" scale="500" />

### Blue 600

<ColorSwatch hue="blue" scale="600" />

Used for fine lines and small objects in our primary blue (text, 
stroke, icons). Also used in AudioNote component controls.

### Blue 700

<ColorSwatch hue="blue" scale="700" />

## Green

### Green 100

<ColorSwatch hue="green" scale="100" />

Background colour for positive notification messages.

### Green 500

<ColorSwatch hue="green" scale="500" />

### Green 600

<ColorSwatch hue="green" scale="600" />

Used for text or icons against a background colour of `green-100`. Added
for async notifications.

## Red

### Red 100

<ColorSwatch hue="red" scale="100" />

Used in AudioNote component during recording.

### Red 500

<ColorSwatch hue="red" scale="500" />

Used for indicating destructive action, also in AudioNote component 
during recording.

### Red 600

<ColorSwatch hue="red" scale="600" />

Used for text or icons against a background colour of `red-100`. Added
for async notifications.

### Red 800

<ColorSwatch hue="red" scale="800" />
