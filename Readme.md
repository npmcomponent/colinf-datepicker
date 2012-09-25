
# datepicker
 a datepicker component

##installation
```
$ component install colinf/datecalc
```
You can find out more about using and installing components [here](https://github.com/component/component).

(A Makefile is also provided if you want to install the datepicker for dev/test)

##Based on Popover / Tip
Datepicker is based on the Popover and Tip component. It therefore also provides the same features as those components.

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
  .click('#pickLink1');
```    

## API

### new Datepicker()
### new Datepicker(date)
### new Datepicker(title)
### new Datepicker(date, title)
Creates a new datepicker for the given date and title. Both the date and title arguments are optional. If their is no date argument, the datepicker defaults to today’s date. If there is a title argument, then the datepicker is displayed with a title (see Popover for further details).

### Datepicker#attach(el)
Chainable. Defines the element to which the datepicker should be attached. If not defined, the datepicker will attach to the element defined in click().

### Datepicker#select(date)
Selects the given date.

### Datepicker#inputFields(fields)
Chainable. The fields argument defines the input field or fields used for entering/displaying the date. Fields should be an object with each key being the element which identifies an input field and the value being the date format for that field or part field.

So to define a single input field:
```js
datepicker.inputFields({
	‘#the-date’: ‘DD/MM/YYYY’
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

### Datepicker#click(el)
Chainable. Defines an element which when clicked will cause the datepicker to show.
