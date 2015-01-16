Session.setDefault('partyId', undefined);
Session.setDefault('userEmail', undefined);

items = new Meteor.Collection("items");

Tracker.autorun(function() {
    Meteor.subscribe('items', Session.get('partyId'));
});


Router.route('/', function() {
    console.log('a');
    Session.set('partyId', Random.id(5));
    this.render('manageItems');
},{
    waitOn: function() {
        return Meteor.subscribe('items');
    }
});

Router.route('/:partyId', function() {
        console.log('b');
    Session.set('partyId', this.params.partyId);
    this.render('manageItems');
},
{
    name: "partyLink",
    waitOn: function() {
        return Meteor.subscribe('items');
    }
});

