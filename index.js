var o = require('jquery');
var object = require('object');
var each = require('each');
var moment = require('moment');
var type = require('type');
var Popover = require('popover');
var Calendar = require('calendar');

/**
 * Expose `ConfirmationPopover`.
 */

module.exports = Datepicker;

/**
 * Initialize a `Datepicker` with the given optional `date`
 * and optional `title`.
 */

function Datepicker(date, title) {
  this.datepicker = o(require('./template'));
  if (type(date) == "string") {
    title = date;
    date = new Date();
  }
  date = date || new Date();
  this.cal = new Calendar(date);
  this.datepicker.find('.datepicker-calendar').append(this.cal.el);
  Popover.call(this, this.datepicker, title);
  var self = this;
  this.classname = 'popover datepicker';
  this.cal.on('change', function(date){
    self.dateChanged(date);
  });
  this.datepicker.blur(function() {
    self.hide();
  })
  o(document).mouseup(function (e) {
    if (self.datepicker.has(e.target).length === 0)
    {
        self.hide();
    }
  });
}

/**
 * Inherits from `Popover.prototype`.
 */

Datepicker.prototype.__proto__ = Popover.prototype;


Datepicker.prototype.date = function() {
  return this.date;
}

Datepicker.prototype.attach = function(el) {
  this.attachTo = el;
  return this;
}

Datepicker.prototype.select = function(date) {
  date = date || new Date();
  if (type(date) == 'date') {
    this.date = date;
    this.cal.select(date);
  }
}

Datepicker.prototype.dateChanged = function(date) {
  this.date = date;
  this.updateFields();
  this.hide();
  this.emit('change', date);  
}

Datepicker.prototype.inputFieldChanged = function() {
  var self = this;
  var fullFormat = '';
  var fullVal = '';
  each(self.inputFields, function(selector, format) {
    if (fullFormat) fullFormat += '-';
    fullFormat += format;
    if (fullVal) fullVal += '-';
    fullVal += o(selector).val();
  });
  if (fullVal && fullFormat) {
    var parsedMoment = moment(fullVal, fullFormat);
    self.select(parsedMoment.toDate());
  }
}

Datepicker.prototype.inputFields = function(inputFields) {
  var self = this;
  self.inputFields = inputFields;
  each(self.inputFields, function(selector, format) {
    o(selector).change(function() {
      self.inputFieldChanged();
    });
  });

  return self;
}

Datepicker.prototype.click = function(selector) {
  var self = this;


  o(selector).click(function() {
    self.show(self.attachTo || selector);
  })
  return self;
}

Datepicker.prototype.updateFields = function() {

  var self = this;

  each(self.inputFields, function(selector, format) {
    o(selector).val(moment(self.date).format(format));    
  });
}
