<template>
  <div class="hello">
    <!-- img tag를 이용한 일반적인 Image 생성. -->
    <header>
      <img class="logo" src="../assets/welcome_logo.gif"/>
    </header>
    <hr>
    <!-- img를 v-for로 원하는 개수만큼 불러온 뒤 show() 메서드를 통해 v-viewer에 접근. -->
    <img class="gallary_image" @click="view(idx)" v-for="(image, idx) in images2" :src="image" :key="image" />
    <viewer :images="images" :options="options" @inited="inited">
      <img v-for="image in images" :src="image" :key="image" class="hide" />
    </viewer>
    <br>
    Beautiful Pictures!!!
    <br>
    <!-- Methods -->
    <div class="form-group col-ms-12">
      <button class="btn btn-dark" @click="show()">Show</button>
      <br>
      <button class="btn btn-dark" @click="view(idx)">View</button>
      <input type="text" v-model="idx" @keyup.enter="view(idx)"/>
    </div>

    <footer>
      <pre>
        This is a Footer.
        More information <a href="https://github.com/fengyuanchen/viewerjs">here</a>.
      </pre>
    </footer>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

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
      ],
      images2: [
        'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/93684/pexels-photo-93684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      ],
      idx: 0,
      options: {
        title: [1, (i) => `${i.alt.replace(/.jpeg|.jpg|.png/, '')}`],
        movable: false,
        loop: false,
        initialViewIndex: 2,
        fullscreen: false,
        // backdrop: false
      }
    }
  },
  methods: {
    inited(viewer) {
      this.$viewer = viewer;
    },
    show() {
      this.$viewer.show();
    },
    view(idx) {
      this.$viewer.view(idx);
    }
  }
}
</script>

<style scoped>
.logo {
  width: 100%;
  height: 180px;
  position: absolute;
  top: 0;
  left: 0;
}
.gallary_image {
  width: 180px;
  height: 180px;
  display: inline;
  margin: 2px 2px;
  cursor: pointer;
}
.hide {
  display: none;
}
header {
  height: 120px;
}
footer {
  background:darkgray;
  width: 100%;
  height: 10%;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
