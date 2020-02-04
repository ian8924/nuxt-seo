const registerModule = function( store , modules){
  for(let namespace in modules){
      const isRegistered = store._modules.root._children[namespace]!== undefined;
      if(!isRegistered){
          const preserveState = store.state[namespace];
          store.registerModule(namespace, modules[namespace] ,{preserveState});
      }
  }
};
// this.$unregisterModule(store, [namespace])
const unregisterModule = function(store, modules) {
  for (let namespace of modules) {
    const isRegistered = store._modules.root._children[namespace] !== undefined;
    if (isRegistered) {
      store.unregisterModule(namespace);
    }
  }
};
export default (context, inject) => {
    inject("registerModule",registerModule)
    inject("unregisterModule",unregisterModule)
}
