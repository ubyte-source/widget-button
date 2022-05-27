# Documentation widget-button

Widget Javascript Button is a library used to create a button with various personalizations.

## Structure

library:
- [window.Button](https://github.com/energia-source/widget-button/tree/main/lib#class-windowbutton-usable-methods)
- [window.Button.Icon](https://github.com/energia-source/widget-button/tree/main/lib#class-windowbuttonicon-usable-methods)
- [window.Button.Loader](https://github.com/energia-source/widget-button/tree/main/lib#class-windowbuttonloader-usable-methods)

<br>

#### ***Class window.Button usable methods***

##### `static style()`

It returns a string of CSS classes to be applied to the button.

 * **Returns:** The return value is a string.

##### `constructor()`

The constructor function creates an object that contains the elements and options for the button

##### `getIcon()`

Get the icon for the current node

 * **Returns:** The icon that was specified in the options.

##### `getLoader()`

Get the loader from the options object

 * **Returns:** The loader that was passed in the options object.

##### `getText()`

Create a span element if it doesn't already exist, and return it

 * **Returns:** The text of the span.

##### `setText(text)`

* Set the text of the span element

 * **Parameters:** `text` — The text to be displayed.
 * **Returns:** Nothing 

##### `addStyle(css)`

Adds a class to the button

 * **Parameters:** `css` — The CSS class to add to the button.
 * **Returns:** The button object.

##### `removeStyle(css)`

Remove a CSS class from the button

 * **Parameters:** `css` — The CSS class to remove.
 * **Returns:** The button object.

##### `onClick(func)`

It attaches a function to the click event of the element.

 * **Parameters:** `func` — The function to be called when the button is clicked.
 * **Returns:** The current object.

##### `appendAttributes(object)`

Append attributes to the current element

 * **Parameters:** `object` — The object to be added to the attributes of the current element.
 * **Returns:** Nothing 

##### `out()`

Create a button element if it doesn't already exist

 * **Returns:** The button element.

##### `static closestAttribute(target, attribute, html)`

Find the closest attribute to the target element

 * **Parameters:**
   * `target` — The element to search for the attribute.
   * `attribute` — The attribute to search for.
   * `html` — If true, the result will be the HTML of the closest attribute.
 * **Returns:** The closest attribute.

##### `static removeElementDOM(element)`

Remove the element from the DOM

 * **Parameters:** `element` — The element to remove from the DOM.
 * **Returns:** The return value is a boolean value.

<br>

#### ***Class window.Button.Icon usable methods***

##### `constructor(button)`

Create a new JavaScript object that will be used to store the elements of the button

 * **Parameters:** `button` — The button that will be used to trigger the dialog.

##### `getButton()`

Get the button element from the page

 * **Returns:** The button object.

##### `get()`

Create an icon element if it doesn't exist, and return it

 * **Returns:** The icon element.

##### `set(material)`

Set the icon of the button to the given material icon

 * **Parameters:** `material` — The material to display in the icon.
 * **Returns:** Nothing 

##### `remove()`

Remove the button from the DOM

 * **Returns:** Nothing 

<br>

#### ***Class window.Button.Loader usable methods***

##### `static style()`

*This function returns a string that represents the CSS style of the loader.*

 * **Returns:** The return value is a string.

##### `constructor(button)`

The constructor function creates an object that contains a reference to the button that was clicked.

The object also contains a reference to the elements that were created by the JavaScript code

 * **Parameters:** `button` — The button that will be used to trigger the dialog.

##### `getButton()`

Get the button element from the page

 * **Returns:** The button object.

##### `removeSpan()`

Remove the span element from the DOM

 * **Returns:** The button object.

##### `get()`

Create a div element with the class name "loader" and append three div elements with the class names "bounce-0", "bounce-1", and "bounce-2"

 * **Returns:** The loader element.

##### `apply(text)`

* Create a span element and append it to the button element. * Create a text node and append it to the span element. * Append the loader element to the button element. * Set the button element's disabled attribute to true

 * **Parameters:** `text` — The text to display on the button.
 * **Returns:** The object itself.

##### `remove()`

Remove the button from the DOM and remove the button from the button array

 * **Returns:** The object itself.

## Built With

* [Javascript](https://www.javascript.com/) - Javascript
