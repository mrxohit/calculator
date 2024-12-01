let string = "";
let buttons = document.querySelectorAll(".button")

Array.from(buttons).forEach((button) => {
    button.addEventListener(
        'click', (e) => {
            switch (e.target.innerHTML) {
                case 'c':
                    string = string.slice(0, string.length - 1);
                    document.querySelector('input').value = string;
                    break;
                case 'ac':
                    string = ""
                    document.querySelector('input').value = string;
                    break;
                case '=':
                    string = eval(string)
                    document.querySelector('input').value = string;
                    break;
                default:
                    string = string + e.target.innerHTML;
                    document.querySelector('input').value = string;
                    break;
            }
        })
})
