*This repository is a mirror of the [component](http://component.io) module [colinf/datepicker](http://github.com/colinf/datepicker). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/colinf-datepicker`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# datepicker
 a datepicker component

 ![datepicker component](http://f.cl.ly/items/3e340Z1U0W2Y2o2i0R23/Screen%20Shot%202012-10-09%20at%2021.37.53.png)

##installation
```
$ component install colinf/datepicker
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

### new Datepicker([date], [title], [options])
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

### Datepicker#monthMenu()
Chainable. Displays a dropdown menu of months in the header of the datepicker for quick navigation.

### Datepicker#yearMenu([from], [to])
Chainable. Displays a dropdown menu of months in the header of the datepicker for quick navigation.

`From` specifies the first year shown in the dropdown and `to` the last year. This means that if `to` is less than `from`, the years will be listed in descending order.

If `from`/`to` are both not specified the dropdown defaults to -/+ 10 years from the calendar's date.

If only `from` specified it defaults `to` +20 years from that year.

### Datepicker#date()
Returns the current date selected in the datepicker as a Javascript Date object.

### Datepicker#inputValid()
Returns a boolean indicating whether the date which has been entered is a valid date.

The Datepicker#date() method is very flexible and will return a date by overflowing when possible. So an invalid entry such as 33/10/2012 (dd/mm/yyyy format) overflows and returns 02/11/2012. However the inputValid() method will return false to allow validation if desired.

Also see the API documentation for [component/popover](https://github.com/component/popover) and [component/tip](https://github.com/component/tip).
