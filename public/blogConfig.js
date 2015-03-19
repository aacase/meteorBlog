Blog.config({ //enables admin only posting in the blog
    adminRole: 'blogAdmin',
  });


if (Meteor.users.findOne({username:'aacase'})) //adds me as the blog admin when my username is created
      Roles.addUsersToRoles(Meteor.users.findOne({username:'aacase'}), ['admin', 'blogAdmin']);