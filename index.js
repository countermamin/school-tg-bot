const TelegramApi = require('node-telegram-bot-api');

const token = '5878411792:AAHtG1ua9E8Hg9k_h0ZlrGmWDi00RhNtSxQ';

const bot = new TelegramApi(token, { polling: true });

bot.setMyCommands([
	{ command: '/start', description: 'Начало работы' },
	{ command: '/info', description: 'Информация о боте' },
]);

const {
	replyOptions,
	classSix,
	classSeven,
	classEight,
	solve1,
	solve2,
	solve3,
	solve4,
	solve5,
	solve6,
	solve7,
	solve8,
	solve9,
	solve10,
	solve11,
	solve12,
	solve13,
	solve14,
	solve15,
} = require('./options.js');

bot.on('message', async (msg) => {
	const text = msg.text;
	const chatId = msg.chat.id;

	if (text === '/start') {
		bot.sendMessage(chatId, 'Добро пожаловать!', replyOptions);
		await bot.sendPhoto(chatId, './img/photo_2023-01-13_17-12-49.jpg');
		await bot.sendPhoto(chatId, './img/photo_2023-01-13_17-13-07.jpg');
		bot.sendMessage(
			chatId,
			'Это сборник задач по программированию на языке Python для 6х, 7х, 8х классов. Выберите в строке меню свой класс: '
		);
	}

	if (text === '/info') {
		bot.sendMessage(
			chatId,
			'Это бот со сборником задач по программированию на языке Python для 6х, 7х, 8х классов.'
		);
	}

	if (text === 'Шестой класс') {
		bot.sendMessage(chatId, 'Выбери задачу', classSix);
	}
	if (text === 'Седьмой класс') {
		bot.sendMessage(chatId, 'Выбери задачу', classSeven);
	}
	if (text === 'Восьмой класс') {
		bot.sendMessage(chatId, 'Выбери задачу', classEight);
	}
});

