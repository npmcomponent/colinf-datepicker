var o = require('jquery');
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
  this.triggers = [];
  this.cal = new Calendar(date);
  this.datepicker.find('.datepicker-calendar').append(this.cal.el);
  Popover.call(this, this.datepicker, title);
  var self = this;
  // Add close button
  o('<div class="datepicker-close"><a href="#">&#10006;</a></div>')
    .prependTo(this.el.find('.tip-inner'))
    .click(function() {
      self.hideAndUnbind();
    });
  this.classname = 'popover datepicker';
  this.cal.on('change', function(date){
    if (self.originalFocus) {
      o(self.originalFocus).focus();
    }
    self.dateChanged(date);
  });
  this.on('show', function() {
    o(document).mousedown(self.mousedownHandler = function(e) {
      if (self.el.has(e.target).length === 0) {
        self.hideAndUnbind();
      } else {
        self.inDatepicker = true;
      }
    });
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
  this.hideAndUnbind();
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

Datepicker.prototype.trigger = function(selector) {
  var self = this;
  this.triggers.push(selector);

  if (acceptsFocus(selector)) {
    o(selector).focus(function() {
      if (selector != self.originalFocus) {
        self.originalFocus = selector;
        self.show(self.attachTo || selector);
      } else {
        self.originalFocus = null;
      }
    });
    o(selector).blur(function() {
      if (self.inDatepicker) {
        self.inDatepicker = false;
      } else {
        self.hideAndUnbind();        
      }
    });
  } else {
    o(selector).click(function() {
      self.originalFocus = null;
      self.show(self.attachTo || selector);
    })
  }
  return self;
}

Datepicker.prototype.updateFields = function() {

  var self = this;

  each(self.inputFields, function(selector, format) {
    o(selector).val(moment(self.date).format(format));    
  });
}

Datepicker.prototype.hideAndUnbind = function() {
  this.hide();
  var self = this;
  if (this.mousedownHandler) {
    o(document).unbind('mousedown', self.mousedownHandler);
    self.mousedownHandler = null;
  }
  self.inDatepicker = false;
  self.originalFocus = null;
}

var acceptsFocus = function(selector) {
  var el = o(selector);
  if (el.is('input:text') ||
      el.is('input:password') ||
      el.is('select') ||
      el.is('textarea')) {
    return true;
  }
  return false;
}

