import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      tabs: [
        { name: 'Lorem', route: 'index.lorem' },
        { name: 'Veggie', route: 'index.veggie' },
        { name: 'Zombie', route: 'index.zombie' },
      ]
    };
  }
});
