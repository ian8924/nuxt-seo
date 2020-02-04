export const state =()=>({
    message:"hey,i am state"
})
export const mutations ={
    SET_MESSAGE(state, value){
        state.message = value;
    }
};
export const actions = {
    nuxtServerInit( { commit } , payload){
        commit("user/SET_FIRST_NAME", "liao");
        commit("user/SET_LAST_NAME","ian");
    }
};
