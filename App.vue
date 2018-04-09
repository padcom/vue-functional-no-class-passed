<template>
  <div>
    <MyDiv class="items" style="color: red" />
    <MyDiv class="items" style="color: red"></MyDiv>
    <MyDivFunc class="items" style="color: red" />
    <MyDivFunc class="items" style="color: red"></MyDivFunc>

    <MyUlFunc class="items" style="color: blue">
      <li v-for="item in items" :key="item" @click="shuffle">{{ item }}</li>
    </MyUlFunc>
  </div>
</template>

<script>
import { shuffle } from 'lodash'
import MyDiv from './MyDiv'
import MyDivFunc from './MyDivFunc'
import MyUlFunc from './MyUlFunc'

export default {
  components: {
    MyDiv,
    MyDivFunc,
    MyUlFunc,
  },
  data () {
    return {
      items: [ 1, 2, 3, 4, 5 ]
    }
  },
  methods: {
    shuffle () {
      this.items = shuffle(this.items)
    }
  }
}
</script>

<style>
.items {
  background-color: green;
}
</style>
