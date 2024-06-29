document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('toggle-password');
    const form = document.querySelector('.form');

    // ページ読み込み時にlocalStorageからデータを取得して自動入力
    if (localStorage.getItem('email')) {
        emailInput.value = localStorage.getItem('email');
    }
    if (localStorage.getItem('password')) {
        passwordInput.value = localStorage.getItem('password');
    }

    // フォーム送信時にemailとpasswordをlocalStorageに保存
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // フォームのデフォルト動作を防ぐ
        localStorage.setItem('email', emailInput.value);
        localStorage.setItem('password', passwordInput.value);
        form.submit(); // フォームを送信
    });

    // パスワード表示アイコンのクリックイベントを監視
    togglePassword.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    });
});