<template onload="draw()">
<div class="demo">
  <header class="header">
    <h3>数据结构演示系统</h3>
  </header>
  <main class="main">
    <!--operation-->
    <div class="operation">
      <div @click="init()">随机</div>
      <div class="insert_hover">插入</div>
      <div></div>
      <div></div>
    </div>
    <!-- float_insert -->
    <div class="insert">
      <input type="text" name="" v-model="element" value="" placeholder="请输入元素">
      <input type="text" name="" v-model="position" value="" placeholder="请输入位置">

      <div class="insert_button" @click="insertElement()">
        确认
      </div>
    </div>


    <canvas width="1000" height="900" id="canvas"></canvas>


  </main>
</div>
</template>

<script>
import Node from "../components/Node.vue";

export default {
  data() {
    return {
      element: '',
      position: '',
      allComponents: [],
      node: "Node",
      link: []
    };
  },
  components: {
    Node
  },
  mounted() {
    this.createLink();
    this.draw();

  },
  methods: {
    createLink() {
      var n = parseInt(Math.random() * (7 - 3) + 3); //随机3到6
      var i;
      let ll = new LinkedList();
      this.link = ll;
      for (i = 0; i < n; i++) {
        ll.append(parseInt(Math.random() * (100 - 1) + 1));
      }

      return ll;
    },
    insertElement() { //插入元素
      let element = this.element;
      let position = this.position;
      console.log(position == '');

      if (position === '' || element === '') {
        this.$notify({
          title: '失败',
          message: '插入失败',
          type: 'error',
        });
      } else {
        this.link.insert(position - 1, element);
        this.draw();
        this.$notify({
          title: '成功',
          message: '插入成功',
          type: 'success'
        });
        console.log(this.link.toString());
      }

    },
    draw() {
      var canvas = document.getElementById("canvas");
      console.log(this.link.toString());
      if (canvas.getContext) {
        var context = canvas.getContext("2d");
        let xx = 100,
          yy = 100;

        function Node(x, y, text) {
          this.x = x;
          this.y = y;
          this.text = text;
        }

        Node.prototype.draw = function() {
          context.beginPath();
          context.fillStyle = "black";
          context.fillRect(this.x, this.y, 40, 40);
          context.fillStyle = "white";
          context.font = "20px Georgia";
          context.fillText(this.text, this.x + 10, this.y + 25);
        };

        Node.prototype.drawDrection = function() {
          context.beginPath();
          context.moveTo(this.x + 50, this.y + 20);
          context.lineTo(this.x + 90, this.y + 20);
          context.lineWidth = 5; //线的宽度
          context.strokeStyle = '#000'; //线的颜色
          // context.lineCap = 'round'; //线的两头圆滑
          context.stroke();
        }
        var link = this.link;

        let length = link.size();
        context.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < link.size(); i++) {
          xx += 100;
          var node = new Node(xx, yy, link.findIndex(i));
          node.draw();
          if (i < length - 1) {
            node.drawDrection();
          }
        }
      }
    },
    init() {
      this.createLink();
      this.draw();
      this.$notify({
        title: '成功',
        message: '随机生成成功',
        type: 'success'
      });
    }

  }
};

function LinkedList() {
  // Node辅助类，表示要加入列表的项，element是即将添加到列表的值，next是指向列表中下一个节点项的指针
  let Node = function(element) {
    this.element = element;
    this.next = null;
  };

  let length = 0;
  let head = null;

  // 向链表尾部追加元素
  this.append = function(element) {
    let node = new Node(element);
    let current;
    if (head === null) {
      // 列表中第一个节点
      head = node;
    } else {
      current = head;
      while (current.next) {
        current = current.next; // 找到最后一项，是null
      }
      current.next = node; // 给最后一项赋值
    }
    length++; // 更新列表的长度
  };

  // 从链表中移除指定位置元素
  this.removeAt = function(position) {
    if (position > -1 && position < length) {
      // 值没有越界
      let current = head;
      let previous,
        index = 0;
      if (position === 0) {
        //  移除第一项
        head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next; // 将previous与current的下一项连接起来，跳过current，从而移除
      }
      length--; // 更新列表的长度
      return current.element;
    } else {
      return null;
    }
  };

  this.findIndex = function(position) {
    if (position > -1 && position < length) {
      let current = head;
      let index = 0;
      while (index++ < position) {
        current = current.next;
      }
      return current.element;
    }
  };

  // 在链表任意位置插入一个元素
  this.insert = function(position, element) {
    if (position >= 0 && position <= length) {
      // 检查越界值
      let node = new Node(element),
        current = head,
        previous,
        index = 0;
      if (position === 0) {
        // 在第一个位置添加
        node.next = current;
        head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current; // 在previous与current的下一项之间插入node
        previous.next = node;
      }
      length++;
      return true;
    } else {
      return false;
    }
  };

  // 把链表内的值转换成一个字符串
  this.toString = function() {
    let current = head,
      string = "";
    while (current) {
      string += current.element + " ";
      current = current.next;
    }
    return string;
  };

  // //长度
  // this.toLength = function(){

  // }

  // 在链表中查找元素并返回索引值
  this.indexOf = function(element) {
    let current = head,
      index = 0;
    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  };

  // 从链表中移除指定元素
  this.remove = function(element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  };

  this.isEmpty = function() {
    return length === 0;
  };

  this.size = function() {
    return length;
  };

  this.getHead = function() {
    return head;
  };
}
</script>

<style scoped>
.demo {
  display: grid;
  grid-template-rows: 40px 800px;
  margin: -8px;
  height: 1000px;
  background: #eeeeee;
}

.header {
  background: #fff;
  -moz-box-shadow: 2px 1px 4px #a39898;
  -webkit-box-shadow: 2px 1px 4px #a39898;
  box-shadow: 2px 1px 4px #a39898;
}

.header h3 {
  margin-left: 20px;
  width: 200px;
  margin-top: 10px;
}

/* operation */
.operation {
  width: 150px;
  height: 200px;
  float: right;
  background: #000;
  margin-top: 200px;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
}

.operation div {
  color: #fff;
  padding-top: 10px;
}

.operation div:hover {
  color: #000;
  background: rgb(172, 172, 172);
  cursor: pointer;

}

/* insert */
.insert {
  width: 100px;
  height: 50px;
  float: right;
  margin-top: 250px;
  margin-right: 2px;
  background: #000;
  display: block;

}

.insert input {
  width: 100px;
  height: 25px;
  background: rgb(172, 172, 172);
  border: none;
  outline: none;
  text-align: center;
  font-size: 1rem;
}

.insert_button {
  width: 100px;
  height: 25px;
  background: #000;
  color: #fff;
}

.insert_button:hover {
  background: #fff;
  color: #000;
}

/* canvas */
canvas {
  margin-top: 0;
  float: left;
}
</style>
