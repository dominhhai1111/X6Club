function showPassword(element) {
    let inputPassword = $(element).parent().find("input");
    if (inputPassword.attr('type') == 'password') {
        inputPassword.attr('type', 'text');
        $(element).attr('src', 'img/icn-eye-close.png');
    } else {
        inputPassword.attr('type', 'password');
        $(element).attr('src', 'img/icn-eye.png');
    }
}