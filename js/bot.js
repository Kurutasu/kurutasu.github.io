(function() {

  var botui = new BotUI('self-intro');

  //初期メッセージ．
  botui.message.add({
    content: 'こんにちは！kurutasuです！'
  }).then(showQuestions);


  // 質問の選択肢を提示する関数．
  function showQuestions() {
    botui.message.add({
      delay:1500,
      content: '何について，お話ししましょうか？'
    }).then(function() {

      // ボタンを提示する．
      return botui.action.button({
        autoHide: false,
        delay: 1500,
        action: [
          {icon: 'user-o', text: '来歴', value: 'carrier'},
          {icon: 'rocket', text: '趣味', value: 'hobby'},
          {icon: 'pencil', text: 'サイト', value: 'memotaro'}
          ]
      });
    }).then(function(res) {
      botui.action.hide();
      switch (res.value) {
        case 'carrier': showCarrier(); break;
        case 'hobby': showHobby(); break;
        case 'memotaro': showMemotaro(); break;
        default: end();
      }
    });
  }

  // 来歴について説明する関数．
  function showCarrier() {
    botui.message.add({
      delay: 1500,
      content: '大学では，（情報工学）を専攻していました。'
    }).then(function() {
      return botui.message.add({
        delay: 2500,
        content: '新卒で約7年間、地方自治体向けのシステム開発を行っている会社で働きました。'
      });
    }).then(function() {
      return botui.message.add({
        delay: 2500,
        content: '現在は，コンサルティング会社でシステムコンサルタントをしています。'
      });
    }).then(askEnd);
  }

  // 趣味について説明する関数．
  function showHobby() {
    botui.message.add({
      delay: 1500,
      content: '趣味は投資です。老後資金と子供の学資資金のためにコツコツと続けています。'
    }).then(function() {
      return botui.message.add({
        delay: 2500,
        content: 'また、2020年2月に子供が生まれました。妻と一緒に子育て奮闘中です。'
      });
    }).then(askEnd);
  }

  // 本ウェブサイトについて説明する関数．
  function showMemotaro() {
    botui.message.add({
      delay: 1500,
      content: 'このウェブサイトには，日記以上かつQiita未満なメモを書く予定です。'
    }).then(function(){
      return botui.message.add({
        delay: 2000,
        content: '想定読者は私自身です。'
      });
    }).then(function(){
      return botui.message.add({
        delay: 2000,
        content: 'Categoriesには，各記事をカテゴリごとにまとめています。'
      });
    }).then(function(){
      return botui.message.add({
        delay: 2000,
        content: 'なお，本ウェブサイトの内容を，予告なく変更・削除する場合があります．何卒ご理解のほど，よろしくお願い致します．'
      });
    }).then(askEnd);
  }

  // プログラムを終了するか聞く関数．
  function askEnd(){
    botui.message.add({
      delay:2000,
      content: '他に質問がありますか？'
    }).then(function() {

      // ボタンを提示する．
      return botui.action.button({
        delay: 1500,
        action: [
          {icon: 'circle-o', text: 'はい', value: true},
          {icon: 'close', text: 'いいえ', value: false}]
      });
    }).then(function(res) {
      res.value ? showQuestions() : end();
      });
  }

  //プログラムを終了する関数．
  function end() {
    botui.message.add({
      delay: 1500,
      content: 'お時間頂き，ありがとうございました．'
    }).then(function(){
      return botui.message.add({
        delay: 1500,
        content: 'それでは，引き続きよろしくお願いします！'
      });
    });
  }

})();
