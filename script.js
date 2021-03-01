document.querySelector("button").addEventListener('click', fieldChecker);

function fieldChecker() {
    let field1 = document.forms["input"]["field1"];
    let field2 = document.forms["input"]["field2"];
    let fieldValue1Answer;
    let fieldValue2Answer;
    let fieldValue1 = field1.value;
    let fieldValue2 = 'null';

    emptyCheck(fieldValue1, field1);
    publishAnswer(fieldValue1Answer);
    
    fieldValue1 = null;
    fieldValue2 = field2.value;
    emptyCheck(fieldValue2, field2);
    publishAnswer(fieldValue2Answer);

    function publishAnswer(a) {
        console.log(a);
        alert(a);
    }

    function emptyCheck(fieldValue, field) {
        if (fieldValue === '') {
            if (fieldValue1Answer === undefined) {
                fieldValue1Answer = 'Ошибка: поле 1 пустое';
            }
            fieldValue2Answer = 'Ошибка: поле 2 пустое';
            field.classList.add("border-red");
        } else {
            field.classList.remove("border-red");
                if (fieldValue === fieldValue2) {
                    var count = (fieldValue2.match(/,/g))?.length;
                    if (count === 1) {
                        if (fieldValue2[0] !== ',' && fieldValue2[length-1] !== ',') {
                            fieldValue2 = fieldValue2.replace(",", "");
                        }
                    }
                }
            searchValue();
        }
    }

    function searchValue() {
        switch(true) {
            case fieldValue1 === '42':
                fieldValue1Answer = 'И спасибо за рыбу!';
                break;
            case fieldValue2 === 'ДМИР':
                fieldValue2Answer = 'УРА';
                break;
            case fieldValue2 === 'ТЕРЕМ':
                fieldValue2Answer = '<3';
                break;
            case fieldValue2.includes(' ') === true:
                fieldValue2Answer = 'Ошибка: в поле 1 неизвестное значение';
                break;
            case fieldValue2.includes('e') === true:
                fieldValue2Answer = 'Ошибка: в поле 1 неизвестное значение';
                break;
            case (isFinite(fieldValue2) === true) && (isNaN(fieldValue2) === false):
                fieldValue2Answer = 'В ПОЛЕ2 ЦИФРА';
                break;
                default:
                    if (fieldValue1Answer === undefined) {
                        fieldValue1Answer = 'Ошибка: в поле 1 неизвестное значение';
                    }
                    fieldValue2Answer = 'Ошибка: в поле 2 неизвестное значение';
        }
    }
}