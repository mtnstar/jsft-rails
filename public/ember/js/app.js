App = Ember.Application.create();

App.Router.map(function() {
  this.resource('about');
  this.resource('buddies', function() {
    this.resource('buddy', {
      path: ':buddy_id'
    });
  });
});

App.IndexRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('buddies');
  }
});

var attr = DS.attr;

App.Buddy = DS.Model.extend({
  nick: attr('string'),
  birthdate: attr('date'),
  bodysize: attr(),
  strong: attr('boolean')
});

App.BuddiesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('buddy');
  }
});

App.BuddyRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('buddy', params.buddy_id);
  }
});

Ember.Handlebars.helper('format-date', function(date) {
  var _date = moment(date);
  if (_date == null || _date == '') {
    return null;
  } else {
    return _date.format("DD.MM.YYYY");
  }
});

App.ApplicationAdapter = DS.RESTAdapter.extend({
  bulkCommit: false,
  corsWithCredentials: false,
  buildURL: function(record, suffix) {
    var s = this._super(record, suffix);
    return s + ".json";
  }
});

App.BuddiesController = Ember.ArrayController.extend({
  needs: 'buddy',
  actions: {
    createBuddy: function() {
      var nick = this.get('newNick');
      var birthdate = this.get('newBirthdate');
      var strong = this.get('newStrong');
      var bodysize = this.get('newBodysize');

      var buddy = this.store.createRecord('buddy', {
        nick: nick,
        birthdate: birthdate,
        bodysize: bodysize,
        strong: strong
      });

      this.set('newNick', '');
      this.set('newBirthdate', '');
      this.set('newStrong', false);
      this.set('newBodysize', '');

      buddy.save();
    }
  }
});

App.BuddyController = Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.get('model').save();
      this.set('isEditing', false);
    },
    delete: function() {
      var buddy = this.get('model');
      buddy.deleteRecord();
      buddy.save();
    }
  }
});
