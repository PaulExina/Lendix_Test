import DS from 'ember-data';

export default DS.RESTSerializer.extend({

    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        primaryKey: 'id',
        payload.projects.forEach(function(project){
            store.pushPayload('project',project);            
           });
        
        return this._super(store, primaryModelClass, payload, id, requestType);
      }

});
