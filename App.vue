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
    <MyUlFuncSFC1 class="items" style="color: blue">
      <li v-for="item in items" :key="item" @click="shuffle">{{ item }}</li>
    </MyUlFuncSFC1>
    <MyUlFuncSFC2 class="items" style="color: blue">
      <li v-for="item in items" :key="item" @click="shuffle">{{ item }}</li>
    </MyUlFuncSFC2>
  </div>
</template>

<script>
import { shuffle } from 'lodash'
import MyDiv from './MyDiv'
import MyDivFunc from './MyDivFunc'
import MyUlFuncJS from './MyUlFunc.js'
import MyUlFuncSFC1 from './MyUlFunc1.vue'
import MyUlFuncSFC2 from './MyUlFunc2.vue'

export default {
  components: {
    MyDiv,
    MyDivFunc,
    MyUlFuncJS,
    MyUlFuncSFC1,
    MyUlFuncSFC2,
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
