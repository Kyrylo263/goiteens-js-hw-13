// 1.
// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту
// метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку.
// Методи повинні зпрацьовувати при натисканні на кнопки “поповнити рахунок” та отримати ‘готівку’ відповідно.
// Після проведення операції виводити повідомлення про залишок на рахунку.

const depositButton = document.querySelector('#button1');
const withdrawButton = document.querySelector('#button2');
const bankAccount = {
    ownerName: 'Kyrylo',
    accountNumber: 3657,
    balance: 500,
    getBalance() {
        return this.balance;
    },
    deposit(deposit) {
        depositButton.addEventListener ('click', () => {
            return console.log(this.balance += deposit);
        })
    },
    withdraw(withdraw) {
        withdrawButton.addEventListener ('click', () => {
            if (this.balance < withdraw) {
                return console.log('error');
            } else {
                return console.log(this.balance -= withdraw);
            };
        });
    },
};
console.log(bankAccount.getBalance());
bankAccount.deposit(100);
bankAccount.withdraw(200);

// 2.
// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод,
// який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна
// 0 градусів Цельсія. Температуру потрібно отримати з інпуту на сторінці. Якщо метод повернув "true" вивести повідомлення
// “температура нижче 0 градусів Цельсія” і навпаки

const tempInput = document.querySelector('#input');
const tempButton = document.querySelector('#button3');
const weather = {
    temperature: -1,
    humidity: 40,
    windSpeed: 5,
    temp() {
        if (this.temperature < 0) {
            return console.log('Температура нижче 0 градусів Цельсія');;
        } else {
            return console.log('Температура вище або дорівнює нулю');;
        };
    },
};

tempButton.addEventListener('click', () => {
    weather.temperature = tempInput.value;
    weather.temp();
});

// 3.
// Створіть об’єкт "user", якbq буде мати властивості "name", "email", "password". Додайте метод "login", який
// буде перевіряти правильність введеного email та password. Використайте інпути для запису значень властивостей в об’єкт

const nameInput = document.querySelector('#input2');
const emailInput = document.querySelector('#input3');
const passwordInput = document.querySelector('#input4');
const button3 = document.querySelector('#button4');
const user = {
    name: '',
    email: '',
    password: '',
    login() {
        if (this.email.includes('@') && this.password.length > 6) {
            console.log('Все введено правильно!');
        } else {
            console.log('error');
        };
    },
};
button3.addEventListener('click', () => {
    user.name = nameInput.value;
    user.email = emailInput.value;
    user.password = passwordInput.value;
    user.login();
});

// 4.
// Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод,
// який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення
// властивостей на сторінку. Якщо метод повернув "true" то змінити колір тексту поля title на зелений.

const pTitle = document.querySelector('#p1');
const pDirector = document.querySelector('#p2');
const pYear = document.querySelector('#p3');
const pRating = document.querySelector('#p4');
const buttonFilm = document.querySelector('#button5');
const movie = {
    title: 'Harry Potter',
    director: 'Poly',
    year: '1756',
    rating: 9,
    funcRating() {
        if (this.rating > 8) {
            pTitle.style.color = 'green';
        } else {
            pTitle.style.color = 'red';
        };
    },
};
pTitle.textContent = movie.title;
pDirector.textContent = movie.director;
pYear.textContent = movie.year;
pRating.textContent = movie.rating;
movie.funcRating();