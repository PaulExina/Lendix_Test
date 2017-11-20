import DS from 'ember-data';

export default DS.RESTSerializer.extend({

    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        //Uses the project.id as a key to store the project
        primaryKey: 'id',
        payload.projects.forEach(function(project){
            //Push each project into the store
            store.pushPayload('project',project);            
           });
        
        return this._super(store, primaryModelClass, payload, id, requestType);
      }

});
