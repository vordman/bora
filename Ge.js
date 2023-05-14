let el = document.getElementById('birthday');
let elresult = document.getElementById('result');
let elSubmit = document.getElementById('submit');

const today = new Date();

function calculateAge() {

    let birthDate = new Date(el.value);

    let age;
    if (today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() == birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate()
        )
    ) {
        age = today.getFullYear() - birthDate.getFullYear();
    } else {
        age = today.getFullYear() - birtDate.getFullYear() -1;
    }

    elresult.innerText = `귀하의 만 나이는 ${age} 입니다`;

    return age;
}

elSubmit.addEventListener('click', calculateAge);
