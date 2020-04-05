<template>
  <div>
    <div>
      <h3>このアプリについて</h3>
      <p>vue.jsを使ってTodoアプリを作ってみました。Todoアプリってよく見かけますが、個人的にはあまりうまく利用できた試しがありません。なぜかというと、やることを書き出しことと管理することを一緒にすると頭がパンクしてしまうからだと気付きました。なので、それを改善するために、1.タスクをとりあえず書き出す。2.タスクを管理する。という２つのフェーズに分けてできるTodoアプリを作りたいと思って、今回のアプリを作りました。ぜひ使ってください。
      </p>
      <h3>使い方</h3>
        <ul>
          <li>1.New Todosのページでやりたいこと、やらなければいけないことをとにかく書き出す！</li>
          <li>2.Manege Todosのページで書き出したタスクを曜日に振り分ける。</li>
          <li>3.それぞれの曜日のタスクは左に来るほど重要なタスクになるように並び替える。</li>
          <li>4.終わったタスクはチェックを入れるとグレーアウトする。画面上部のprogressバーが更新される。</li>
          <li>5.消したいタスクはバツボタンを押すと消すことができる</li>
          <li>6.完了したタスクをまとめて消すときは画面上部の「purge」ボタンを押す。</li>
        </ul>
      <h3>使った技術</h3>
        <ul>
          <li>Vue.js</li>
          <li>vue-cli</li>
          <li>Vuex</li>
          <li>vue-router</li>
          <li>vue-draggable</li>
        </ul>
      <h3>その他</h3>
      <p><a href="https://github.com/cedrictarou/cedrictarou-portfolio-todoAppVue">GitHub</a></p>
      
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
</style>