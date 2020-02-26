<template>
  <div class="home">
    <header class="showCase">
      <div class="content">
        <h1 class="title">欢迎来到 数据结构演示</h1>
        <p
          class="text"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, enim. Dicta quaerat voluptatum officiis, aliquam pariatur totam officia hic quas facere necessitatibus repellat. Earum ducimus doloremque officia enim autem nesciunt?</p>
      </div>
    </header>

    <!-- services -->
    <section class="services">
      <div class="container grid-3 center">
        <div>
          <router-link :to="{name:'demo'}">
            <img width="100px" height="100px" src="../assets/linked.png" alt />
            <h3>单链表</h3>
          </router-link>
        </div>

        <div>
          <img width="100px" height="100px" src="../assets/dlink.png" alt />
          <h3>双链表</h3>
        </div>

        <div>
          <img width="100px" height="100px" src="../assets/cycle1.png" alt />
          <h3>循环链表</h3>
        </div>
      </div>
    </section>

    <!-- about us -->
    <section class="about bg-light">
      <div class="container">
        <div class="grid-2">
          <div class="center">
            <img src="../assets/about_us.png" alt />
          </div>
          <div>
            <h3>关于我们</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut error tempora iusto est a cumque esse deleniti officia odit ullam? Facilis fuga iste at voluptatum id, dicta corrupti numquam veritatis expedita laboriosam quae quis atque illum eum voluptates quidem possimus.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- footer -->
    <footer class="bg-dark">
      <p>演示系统 &copy; 2020</p>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>

<style scoped>
.home {
  background: rgba(0, 0, 0, 0.9) !important;
  margin: -8px !important;
  color: #fff !important;
  overflow-x: hidden !important;
}

h1 {
  margin: 0;
}

p {
  line-height: 1.7;
  margin: 0;
}

.showCase {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* header 为元素 */
.showCase::after {
  content: "";
  height: 100vh;
  width: 100%;
  background-image: url("../assets/background.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: block;
  filter: blur(10px);
  -webkit-filter: blur(10px);
  transition: all 1s;
}

.showCase:hover::after {
  filter: blur(0px);
  -webkit-filter: blur(0px);
}
.showCase:hover .content {
  filter: blur(3px);
  -webkit-filter: blur(3px);
}

.content {
  position: absolute;
  z-index: 1;
  text-align: center !important;
  transition: all 1s;
}

.content .title {
  font-size: 4rem;
}

/* services */
.container {
  max-width: 1200px;
  margin: auto;
  overflow: hidden;
  padding: 4rem 1rem;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

.grid-3 div a {
  text-decoration: none;
  color: #fff;
}

.container.grid-3.center div :hover {
  cursor: pointer;
}
/* about us */
.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}

.bg-light {
  background: #f4f4f4;
  color: #333;
}

.bg-dark {
  background: #333;
  color: #f4f4f4;
}

@media (max-width: 560px) {
  .showCase::after {
    height: 50vh;
  }
  .content .title {
    font-size: 2rem;
  }
  .content .text {
    display: none;
  }

  .grid-3,
  .grid-2 {
    grid-template-columns: 1fr;
  }
  .grid-3 img {
    width: 60px;
    height: 60px;
  }
  .services div {
    border-bottom: #333 dashed 1px;
    padding: 1.2rem 1rem;
  }
}

/* landscape */
@media (max-height: 500px) {
  .content .text {
    display: none;
  }
}
</style>