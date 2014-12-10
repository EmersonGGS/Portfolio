window.AboutView = Backbone.View.extend({

  // Our Container Element
  el: $('.main'),

  // Our template ID
  template: '#about',

  // Initialize View
  initialize: function() {

    // Setup our template and start our model
    this.template = Handlebars.compile($(this.template).html());
    this.model = new Backbone.Model({});

    // Some page data
    this.model.set({
      content: "<h1>About</h1> <p>I'm a mobile application developer from Toronto. I studied at Humber College in the Web Design & Interactive Media program in the 3 year advanced diploma course. I was brought up on a farm in mid-western Ontario, but when I wasn't doing farm things, I developed a huge passion for programming and technology in general. In my free time I game, mountain bike, listen to music, or learn a little more about the ever-changing bitcoin. I love building awesome stuff, so let's build something together!</p>",
      image: "assets/images/aboutIcon.png"
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