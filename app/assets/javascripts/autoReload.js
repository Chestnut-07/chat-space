$(function(){
  function buildHTML(message){
    //[もしメッセージに画像が含まれていたら]という条件式
    if (message.image) {
      let html = //メッセージに画像が含まれる場合のHTMLを作る
        `<div class="message-box" data-message-id=${message.id}>
          <div class="message-info">
            <div class="message-info__name">
              ${message.user_name}
            </div>
            <div class="message-info__date">
                ${message.created_at}
            </div>
          </div>
          <div class="message-main">
            <p class="message-main__text">
              ${message.content}
            </p>
            <img class="message-main_image" >
          </div>
        </div>`
      return html;
    } else {
      let html = //メッセージに画像が含まれない場合のHTMLを作る
      `<div class="message-box" data-message-id=${message.id}>
        <div class="message-info">
          <div class="message-info__name">
            ${message.user_name}
          </div>
          <div class="message-info__date">
            ${message.created_at}
          </div>
        </div>
        <div class="message-main">
          <p class="message-main__text">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  let reloadMessages = function() {
    let last_message_id = $('.message-box:last').data("message-id") || 0;
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })

    .done(function(messages) {
      // 更新するメッセージがなかった場合は.doneの後の処理が動かないようにする
      if (messages.length !== 0) {
        //追加するHTMLの入れ物を作る
        let insertHTML = '';
        //配列messagesの中身を一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
        $.each(message, function(i, message) {
          insertHTML += buildHTML(message) 
        });
        //メッセージが入ったHTMLに、入れ物ごと追加
        $('.message-list').append(insertHTML);
        $('.message-list').animate({ scrollTOP: $('.message-list')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadMessages, 7000);
});