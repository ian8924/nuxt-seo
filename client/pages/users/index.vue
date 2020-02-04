<template>
  <div>
]      <h1>
          user list
      </h1>
      <nuxt-link v-for="num in 10" :key="num" :to='`/users/${num}`'>
        users {{ num }}|
      </nuxt-link>|
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