bot.on('callback_query', async (msg) => {
	const data = msg.data;

	const chatId = msg.message.chat.id;
	console.log(data);
	// Класс 6 задача 1
	if (data === '1') {
		await bot.sendMessage(chatId, 'Задача 1');
		await bot.sendMessage(
			chatId,
			'Попробуй решить задачу сам, затем нажми кнопку решение и сравни ответы!'
		);
		await bot.sendMessage(chatId, zadacha1());
		await bot.sendMessage(
			chatId,
			'Нажми кнопку чтобы посмотреть ответ!',
			solve1
		);
	}
	if (data === 'r-1') {
		await bot.sendMessage(chatId, reshenie1());
		await bot.sendMessage(chatId, 'Выбери задачу', classSix);
	}

	// Класс 6 задача 2
	if (data === '2') {
		await bot.sendMessage(chatId, 'Задача 2');
		await bot.sendMessage(
			chatId,
			'Попробуй решить задачу сам, затем нажми кнопку решение и сравни ответы!'
		);
		await bot.sendMessage(chatId, zadacha2());
		await bot.sendMessage(
			chatId,
			'Нажми кнопку чтобы посмотреть ответ!',
			solve2
		);
	}
	if (data === 'r-2') {
		await bot.sendMessage(chatId, reshenie2());
		await bot.sendMessage(chatId, 'Выбери задачу', classSix);
	}
	// Класс 6 задача 3
	if (data === '3') {
		await bot.sendMessage(chatId, 'Задача 3');
		await bot.sendMessage(
			chatId,
			'Попробуй решить задачу сам, затем нажми кнопку решение и сравни ответы!'
		);
		await bot.sendMessage(chatId, zadacha3());
		await bot.sendMessage(
			chatId,
			'Нажми кнопку чтобы посмотреть ответ!',
			solve3
		);
	}
	if (data === 'r-3') {
		await bot.sendMessage(chatId, reshenie3());
		await bot.sendMessage(chatId, 'Выбери задачу', classSix);
	}
	// Класс 6 задача 4
	if (data === '4') {
		await bot.sendMessage(chatId, 'Задача 4');
		await bot.sendMessage(
			chatId,
			'Попробуй решить задачу сам, затем нажми кнопку решение и сравни ответы!'
		);
		await bot.sendMessage(chatId, zadacha4());
		await bot.sendMessage(
			chatId,
			'Нажми кнопку чтобы посмотреть ответ!',
			solve4
		);
	}
	if (data === 'r-4') {
		await bot.sendMessage(chatId, reshenie4());
		await bot.sendMessage(chatId, 'Выбери задачу', classSix);
	}
	// Класс 6 задача 5
	if (data === '5') {
		await bot.sendMessage(chatId, 'Задача 5');
		await bot.sendMessage(
			chatId,
			'Попробуй решить задачу сам, затем нажми кнопку решение и сравни ответы!'
		);
		await bot.sendMessage(chatId, zadacha5());
		await bot.sendMessage(
			chatId,
			'Нажми кнопку чтобы посмотреть ответ!',
			solve5
		);
	}
	if (data === 'r-5') {
		await bot.sendMessage(chatId, reshenie5());
		await bot.sendMessage(chatId, 'Выбери задачу', classSix);
	}
	// Класс 6 задача 6
	if (data === '6') {
		await bot.sendMessage(chatId, 'Задача 6');
		await bot.sendMessage(
			chatId,
			'Попробуй решить задачу сам, затем нажми кнопку решение и сравни ответы!'
		);
		await bot.sendMessage(chatId, zadacha6());
		await bot.sendMessage(
			chatId,
			'Нажми кнопку чтобы посмотреть ответ!',
			solve6
		);
	}
	if (data === 'r-6') {
		await bot.sendMessage(chatId, reshenie4());
		await bot.sendMessage(chatId, 'Выбери задачу', classSix);
	}
	// Класс 7 задача 1
	if (data === '7') {
		await bot.sendMessage(chatId, 'Задача 1');
		await bot.sendMessage(
			chatId,
			'Попробуй решить задачу сам, затем нажми кнопку решение и сравни ответы!'
		);
		await bot.sendMessage(chatId, zadacha7());
		await bot.sendMessage(
			chatId,
			'Нажми кнопку чтобы посмотреть ответ!',
			solve7
		);
	}
	if (data === 'r-7') {
		await bot.sendMessage(chatId, reshenie7());
		await bot.sendMessage(chatId, 'Выбери задачу', classSeven);
	}
	// Класс 7 задача 2
	if (data === '8') {
		await bot.sendMessage(chatId, 'Задача 2');
		await bot.sendMessage(
			chatId,
			'Попробуй решить задачу сам, затем нажми кнопку решение и сравни ответы!'
		);
		await bot.sendMessage(chatId, zadacha8());
		await bot.sendMessage(
			chatId,
			'Нажми кнопку чтобы посмотреть ответ!',
			solve8
		);
	}
	if (data === 'r-8') {
		await bot.sendMessage(chatId, reshenie8());
		await bot.sendMessage(chatId, 'Выбери задачу', classSeven);
	}
	// Класс 7 задача 3
	if (data === '9') {
		await bot.sendMessage(chatId, 'Задача 3');
		await bot.sendMessage(
			chatId,
			'Попробуй решить задачу сам, затем нажми кнопку решение и сравни ответы!'
		);
		await bot.sendMessage(chatId, zadacha9());
		await bot.sendMessage(
			chatId,
			'Нажми кнопку чтобы посмотреть ответ!',
			solve9
		);
	}
	if (data === 'r-9') {
		await bot.sendMessage(chatId, reshenie9());
		await bot.sendMessage(chatId, 'Выбери задачу', classSeven);
	}
	// Класс 7 задача 4
	if (data === '10') {
		await bot.sendMessage(chatId, 'Задача 4');
		await bot.sendMessage(
			chatId,
			'Попробуй решить задачу сам, затем нажми кнопку решение и сравни ответы!'
		);
		await bot.sendMessage(chatId, zadacha10());
		await bot.sendMessage(
			chatId,
			'Нажми кнопку чтобы посмотреть ответ!',
			solve10
		);
	}
	if (data === 'r-10') {
		await bot.sendMessage(chatId, reshenie10());
		await bot.sendMessage(chatId, 'Выбери задачу', classSeven);
	}
	// Класс 8 задача 1
	if (data === '11') {
		await bot.sendMessage(chatId, 'Задача 1');
		await bot.sendMessage(
			chatId,
			'Попробуй решить задачу сам, затем нажми кнопку решение и сравни ответы!'
		);
		await bot.sendMessage(chatId, zadacha11());
		await bot.sendMessage(
			chatId,
			'Нажми кнопку чтобы посмотреть ответ!',
			solve11
		);
	}
	if (data === 'r-11') {
		await bot.sendMessage(chatId, reshenie11());
		await bot.sendMessage(chatId, 'Выбери задачу', classEight);
	}
	// Класс 8 задача 2
	if (data === '12') {
		await bot.sendMessage(chatId, 'Задача 2');
		await bot.sendMessage(
			chatId,
			'Попробуй решить задачу сам, затем нажми кнопку решение и сравни ответы!'
		);
		await bot.sendMessage(chatId, zadacha12());
		await bot.sendMessage(
			chatId,
			'Нажми кнопку чтобы посмотреть ответ!',
			solve12
		);
	}
	if (data === 'r-12') {
		await bot.sendMessage(chatId, reshenie12());
		await bot.sendMessage(chatId, 'Выбери задачу', classEight);
	}
	// Класс 8 задача 3
	if (data === '13') {
		await bot.sendMessage(chatId, 'Задача 3');
		await bot.sendMessage(
			chatId,
			'Попробуй решить задачу сам, затем нажми кнопку решение и сравни ответы!'
		);
		await bot.sendMessage(chatId, zadacha13());
		await bot.sendMessage(
			chatId,
			'Нажми кнопку чтобы посмотреть ответ!',
			solve13
		);
	}
	if (data === 'r-13') {
		await bot.sendMessage(chatId, reshenie13());
		await bot.sendMessage(chatId, 'Выбери задачу', classEight);
	}
	// Класс 8 задача 4
	if (data === '14') {
		await bot.sendMessage(chatId, 'Задача 4');
		await bot.sendMessage(
			chatId,
			'Попробуй решить задачу сам, затем нажми кнопку решение и сравни ответы!'
		);
		await bot.sendMessage(chatId, zadacha14());
		await bot.sendMessage(
			chatId,
			'Нажми кнопку чтобы посмотреть ответ!',
			solve14
		);
	}
	if (data === 'r-14') {
		await bot.sendMessage(chatId, reshenie14());
		await bot.sendMessage(chatId, 'Выбери задачу', classEight);
	}
	// Класс 8 задача 5
	if (data === '15') {
		await bot.sendMessage(chatId, 'Задача 5');
		await bot.sendMessage(
			chatId,
			'Попробуй решить задачу сам, затем нажми кнопку решение и сравни ответы!'
		);
		await bot.sendMessage(chatId, zadacha15());
		await bot.sendMessage(
			chatId,
			'Нажми кнопку чтобы посмотреть ответ!',
			solve15
		);
	}
	if (data === 'r-15') {
		await bot.sendMessage(chatId, reshenie15());
		await bot.sendMessage(chatId, 'Выбери задачу', classEight);
	}
});

