import DS from 'ember-data';
//The store is going to look for the data is the Lendix api if not already in the store
export default DS.RESTAdapter.extend({
    host: 'https://api.lendix.com'
});
