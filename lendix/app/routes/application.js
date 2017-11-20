import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        //Look for all projects in the store goes to the API if didn't find any
        return this.store.findAll('project');
    }
});
