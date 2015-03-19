if (Meteor.isClient) {
    Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"

  });

    Blog.config({
    	blogIndexTemplate: 'blogStyle',
    comments: {
      disqusShortname: 'myshortname'
    },
    syntaxHighlighting: true,
    pageSize: 20
    


  });
   

}

if (Meteor.isServer) {
  Meteor.startup(function () {

         

     Blog.config({ //enables admin only posting in the blog
    adminRole: 'blogAdmin',

  });

      if (Meteor.users.findOne({username:'aacase'}))
            Roles.addUsersToRoles(Meteor.users.findOne({username:'aacase'}), ['admin', 'blogAdmin']);



  });
}



Router.route('/test');
Router.route('/', function () {
  this.render('home');
   // IRLibLoader.load('/test.js')
});
Router.route('/secretadminlogin');
Router.route('/customBlog');
