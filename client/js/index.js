Template.manageItems.helpers({
    partyData: function() {
        return {
            partyId: Session.get('partyId')
        }
    },
    items: function() {
        return items.find({}, {sort: {name:1}});
    },
    gravatar: function(email) {
        return Gravatar.imageUrl(email, {
            size: 34,
            default: 'mm'
        });
    }
});

Template.manageItems.events({
    'click .btn-addItem': function(ev) {
        var newItem = $('#addItem').val();
        var partyId = Session.get('partyId');
        console.log(newItem);

        Meteor.call('addItem', partyId, newItem, function(err) {
            if (err) {
                alert(err);
            }
        });
    },
    'click .btn-illbringit': function(ev) {
        var email = prompt("Ihre Email", Session.get('userEmail'));
        Meteor.call('subscribeItem', email, this._id, function(err) {
            if (err) {
                alert(err);
            }
        });
    }
});