function zadacha1() {
	return 'Условие задачи №1\nНапишите программу, которая приветствует пользователя, выводя слово Привет, введенное имя и знаки препинания по образцу:\n«Привет , Пайтон!»';
}
function zadacha2() {
	return 'Условие задачи №2\nВ школе Бином решили набрать три новых компьютерных класса. Так как занятия по у них проходят в одно и то же время, было решено выделить кабинет для каждого класса и купить в них новые смарт парты. За каждой смартпартой может сидеть не больше двух учеников. Известно количество учащихся в каждом из трёх классов.\nСколько всего нужно закупить смарт парт , чтобы их хватило на всех учеников? Программа получает на вход три натуральных числа: количество учащихся в каждом из трех классов.';
}
function zadacha3() {
	return 'Условие задачи №3\nНапишите программу, которая считывает целое число и выводит текст, аналогичный приведенному в примере (пробелы важны!).';
}
function zadacha4() {
	return 'Условие задачи №4\nНапишите программу, которая считывает три числа и выводит их сумму. Каждое число записано в отдельной строке.';
}
function zadacha5() {
	return 'Условие задачи № 5.\nНапишите программу, которая считывает длины двух катетов в прямоугольном треугольнике и выводит его площадь. Каждое число записано в отдельной строке.';
}
function zadacha6() {
	return 'Условие задачи №6\nn школьников делят k Алматинских яблок «Апорт» поровну, неделящийся остаток остается в корзинке. Сколько яблок достанется каждому школьнику? Сколько яблок останется в корзинке? Программа получает на вход числа n и k и должна вывести искомое количество яблок (два числа).';
}
function zadacha7() {
	return 'Условие задачи №7\nКазахстанская шоколадка имеет вид прямоугольника, разделенного на n×m долек. Шоколадку можно один раз разломить по прямой на две части.\nОпределите, можно ли таким образом отломить от шоколадки часть, состоящую ровно из k долек. Программа получает на вход три числа: n, m, k и должна вывести YES или NO.';
}
function zadacha8() {
	return 'Условие задачи №8\nДаны три целых числа. Выведите значение наименьшего из них.';
}
function zadacha9() {
	return 'Условие задачи №9\nДаны три целых числа. Определите, сколько среди них совпадающих. Программа должна вывести одно из чисел: 3 (если все совпадают), 2 (если два совпадает) или 0 (если все числа различны).';
}
function zadacha10() {
	return 'Условие задачи №10\nВ  школе-лицей    имени К.Сатпаева города Астаны занятия начинаются в 9:00. Продолжительность урока — 45 минут, после 1-го, 3-го, 5-го и т.д. уроков перемена 5 минут, а после 2-го, 4-го, 6-го и т.д. — 15 минут.\nДан номер урока (число от 1 до 10). Определите, когда заканчивается указанный урок.\nВыведите два целых числа: время окончания урока в часах и минутах.';
}
function zadacha11() {
	return 'Условие задачи №11\nДан список стран и городов каждой страны. Затем даны названия городов. Для каждого города укажите, в какой стране он находится.';
}
function zadacha12() {
	return 'Условие задачи №12\nПо данному натуральному n ≤ 9 выведите лесенку из n ступенек, i-я ступенька состоит из чисел от 1 до i без пробелов.';
}
function zadacha13() {
	return 'Условие задачи №13\nФакториалом числа n называется произведение 1 × 2 × … × n. Обозначение: n!.\nПо данному натуральному n вычислите значение n!.\nПользоваться математической библиотекой math в этой задаче запрещено.';
}
function zadacha14() {
	return 'Условие задачи №14\nДано несколько чисел. Вычислите их сумму. Сначала введено количество чисел количество чисел N, затем вводится ровно N целых чисел.\nКакое наименьшее число переменных нужно для решения этой задачи?';
}
function zadacha15() {
	return 'Условие задачи №15\nСоздать игру Выигрыш или не выигрыш';
}

