window.ContactView = Backbone.View.extend({

  // Our Container Element
  el: $('.main'),

  // Our template ID
  template: '#contact',

  // Initialize View
  initialize: function() {

    // Setup our template and start our model
    this.template = Handlebars.compile($(this.template).html());
    this.model = new Backbone.Model({});

    // Some page data
    this.model.set({
      content: '<h1>Contact</h1>'
    });

  },

  // Our Render Function
  render: function() {

    // Get data and render our template
    var data = this.model.toJSON();
    var html = this.template(data);

    // Set update the containers HTML
    $(this.el).html(html);
  }

});