document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();  // フォーム送信を一旦停止

    // フォームの入力を取得
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // バリデーション: 入力がすべてされているかチェック
    if (name === "" || email === "" || subject === "" || message === "") {
        alert("すべての項目を入力してください。");
    } else {
        // フォームが正しく入力されていれば、送信完了メッセージを表示
        alert("お問い合わせが送信されました。");
        // 送信後、フォームをリセット
        document.getElementById('contactForm').reset();
    }
});
