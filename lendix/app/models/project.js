import DS from 'ember-data';

export default DS.Model.extend({
    _id: DS.attr('string'),
    status: DS.attr('string'),
    name: DS.attr('string'),
    slug:  DS.attr('string'),
    summary: DS.attr(),
    loanDuration: DS.attr('number'),
    amount: DS.attr('number'),
    totalInvested: DS.attr('number'),
    onlineDate: DS.attr('date'),
    expirationDate: DS.attr('date'),
    activity: DS.attr('string'),
    rate: DS.attr('number'),
    grade: DS.attr('string'),
    schedule: DS.attr(),
    type: DS.attr('string'),
    description: DS.attr(),
    illustration: DS.attr(),
    business: DS.attr(),
    signatory: DS.attr()
});
