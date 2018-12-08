import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return ['trial 1', 'trial 2', 'trial 3'];
    }
});
