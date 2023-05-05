const btn = document.getElementById("btn");
const yearInput = document.getElementById("year");
const monthInput = document.getElementById("month");
const dayInput = document.getElementById("day");

const yearOutput = document.getElementById("years");
const monthOutput = document.getElementById("months");
const dayOutput = document.getElementById("days");

btn.addEventListener("click", function () {
    const empty = "This field is required";
    var today = new Date();
    var currentDay = today.getDay();
    var currentMonth = (today.getMonth() + 1);
    var currentYear = today.getFullYear();
    var allMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let leadingDay = 0;
    let leadingMonth = 0;

    if (
        yearInput.value === "" ||
        monthInput.value === "" ||
        dayInput.value === ""
    ) {
        yearInput.style.border = "1px solid var(--light-red)";
        yearInput.style.animation = "invalid-error 0.1s";
        yearInput.nextElementSibling.innerHTML = empty;
        yearInput.previousElementSibling.style.color = "var(--light-red)";

        monthInput.style.border = "1px solid var(--light-red)";
        monthInput.style.animation = "invalid-error 0.1s";
        monthInput.nextElementSibling.innerHTML = empty;
        monthInput.previousElementSibling.style.color = "var(--light-red)";

        dayInput.style.border = "1px solid var(--light-red)";
        dayInput.style.animation = "invalid-error 0.1s";
        dayInput.nextElementSibling.innerHTML = empty;
        dayInput.previousElementSibling.style.color = "var(--light-red)";
    } else if (dayInput.value > 31 || dayInput.value <= 0) {
        dayInput.nextElementSibling.innerHTML = "Must be a valid day";
        dayInput.style.border = "1px solid var(--light-red)";
        dayInput.style.animation = "invalid-error 0.1s";
        dayInput.previousElementSibling.style.color = "var(--light-red)";

        monthInput.style.border = "1px solid var(--light-red)";
        monthInput.previousElementSibling.style.color = "var(--light-red)";

        yearInput.style.border = "1px solid var(--light-red)";
        yearInput.previousElementSibling.style.color = "var(--light-red)";
    } else if (
        monthInput.value > 12 ||
        monthInput.value <= 0
    ) {
        monthInput.nextElementSibling.innerHTML = "Must be a valid month";
        monthInput.style.border = "1px solid var(--light-red)";
        monthInput.style.animation = "invalid-error 0.1s";
        monthInput.previousElementSibling.style.color = "var(--light-red)";

        dayInput.style.border = "1px solid var(--light-red)";
        dayInput.previousElementSibling.style.color = "var(--light-red)";

        yearInput.style.border = "1px solid var(--light-red)";
        yearInput.previousElementSibling.style.color = "var(--light-red)";
    } else if (yearInput.value > currentYear) {
        yearInput.nextElementSibling.innerHTML = "Must be in the past";
        yearInput.style.border = "1px solid var(--light-red)";
        yearInput.style.animation = "invalid-error 0.1s";
        yearInput.previousElementSibling.style.color = "var(--light-red)";

        dayInput.style.border = "1px solid var(--light-red)";
        dayInput.previousElementSibling.style.color = "var(--light-red)";

        monthInput.style.border = "1px solid var(--light-red)";
        monthInput.previousElementSibling.style.color = "var(--light-red)";
    } else {
        yearInput.style.border = "1px solid hsl(0, 0%, 86%)";
        yearInput.nextElementSibling.innerHTML = '';
        yearInput.previousElementSibling.style.color = "hsl(0, 1%, 44%)";

        monthInput.style.border = "1px solid hsl(0, 0%, 86%)";
        monthInput.nextElementSibling.innerHTML = '';
        monthInput.previousElementSibling.style.color = "hsl(0, 1%, 44%)";

        dayInput.style.border = "1px solid hsl(0, 0%, 86%)";
        dayInput.nextElementSibling.innerHTML = '';
        dayInput.previousElementSibling.style.color = "hsl(0, 1%, 44%)";

        const day = dayInput.value;
        const month = monthInput.value;
        const year = yearInput.value;

        if (day > currentDay) {
            currentDay = currentDay + allMonth[currentMonth - 1];
            currentMonth = currentMonth - 1;
        }
        if (month > currentMonth) {
            currentMonth = currentMonth + 12;
            currentYear = currentYear - 1;
        }

        var resultDay = currentDay - day;
        var resultMonth = currentMonth - month;
        var resultYear = currentYear - year;

        --resultDay;
        
        if(resultDay < 10) {
            leadingDay = "0" + resultDay.toString();
        }else {
            leadingDay = resultDay;
        }

        if(resultMonth < 10) {
            leadingMonth = "0" + resultMonth.toString();
        }else {
            leadingMonth = resultMonth;
        }

        dayOutput.innerText = leadingDay;
        monthOutput.innerText = leadingMonth;
        yearOutput.innerText = resultYear;
    }
});
