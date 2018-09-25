<template>
  <div class="hello">
    <!-- img tag를 이용한 일반적인 Image 생성. -->
    <header class="logo">
      <img src="../assets/welcome_logo.gif"/>
    </header>
    <hr>
    <!-- v-viewer를 이용한 Image 생성. -->
    <viewer :images="this.images">
      <img class="gallary_image" v-for="image in this.images" :src="image" :key="image" />
    </viewer>
    <footer>
      This is a Footer.
    </footer>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'HelloViewer',
  data () {
    return {
      images: [
        'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/93684/pexels-photo-93684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/1073567/pexels-photo-1073567.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/35884/amazing-beautiful-beauty-blue.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      ]
    }
  }
}
</script>

<style scoped>
.logo {
  height: 120px;
}
.gallary_image {
  width: 180px;
  height: 180px;
  display: inline;
  margin: 2px 2px;
  cursor: pointer;
}
footer {
  background:darkgray;
  width: 100%;
  height: 10%;
  position: absolute;
  bottom: 0;
}
</style>
