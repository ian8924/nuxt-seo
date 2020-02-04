export const state = () => ({
  firstName: "",
  lastName:""
});
export const getters = {
    fullName(state){
        return state.firstName && state.lastName ? state.firstName + " " + state.lastName : "";
    }
}

export const mutations = {
         SET_FIRST_NAME(state, value) {
           state.firstName = value;
         },
         SET_LAST_NAME(state, value) {
           state.lastName = value;
         }
};
