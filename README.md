Redux Thunkを利用して非同期通信を実装したサンプルアプリケーションです。
外部APIから取得したToDoリストを表示・更新できるTodoリストです。

Reduxt ToolkitのAPI(createSlice, createAsyncThunk)を利用して実装しています。
React Reduxの公式ドキュメント内で紹介されている[Basic Tutorial](https://react-redux.js.org/introduction/basic-tutorial)のTodoアプリがベースとなっています。

実装の解説は[Redux Toolkitを利用して非同期処理のステータスをStateで管理する](https://nishinatoshiharu.com/redux-async-status-state/)と[Reduxを利用した非同期処理中のローディング機能実装](https://nishinatoshiharu.com/loading-with-async-redux/)で紹介しています。

<kbd><img width="268" alt="スクリーンショット 2021-02-14 14 13 12" src="https://user-images.githubusercontent.com/3121046/109912319-27b2f680-7cef-11eb-99f1-36c52895ddcd.png"></kbd>


## 実行方法

### APIサーバーの用意

```
// todos.json

{
  "todos": [
    {
      "id": 1,
      "content": "do something",
      "completed": false
    },
    {
      "id": 2,
      "content": "go somewhere",
      "completed": false
    }
  ]
}
```

```
### json-serverのインストール
$ yarn add json-server

### port4000でJSON Serverを起動し、todos.jsonが取得できるようにする
$ json-server todos.json --port 4000
```

### 起動

```
$ yarn start
```
