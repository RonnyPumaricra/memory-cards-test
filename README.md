# Components

## ScreenSlider

Creates a slider for several screens.

- The index of the active screen is passed as a prop
- Can only contain BasicScreen as children

Should emit `@finish` if necessary.

## Basic Screen

If a screen is turned into its own component, it should emit a `@finish` event, so the parent element controls its logic.

## Memory Game

The memory game is a screen, consists of:

- Cards Slider. Each screen with a set of cards.
- Game controls. To interact with the slider.

Has `key` as a prop, so it can be re-rendered without modifying its initial data.

### Rerolling

This component is rendered with a `key`, in order to be explicity updated by changing this. When it gets re-rendered, it suffles the card data again, so it's not necessary to update them.

## Memory card

Each memory card has two states: face-down and face-up.

If the answer is an image, it should be `type: "img"` and `answer: /* url here */`, if not, `type: "txt"` and the text in `answer`.

It is possible to use images instead of just text.

# Discarded

GameScreen.vue
ScreenSlider being able to control its own index. (Its parent controls it)

# Notes

When taking new images, make sure:

- It's a Word document
- The text has 18 font size, bold style.
- Zoom = 170%
