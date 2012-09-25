
# datepicker

  a datepicker component

## API

### new Datepicker()

### Datepicker#dateFields(fields)


### Datepicker#date()
Get the current selected date. Returns a DateDisplay object.

### Datepicker#date(date)
Set the value of the datepicker to date. The date argument should be a Javascript date object or a DateDisplay object.

## DateDisplay Object
This is a standard Javascript Date object with the following additional methods:

### DateDisplay#dd()
Returns 2 digit day of month as a string.

### DateDisplay#mm()
Returns 1-based 2 digit month as a string. So January is “01”.





