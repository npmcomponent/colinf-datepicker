
# datepicker
 a datepicker component

 ![datepicker component](http://colinf.github.com/datepicker/images/example01.png)

##installation
```
$ component install colinf/datecalc
```
You can find out more about using and installing components [here](https://github.com/component/component).

(A Makefile is provided if you want to install the datepicker for dev/test)

##Based on Popover / Tip
Datepicker is based on the Popover and Tip components. It therefore also provides the same features as those components.

## Example

```js
var Datepicker = require('datepicker');

var datepicker = new Datepicker;
datepicker
  .inputFields({
    '#dt-dd': 'DD',
    '#dt-mm': 'MM',
    '#dt-yyyy': 'YYYY'})
  .attach('#dt-dd')
  .trigger('#pickLink1');
```

## API

### new Datepicker()
### new Datepicker(date)
### new Datepicker(date, title)
### new Datepicker(date, title, options)
### new Datepicker(date, options)
### new Datepicker(title)
### new Datepicker(title, options)
### new Datepicker(options)
Creates a new datepicker for the given date and title. All of the arguments are optional.

If used the date argument must be a Javascript Date object. If there is no date argument, the datepicker defaults to today’s date.

If used the title should be a string. If there is a title argument, then the datepicker is displayed with a title (see Popover for further details).

The options argument is optional. When passed it must be an object and can contains the following keys:

* displayInitial: boolean indicating whether the input fields should be populated with the initial date value.

### Datepicker#attach(el)
Chainable. Defines the element to which the datepicker should be attached i.e. the Tip arrow will originate from this element.

If you do not specifically define an element using attach, then the datepicker will attach to the element defined in trigger(). So if the el in attach(el) and trigger(el) are the same it's easiest to just use trigger().

### Datepicker#select(date)
Selects the given date.

### Datepicker#inputFields(fields)
Chainable. The fields argument defines the input field or fields used for entering/displaying the date. Fields should be an object with each key being the element which identifies an input field and the value being the date format for that field or part field.

So to define a single input field:
```js
datepicker.inputFields({
	'#the-date': 'DD/MM/YYYY'
});
```

Or if you want to break the date entry into separate fields:
```js
datepicker.inputFields({
   '#dt-dd': 'DD',
   '#dt-mm': 'MM',
   '#dt-yyyy': 'YYYY'
});
```
The date formats supported are defined [at this link](http://momentjs.com/docs/#/parsing/string-format/).

### Datepicker#trigger(el)
Chainable. Defines an element which when clicked will cause the datepicker to show.

Also see the API documentation for [component/popover](https://github.com/component/popover) and [component/tip](https://github.com/component/tip).
