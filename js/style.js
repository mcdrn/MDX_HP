const responsive_index_btn = document.querySelector('.responsive_btn');
responsive_index_btn.addEventListener('click', menuToggle);

function menuToggle() {
  const header_index_detail = document.querySelector('.nav');
  header_index_detail.classList.toggle('menu_active');
}

window.addEventListener('scroll', function() { console.log(window.scrollY); });




document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // フォームのデフォルトの送信を防ぐ

  // フォームから入力された値を取得
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // 簡単なバリデーション
  if (name && email && message) {
      // メールアドレスが正しい形式か確認
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailRegex.test(email)) {
          showResultMessage("無効なメールアドレスです。", "error");
          return;
      }

      // フォーム内容が正しい場合、成功メッセージを表示
      showResultMessage("お問い合わせありがとうございます！送信が完了しました。", "success");
      
      // フォームをリセット
      document.getElementById("contactForm").reset();
  } else {
      showResultMessage("すべての項目を入力してください。", "error");
  }
});

// 結果メッセージを表示する関数
function showResultMessage(message, type) {
  const resultMessage = document.getElementById("resultMessage");
  resultMessage.textContent = message;
  resultMessage.className = "result-message " + type;
  resultMessage.style.display = "block";
}
