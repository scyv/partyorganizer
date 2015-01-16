items = new Meteor.Collection("items");
Meteor.publish("items", function(partyId) {
    if (!partyId) {
        return [];
    }
    return items.find({partyId: partyId});
});

Meteor.methods({
    'addItem': function(partyId, itemName) {
        check(partyId, String);
        check(itemName, String);

        var item = {
            name: itemName,
            partyId: partyId,
            responsible: undefined
        };
        items.insert(item);
    },
    'subscribeItem': function(email, itemId) {
        check(email, String);
        check(itemId, String);

        var responsible = {
            email: email
        };

        items.update(itemId, {$set:{responsible:responsible}});

    }
})