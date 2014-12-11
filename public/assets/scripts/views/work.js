window.WorkView = Backbone.View.extend({

  // Our Container Element
  el: $('.main'),

  // Our template ID
  template: '#work',

  // Initialize View
  initialize: function() {

    // Setup our template and start our model
    this.template = Handlebars.compile($(this.template).html());
    this.model = new Backbone.Model({});

    // Some page data
    this.model.set({
      content: '<h1>Work</h1>',
      image: 'assets/images/gear.png',
      works: [
          {title: 'Helpr', desc: 'Helpr is an iOS application created for high school students to help stream-line getting their volunteer hours completed. It allows students to accept and complete jobs by retrieving signatures from their employer and then can create a PDF of all their hours to send to themselves or their school.', skills: 'X-Code, Objective C, Photoshop', image:'assets/images/helpr-logo.png', URL:'https://github.com/EmersonGGS/Helpr'},
          {title: 'Block Gun Insanity', desc: 'Block Gun Insanity is a 2D platforming/shooter that I have started making as a little pet project. It is a simple multiplayer shooter using node', skills: 'JavaScript, Canvas, Jade, SASS, Node.js', image:'assets/images/blockGun.png', URL:'https://github.com/EmersonGGS/Blockgun-Insanity'},
          {title: 'Farm Fresh', desc: 'Farm Fresh is a simple app that allows users to connect directly to local growers and farmers to get their produce right where they are created. using geo-location and using a Parse database they can create a shopping list that updates to the closest local farmer.', skills: 'X-Code, Objective C, Geo-location, Photoshop', image:'assets/images/farmFresh.png', URL:'https://github.com/EmersonGGS/Farm-Fresh'},
          {title: '1v1 Me', desc: '1v1 Me is a web application leveraging the Riot Games API to compare two players (summoners), with their ranked stats to see who is better at what role / lane. The user can compare between the three main ranked modes.', skills: 'JavaScript, HTML, CSS, API', image:'assets/images/onevone.png', URL:'http://codepen.io/EmersonGS/pen/xCAiy'},
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