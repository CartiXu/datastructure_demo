<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <el-container>
      <el-header>
        <Header class="header "/>
      </el-header>
      <el-main>
        <Main class="main"/>
      </el-main>
      <el-footer>
        <div class="footer">
          <h3>关于</h3>
        </div>
      </el-footer>
    </el-container>
    <!-- <Header class="header "/>
    <Main class="main"/> -->
  </div>
</template>

<script>
  // @ is an alias to /src
  import Header from '@/components/homepage/Header.vue'
  import Main from '@/components/homepage/Main.vue'
  import Cube from '../components/resource/Cube'
  export default {
    name: 'Home',
    components: {
      Header,
      Main,
      Cube
    }
  }
</script>

<style scoped>
 .el-header, .el-footer {
    background-color: #F2F2F2;
    color: #737373;
    text-align: center;
    line-height: 60px;
    height: 200px!important;
  }
    .el-main {
    background-color: #F2F2F2;

    color: #737373;
    text-align: center;
    height: 1000px;;
  }
  .main{
    margin: 0 auto;
    width: 1000px;
    height: 100%;
  }
  .home{
    width: 100%;
    height: 100%;
  }
  .footer{
    float: right;
    margin-right: 80px;
  }
  
</style>