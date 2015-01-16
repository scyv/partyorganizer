Template.tollesTemplate.helpers({
    irgendwelcheDaten: function() {
        return {
            data1: 'Data11',
            data2: Session.get('data2')
        }
    }
});


Tracker.autorun(function() {
    var data = Session.get('data2');

    console.log('hallali');

})