(function (window) {

	'use strict';

	class Loader {

		static style() {
			return 'flat border loader';
		}

		constructor(button) {
			this.button = button;
			this.elements = {};
		}

		getButton() {
			return this.button;
		}
		getSpan() {
			if (this.elements.hasOwnProperty('span')) return this.elements.span;
			this.elements.span = document.createElement('span');
			return this.elements.span;
		}
		removeSpan() {
			window.Button.removeElementDOM(this.getSpan());
			return this;
		}
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
		apply(text) {
			let button = this.getButton(), span = this.getSpan(), loader = this.get(), element = button.out(), css = this.constructor.style();

			button.addStyle(css);
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
		remove() {
			let button = this.getButton(), css = this.constructor.style();

			this.removeSpan();

			button.removeStyle(css);
			button.out().removeAttribute('disabled');

			window.Button.removeElementDOM(this.get());

			return this;
		}
	}

	class Icon {

		constructor(button) {
			this.button = button;
			this.elements = {};
		}

		getButton() {
			return this.button;
		}
		get() {
			if (this.elements.hasOwnProperty('icon')) return this.elements.icon;
			this.elements.icon = document.createElement('i');
			this.elements.icon.className = 'material-icons';
			return this.elements.icon;
		}
		set(material) {
			let icon = this.get();
			icon.innerText = material;
			this.getButton().out().appendChild(icon);
			return this;
		}
		remove() {
			window.Button.removeElementDOM(this.get());
			return this;
		}
	}

	class Button {

		static style() {
			return 'button ellipsis waves-effect';
		}

		constructor() {
			this.elements = {};

			this.options = {};
			this.options.icon = new window.Button.Icon(this);
			this.options.loader = new window.Button.Loader(this);
		}

		getIcon() {
			return this.options.icon;
		}
		getLoader() {
			return this.options.loader;
		}
		getText() {
			if (this.elements.hasOwnProperty('span')) return this.elements.span;
			this.elements.span = document.createElement('span');
			this.elements.span.className = 'default';
			return this.elements.span;
		}
		setText(text) {
			let span = this.getText(), node = document.createTextNode(text);

			span.innerText = ''
			span.appendChild(node);
			this.out().appendChild(span);

			return this;
		}
		addStyle(css) {
			let splitted = css.split(/\s+/), button = this.out();
			for (let item = 0; item < splitted.length; item++) button.classList.add(splitted[item]);
			return this;
		}
		removeStyle(css) {
			let splitted = css.split(/\s+/), button = this.out();
			for (let item = 0; item < splitted.length; item++) button.classList.remove(splitted[item]);
			return this;
		}
		onClick(func) {
			this.out().addEventListener('click', func.bind(this), false);
			return this;
		}
		appendAttributes(object) {
			if (typeof object !== 'object') return this;
			let button = this.out();
			for (let item in object) button.setAttribute(item, object[item]);
			return this;
		}
		out() {
			if (this.elements.hasOwnProperty('button')) return this.elements.button;
			this.elements.button = document.createElement('button');
			this.elements.button.type = 'button';
			this.elements.button.className = this.constructor.style();
			return this.elements.button;
		}
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