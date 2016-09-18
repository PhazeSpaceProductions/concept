# Vertical spacing and Positioning

It can be counter-intuitive to get vertical spacing working correctly.

Often the `height` attribute appears to get ignored.

It turns out that the `position` attribute, when not the default `static`, means
that all elements are still laid out in a flow, excepting those with position
attributes such as `relative` and `absolute`, which are then laid out after.

In the end, for a mobile system with fixed screen sizes, the best approach
is to use `position:absolute` and then specify relative to the outside edges.

## MDN references

* [Positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
* [Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
