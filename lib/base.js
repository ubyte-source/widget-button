(function (window) {

	'use strict';

	class Loader {

		/**
		 * *This function returns a string that represents the CSS style of the loader.*
		 * @returns The return value is a string.
		 */
		static style() {
			return 'border loader';
		}

		/**
		 * The constructor function creates an object that contains a reference to the button that was
		 * clicked. 
		 * 
		 * The object also contains a reference to the elements that were created by the JavaScript code
		 * @param button - The button that will be used to trigger the dialog.
		 */
		constructor(button) {
			this.button = button;
			this.elements = {};
		}

		/**
		 * Get the button element from the page
		 * @returns The button object.
		 */
		getButton() {
			return this.button;
		}
		getSpan() {
			if (this.elements.hasOwnProperty('span')) return this.elements.span;
			this.elements.span = document.createElement('span');
			return this.elements.span;
		}
		/**
		 * Remove the span element from the DOM
		 * @returns The button object.
		 */
		removeSpan() {
			window.Button.removeElementDOM(this.getSpan());
			return this;
		}
		/**
		 * Create a div element with the class name "loader" and append three div elements with the class
		 * names "bounce-0", "bounce-1", and "bounce-2"
		 * @returns The loader element.
		 */
		get() {
			if (this.elements.hasOwnProperty('loader')) return this.elements.loader;
			this.elements.loader = document.createElement('div');
			this.elements.loader.className = 'loader';
			for (let i = 0; i < 3; i++) {
				let bounce = document.createElement('div');
				bounce.className = 'bounce-' + i;
				this.elements.loader.appendChild(bounce);
			}
			return this.elements.loader;
		}
		/**
		 * * Create a span element and append it to the button element.
		 * * Create a text node and append it to the span element.
		 * * Append the loader element to the button element.
		 * * Set the button element's disabled attribute to true
		 * @param text - The text to display on the button.
		 * @returns The object itself.
		 */
		apply(text) {
			let span = this.getSpan(),
				loader = this.get(),
				element = this.getButton().out();

			this.getButton().addStyle(this.constructor.style());
			span.innerText = '';

			if (typeof text !== 'string' || text.length === 0) {
				this.removeSpan();
			} else {
				let node = document.createTextNode(text);
				element.appendChild(span);
				span.appendChild(node);
			}

			element.appendChild(loader);
			element.setAttribute('disabled', true);

			return this;
		}
		/**
		 * Remove the button from the DOM and remove the button from the button array
		 * @returns The object itself.
		 */
		remove() {
			let button = this.getButton();

			this.removeSpan();

			button.removeStyle(this.constructor.style());
			button.out().removeAttribute('disabled');

			window.Button.removeElementDOM(this.get());

			return this;
		}
	}

	class Icon {

		/**
		 * Create a new JavaScript object that will be used to store the elements of the button
		 * @param button - The button that will be used to trigger the dialog.
		 */
		constructor(button) {
			this.button = button;
			this.elements = {};
		}

		/**
		 * Get the button element from the page
		 * @returns The button object.
		 */
		getButton() {
			return this.button;
		}
		/**
		 * Create an icon element if it doesn't exist, and return it
		 * @returns The icon element.
		 */
		get() {
			if (this.elements.hasOwnProperty('icon')) return this.elements.icon;
			this.elements.icon = document.createElement('i');
			this.elements.icon.className = 'material-icons';
			return this.elements.icon;
		}
		/**
		 * Set the icon of the button to the given material icon
		 * @param material - The material to display in the icon.
		 * @returns The object itself.
		 */
		set(material) {
			let icon = this.get();
			icon.innerText = material;
			this.getButton().out().appendChild(icon);
			return this;
		}
		/**
		 * Remove the button from the DOM
		 * @returns The object itself.
		 */
		remove() {
			window.Button.removeElementDOM(this.get());
			return this;
		}
	}

	class Button {

		/**
		 * It returns a string of CSS classes to be applied to the button.
		 * @returns The return value is a string.
		 */
		static style() {
			return 'button ellipsis waves-effect';
		}

		/**
		 * The constructor function creates an object that contains the elements and options for the button
		 */
		constructor() {
			this.elements = {};

			this.options = {};
			this.options.icon = new window.Button.Icon(this);
			this.options.loader = new window.Button.Loader(this);
		}

		/**
		 * Get the icon for the current node
		 * @returns The icon that was specified in the options.
		 */
		getIcon() {
			return this.options.icon;
		}
		/**
		 * Get the loader from the options object
		 * @returns The loader that was passed in the options object.
		 */
		getLoader() {
			return this.options.loader;
		}
		/**
		 * Create a span element if it doesn't already exist, and return it
		 * @returns The text of the span.
		 */
		getText() {
			if (this.elements.hasOwnProperty('span')) return this.elements.span;
			this.elements.span = document.createElement('span');
			this.elements.span.className = 'default';
			return this.elements.span;
		}
		/**
		 * * Set the text of the span element
		 * @param text - The text to be displayed.
		 * @returns The object itself.
		 */
		setText(text) {
			let span = this.getText(), node = document.createTextNode(text);

			span.innerText = ''
			span.appendChild(node);
			this.out().appendChild(span);

			return this;
		}
		/**
		 * Adds a class to the button
		 * @param css - The CSS class to add to the button.
		 * @returns The button object.
		 */
		addStyle(css) {
			let splitted = css.split(/\s+/), button = this.out();
			for (let item = 0; item < splitted.length; item++) button.classList.add(splitted[item]);
			return this;
		}
		/**
		 * Remove a CSS class from the button
		 * @param css - The CSS class to remove.
		 * @returns The button object.
		 */
		removeStyle(css) {
			let splitted = css.split(/\s+/), button = this.out();
			for (let item = 0; item < splitted.length; item++) button.classList.remove(splitted[item]);
			return this;
		}
		/**
		 * It attaches a function to the click event of the element.
		 * @param func - The function to be called when the button is clicked.
		 * @returns The current object.
		 */
		onClick(func) {
			this.out().addEventListener('click', func.bind(this), false);
			return this;
		}
		/**
		 * Append attributes to the current element
		 * @param object - The object to be added to the attributes of the current element.
		 * @returns The object itself.
		 */
		appendAttributes(object) {
			if (typeof object !== 'object') return this;
			let button = this.out();
			for (let item in object) button.setAttribute(item, object[item]);
			return this;
		}
		/**
		 * Create a button element if it doesn't already exist
		 * @returns The button element.
		 */
		out() {
			if (this.elements.hasOwnProperty('button')) return this.elements.button;
			this.elements.button = document.createElement('button');
			this.elements.button.type = 'button';
			this.elements.button.className = this.constructor.style();
			return this.elements.button;
		}
		/**
		 * Find the closest attribute to the target element
		 * @param target - The element to search for the attribute.
		 * @param attribute - The attribute to search for.
		 * @param html - If true, the result will be the HTML of the closest attribute.
		 * @returns The closest attribute.
		 */
		static closestAttribute(target, attribute, html) {
			if (typeof attribute === 'undefined'
				|| !attribute.length) return null;

			let result = null, element = target;

			do {
				let tagname = element.tagName.toLowerCase();
				if (tagname === 'body') return null;

				result = element.getAttribute(attribute);
				if (result !== null) {
					result = result.toString();
					if (result.length) break;
				}

				element = element.parentNode;
			} while (element !== null
				|| typeof element === 'undefined');

			if (typeof html === 'undefined'
				|| html !== true) return result;

			return element;
		}
		/**
		 * Remove the element from the DOM
		 * @param element - The element to remove from the DOM.
		 * @returns The return value is a boolean value.
		 */
		static removeElementDOM(element) {
			let parent = element === null || typeof element === 'undefined' || typeof element.parentNode === 'undefined' ? null : element.parentNode;
			if (parent === null) return false;
			parent.removeChild(element);
			return true;
		}
	};

	window.Button = Button;
	window.Button.Icon = Icon;
	window.Button.Loader = Loader;

})(window);