function reshenie1() {
	return 'Решение задачи\nprint("Привет, " + input() + "!")';
}
function reshenie2() {
	return 'Решение задачи\na = int(input())\nb = int(input())\nc = int(input())\nprint(a // 2 + b // 2 + c // 2 + a % 2 + b % 2 + c % 2)';
}
function reshenie3() {
	return "Решение\nx = int(input())\ny = x + 1\nz = x - 1\nprint('The next number for the number ', x, 'is ', y, end='.')\nprint('\nThe previous number for the number ',x ,'is ', z, end='.')";
}
function reshenie4() {
	return 'Решение задачи\na = int(input())\nb = int(input())\nc = int(input())\nprint(a + b + c)';
}
function reshenie5() {
	return 'Решерие задачи\na = int(input())\nb = int(input())\nprint(a * b / 2)\nвторое   решение\na = float(input())\nb = float(input())\ns = (a*b)/2\nprint(s)';
}
function reshenie6() {
	return 'Решение задачи\nn = int(input())\nk = int(input())\nprint(k // n)\nprint(k % n)\nВторое решение\nn = int(input())\nk = int(input())\nx = k // n\ny = k - (x * n)\nprint(x)\nprint(y)';
}
function reshenie7() {
	return 'Решение задачи\nn = int(input())\nm = int(input())\nk = int(input())\nif k < n * m and ((k % n == 0) or (k % m == 0)):\n    print("YES")\nelse:\n    print("NO")';
}
function reshenie8() {
	return 'Решение задачи\na = int(input())\nb = int(input())\nc = int(input())\nif b >= a <= c:\n    print(a)\nelif a >= b <= c:\n    print(b)\nelse:\n    print(c)';
}
function reshenie9() {
	return 'Решение задачи\na = int(input())\nb = int(input())\nc = int(input())\nif a == b == c:\n    print(3)\nelif a == b or b == c or a == c:\n    print(2)\nelse:\n    print(0)';
}
function reshenie10() {
	return 'Решение задачи\na = int(input())\na = a*45 + (a//2)*5 + ((a+1)//2-1)*15\nprint(a//60 + 9, a%60)';
}
function reshenie11() {
	return 'Решение задачи\nmotherland = {}\nfor i in range(int(input())):\n    country, *cities = input().split()\n    for city in cities:\n        motherland[city] = country\nfor i in range(int(input())):\n    print(motherland[input()])';
}
function reshenie12() {
	return 'Решение задачи\nn = int(input())\nfor i in range(1, n + 1):\n    for j in range(1, i + 1):\n        print(j, sep="", end="")\n    print()';
}
function reshenie13() {
	return 'Решение задачи\nres = 1\nn = int(input())\nfor i in range(1, n + 1):\n    res *= i\nprint(res)';
}
function reshenie14() {
	return 'Решение задачи\npn = int(input())\nsum = 0\nfor i in range(n):\n    sum += int(input())\nprint(sum)';
}
function reshenie15() {
	return 'Решение задачи\nimport random, time\nprint("Давай бросим кубики!")\nAttempt = 0\nYourNumber = 0\nMyNumber = 0\n# Игральные кубики\nwhile Attempt < 5 :\n  Attempt = Attempt + 1\n  print(str(Attempt) + ". Раунд")\n  print("Твой бросок: ", end="")\n  Shoot1 = random.randint(1,6) # Твой бросок\n  time.sleep(0.5) # Ожидание в полсекунды\n  print(Shoot1)\n  print("Мой бросок: ", end="")\n  Shoot2 = random.randint(1,6) # Мой бросок\n  time.sleep(0.5) # Ожидание в полсекунды\n  print(Shoot2)\n  if Shoot1 > Shoot2 :\n    YourNumber = YourNumber + 1\n  if Shoot1 < Shoot2 :\n    MyNumber = MyNumber + 1\n  print(str(YourNumber) + " и " + str(MyNumber))\n  time.sleep(1) # Ожидание в секунду\n  print()\n# Вычисления\nif YourNumber > MyNumber :\n print("Ты выиграл")\nelif YourNumber < MyNumber :\n print("Я выиграл")\nelse :\n print("Ничья")\n  Давай бросим кубики!';
}
