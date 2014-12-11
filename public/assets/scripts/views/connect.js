window.ConnectView = Backbone.View.extend({

  // Our Container Element
  el: $('.main'),

  // Our template ID
  template: '#connect',

  // Initialize View
  initialize: function() {

    // Setup our template and start our model
    this.template = Handlebars.compile($(this.template).html());
    this.model = new Backbone.Model({});

    // Some page data
    this.model.set({
      content: '<h1>Connect</h1>',
      image: 'assets/images/connect.png',
      conections: [
          {image: 'URL(assets/images/codepen-hover.png)', link: 'http://codepen.io/EmersonGS/'},
          {image: 'URL(assets/images/github-hover.png)', link: 'https://github.com/EmersonGGS'},
          {image: 'URL(assets/images/blogger-hover.png)', link: 'http://mybitcoinminingexperience.blogspot.ca/'},
          {image: 'URL(assets/images/googleplus-hover.png)', link: 'http://codepen.io/EmersonGS/'},
          {image: 'URL(assets/images/linkedIn-hover.png)', link: 'http://codepen.io/EmersonGS/'},
          {image: 'URL(assets/images/facebook-hover.png)', link: 'http://codepen.io/EmersonGS/'},
          {image: 'URL(assets/images/twitter-hover.png)', link: 'http://codepen.io/EmersonGS/'},
        ]
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