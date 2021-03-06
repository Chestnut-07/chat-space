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
            <img class="message-main_image" src="${message.image}">
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

  $('.form').on("submit",function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.message-list').append(html);
      $('.message-list').animate({ scrollTop: $('.message-list')[0].scrollHeight});
      $('form')[0].reset();
      $('.form__submit').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.form__submit').prop('disabled', false);
    });
  });
});