<template>
  <div>
    <MyDiv class="items" style="color: red" />
    <MyDiv class="items" style="color: red"></MyDiv>
    <MyDivFunc class="items" style="color: red" />
    <MyDivFunc class="items" style="color: red"></MyDivFunc>

    <!-- Example component with workaround -->
    <MyUlFuncJS class="items" style="color: blue">
      <li v-for="item in items" :key="item" @click="shuffle">{{ item }}</li>
    </MyUlFuncJS>
    <MyUlFuncSFC class="items" style="color: blue">
      <li v-for="item in items" :key="item" @click="shuffle">{{ item }}</li>
    </MyUlFuncSFC>
  </div>
</template>

<script>
import { shuffle } from 'lodash'
import MyDiv from './MyDiv'
import MyDivFunc from './MyDivFunc'
import MyUlFuncJS from './MyUlFunc.js'
import MyUlFuncSFC from './MyUlFunc.vue'

export default {
  components: {
    MyDiv,
    MyDivFunc,
    MyUlFuncJS,
    MyUlFuncSFC,
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
