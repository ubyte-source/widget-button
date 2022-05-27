# Documentation widget-button

Widget Javascript Button is a library used to create a button with various personalizations.

## Usage

So the basic setup looks something like this:

```

let sync = new Button();

sync.addStyle('flat');
sync.getIcon().set('sync');
sync.setText('Name of buttton');
sync.appendAttributes({
    'data-selected-min': 1
});
sync.onClick(function () {
    widgets.modal.syncronize.show();
});

document.appendChild(sync.out());

```

## Structure

library:
- [window.Button](https://github.com/energia-source/widget-button/tree/main/lib)
- [window.Button.Icon](https://github.com/energia-source/widget-button/tree/main/lib)
- [window.Button.Loader](https://github.com/energia-source/widget-button/tree/main/lib)

<br>

## Contributing

Please read [CONTRIBUTING.md](https://github.com/energia-source/widget-button/blob/main/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting us pull requests.

## Versioning

We use [SemVer](https://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/energia-source/widget-button/tags). 

## Authors

* **Paolo Fabris** - *Initial work* - [energia-europa.com](https://www.energia-europa.com/)
* **Gabriele Luigi Masero** - *Developer* - [energia-europa.com](https://www.energia-europa.com/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
