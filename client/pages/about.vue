<template>
  <div>
      <h1>about -- {{ $store.getters["user/fullName"] }}</h1>
      <h1>about -- {{ user }}</h1>
      <input type="text" v-model="message" />
       count==== {{ count }}
       <button @click="refetch">refetch</button>
  </div>
</template>

<script>
import { mapState , mapMutations , mapGetters , mapActions } from "vuex";
import Counter from '../storeModule/Counter'
export default {
  name:'about',
  layout:'layout2',
  head(){
    return {
      title:"about"
    }
  },
  async fetch({ app,store }) {
      console.log("fetch")
      app.$registerModule(store, { Counter })
      await store.dispatch("Counter/GET_COUNT")
  },
  beforeCreate(){
      console.log("beforeCreate")
      this.$registerModule(this.$store,{ Counter })
  },
  beforeDestroy(){
      this.$unregisterModule(this.$store,['Counter'])
  },
  created(){
      console.log("created")
  },
  computed:{
    ...mapGetters("user",{ user : "fullName" }),
    message:{
      ...mapState({ get:"message"}),
      ...mapMutations({ set: "SET_MESSAGE"})
    },
    count:{
      ...mapState("Counter",{ get: "count" }),
      ...mapMutations("Counter",{ set: "SET_COUNT"})
    }
  },
  methods:{
      ...mapActions("Counter" ,{ getCount: "GET_COUNT" }),
      refetch(){
        this.$store.dispatch("Counter/GET_COUNT")
      }
  }
}
</script>

<style>

</style>
