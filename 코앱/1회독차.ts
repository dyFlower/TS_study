/*
const userName: string = 'doyoung';
let userAge: number = 30;

let favorite: {
  name: string;
  song: string;
};

const mySong = {
  name: '김도영',
  song: '지리는노래',
};

let project: { member: string[]; days: number; started: boolean } = { member: ['kim', 'park'], days: 30, started: true };

let user: string = 'kim';
let age: number | undefined = undefined;
let married: boolean = false;
let 철수: (string | number | boolean | undefined)[] = [user, age, married];

let 학교: { score: number[] | boolean; teacher: string; friend: string | string[] } = {
  score: [100, 97, 84],
  teacher: 'Phil',
  friend: 'John',
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];

function 함수(x: number): number {
  return x * 2;
}

function 이름출력(이름?: string): void {
  if (typeof 이름 === undefined) {
    console.log('이름이 없습니다.');
  } else {
    console.log(`안녕하세요 ${이름}`);
  }
}
function 자릿수세기(x: string | number): number {
  return x.toString().length;
}

function 결혼확률(월소득: number, 자가보유: boolean, 매력점수: string): string | void {
  let score: number = 0;
  score += 월소득 / 10000;
  if (자가보유) {
    score += 500;
  }
  if (매력점수 === '상') {
    score += 100;
  }
  if (score >= 600) {
    return '결혼가능';
  }
}

function 클리닝함수(x: (string | number)[]) {
  let done: number[] = [];

  x.forEach((v) => {
    if (typeof v === 'string') {
      done.push(Number(v));
    } else {
      done.push(v);
    }
  });
  return done;
}

function subjectCheck(x: { subject: string | string[] }) {
  if (typeof x.subject === 'string') {
    console.log(x.subject);
  } else if (Array.isArray(x.subject)) {
    console.log(x.subject[x.subject.length - 1]);
  }
}

subjectCheck({ subject: 'math' }); //이 경우 'math'를 return
subjectCheck({ subject: ['science', 'art', 'korean'] }); //이 경우 'korean'을 return
// subjectCheck({ hello: 'hi' }); //이 경우 타입에러 나면 됩니다

type PositionX = { x: number };
type PositionY = {
  x: number;
  y: number;
};

type Position = PositionX & PositionY;

const positionTest: Position = { x: 1, y: 2 };

type Work = { color?: string; size: number; readonly position: number[] };

function play(x: '가위' | '바위' | '보') {}

let 회원정보 = {
  name: 'kim',
  age: 30,
  plusOne(x: number): number {
    return x + 1;
  },
  changeName: (): void => {
    console.log('안녕');
  },
};
회원정보.plusOne(1);
회원정보.changeName();

type Cutcut = (x: string) => string;

const cutZero: Cutcut = (x) => {
  if (x[0] === '0') {
    x = x.substring(1);
  }
  return x;
};

type Removemove = (x: string) => number;

const removeDash: Removemove = (x) => {
  return parseInt(x.split('-').reduce((v, acc) => v + acc));
};

type checkNum = (x: string, cutZero: Cutcut, removeDash: Removemove) => number;

const phoneCheck: checkNum = (x, cutZero, removeDash) => {
  return removeDash(cutZero(x));
};

console.log(phoneCheck('010-1111-2222', cutZero, removeDash));
*/

// HTML 컨트롤하기

let 제목 = document.querySelector('#title');
// let 제목 = document.querySelector('#title') as Element; 별로임

if (제목 != null) {
  제목.innerHTML = '반가워요';
}
if (제목 instanceof Element) {
  제목.innerHTML = '반가워요';
}
if (제목?.innerHTML != undefined) {
  제목.innerHTML = '반가워요';
}

let 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) {
  링크.href = 'https://kakao.com';
}

let 버튼 = document.querySelector('#button');
버튼?.addEventListener('click', () => {
  if (버튼 instanceof HTMLButtonElement) {
    버튼.innerHTML = '못생겨지세요';
  }
});

let 올링크 = document.querySelectorAll('.naver');
올링크.forEach((v) => {
  if (v instanceof HTMLAnchorElement) {
    v.href = 'https://kakao.com';
  }
});

class Person {
  name: string;
  constructor() {
    this.name = 'kim';
  }
}

class Carr {
  model: string;
  price: number;
  constructor(x: string, y: number) {
    this.model = x;
    this.price = y;
  }
  tax = (): number => {
    return this.price / 10;
  };
}

class Word {
  num: number[];
  str: string[];
  constructor(...params: (string | number)[]) {
    let 숫자들: number[] = [];
    let 문자들: string[] = [];

    params.forEach((v) => {
      if (typeof v === 'string') {
        문자들.push(v);
      } else {
        숫자들.push(v);
      }
    });
    this.num = 숫자들;
    this.str = 문자들;
  }
}

let obj = new Word('1', 2, 3);

interface Student {
  name: string;
}
interface Teacher extends Student {
  age: number;
}

let 학생: Student = { name: 'kim' };
let 선생: Teacher = { name: 'kim', age: 20 };

// type과 interface 차이
// 인터페이스는 중복 선언 가능 >> 자동 extends 같구만? // 유연 // 외부라이브러리 타입 가져와서 쓸 때 좋겠군요 super 유연 // 중복속성 ㄴㄴ 안돼

// 타입은 중복 선언이 불가능 // 엄격 // 중복속성이 되긴하는데 오류가 뜸 ㅡㅡ;; never로 된다. Interface가 더 안전해보이는 것 같누..?

interface Cart {
  product: string;
  price: number;
}
interface addCard extends Cart {
  card: boolean;
}

let 장바구니: Cart[] = [
  { product: '청소기', price: 7000 },
  { product: '삼다수', price: 800 },
];

interface Calculator {
  plus: (x: number, y: number) => number;
  minus: (x: number, y: number) => number;
}

let 계산기: Calculator = {
  plus(x, y) {
    return x + y;
  },
  minus(x, y) {
    return x - y;
  },
};

//rest 파라미터 -> array 타입이구만
function 함수1(...a: number[]) {
  console.log(a);
}
함수1(1, 2, 3, 4, 5);

//...의 용도 : rest parameter, 괄호를 벗겨주세요~

//destructuring
let [변수1, 변수2] = ['안녕', 20];

let { student, age } = { student: true, age: 20 };

let person = { student: true, age: 20 };

function 함수2({ student, age }: { student: boolean; age: number }) {
  console.log(student, age);
}
함수2({ student: true, age: 20 });

function 최댓값(...params: number[]): number {
  let maxNum = 0;
  params.forEach((v) => {
    if (v > maxNum) {
      maxNum = v;
    }
  });
  return maxNum;
}

function 함수3({ user, comment, admin }: { user: string; comment: number[]; admin: boolean }): void {
  console.log(user, comment, admin);
}
함수3({ user: 'kim', comment: [3, 5, 4], admin: false });

function 함수([a, b, c]: [a: number, b: string, c: boolean]) {
  console.log(a, b, c);
}
함수([40, 'wine', false]);

//Narrowing

function 함함수(a: string | undefined) {
  if (a && typeof a === 'string') {
  }
}
// in 으로 Narrowing 하기 // 배타적인 속성을 찾아야한다.
type Fish = { swim: string };
type Bird = { fly: string };
function 함함함수(animal: Fish | Bird) {
  if ('swim' in animal) {
    animal.swim;
  }
}
let 날짜 = new Date();
if (날짜 instanceof Date) {
}

//굳이 두개가 비슷할 때는 흠냐,,, 리터럴 속성으로 구별하자!
type Car = {
  wheel: '4개';
  color: string;
};
type Bike = {
  wheel: '2개';
  color: string;
};
function 햄수(x: Car | Bike) {
  if (x.wheel === '4개') {
    console.log('Car타입');
  }
}


// 함수에서 never.. return값이 없어야함, endpoint 없어야함(끝나지 않는 함수)
//왜 알아야함? 가끔 내가 코드 이상하게 짜면 등장함. 쓸일은 없을듯??
// 1.이상한 narrowing / 2.어떤 함수표현식은 return타입이 자동으로 never
function 햠수(): never {
  //   throw new Error();
  while (true) {}
}

class User {
  name: string;
  private familyName: string = 'kim';
  constructor(a) {
    //constructor를 쓰는 이유?? 파라미터 지정 가능
    this.name = a + this.familyName;
  }
  이름변경함수() {
    this.familyName = 'park'; //클래스내에서 함수로는 변경 가능
  }
}
let 유저1 = new User('도영');
//도영kim

class Person1 {
  constructor(public name: string) {}
}

class User2 {
  protected x = 10;
}
class NewUser extends User2 {
  //protected는 상속시에도 사용이 가능하다. private에서는 불가능!
  doThis() {
    this.x = 20;
  }
}

class User3 {
  static x = 10; // 부모class에 직접 부여되어서 자식에게 물려주지 않음 ex) User.x 가능
  y = 20;
}
let 자식 = new User2();

class Userr {
  private static x = 10;
  public static y = 20;

  addOne(a: number): number {
    Userr.x += a;
    return Userr.x;
  }
  printX(): void {
    console.log(Userr.x);
  }
}
let Userr1 = new Userr();

Userr1.addOne(3); //이렇게 하면 x가 3 더해져야함
Userr1.addOne(4); //이렇게 하면 x가 4 더해져야함
Userr1.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함

//제네릭
interface LengthCheck {
  length: number;
}
function 흠수<T extends LengthCheck>(x: T) {
  return x.length;
}
let a = 흠수<string>('100');
// let a = 흠수([4,2])
// let b = 흠수(['4','2'])

function 렝스<T extends string | string[]>(x: T): void {
  console.log(x.length);
}
렝스<string>('hello');
렝스<string[]>(['kim', 'park']);

interface Animal {
  name: string;
  age: number;
}
let data = '{"name" : "dog", "age" : 1 }';
function 흑수<T>(data: string): T {
  return JSON.parse(data);
}
let result = 흑수<Animal>(data);
console.log(result);

class Person2<T> {
  name;
  constructor(a: T) {
    this.name = a;
  }
}
let c = new Person2<string>('어쩌구');
c.name; //any 타입이 되었넹

// tuple
const food: [string, number, boolean] = ['치즈와퍼', 4500, true];
let arr: [string, number, ...boolean[]] = ['동서녹차', 4000, true, false, true, true, false, true];
function 헴수(...a: [string, boolean, ...(string | number)[]]) {}

function 분류기(...params: (string | number)[]) {
  let result: [string[], number[]] = [[], []];
  params.forEach((v) => {
    if (typeof v === 'string') {
      result[0].push(v);
    } else {
      result[1].push(v);
    }
  });
  return result;
}

let 이름: string = 'kim';
let 나이 = 20;
interface Person {
  name: string;
}
let 사람: Person = { name: 'park' };

interface StringOnly {
  age: number;
  [key: string]: string | number;
}
let user: StringOnly = {
  name: 'kim',
  age: 20,
  location: 'seoul',
};

interface 시그니처 {
  [key: string]: string | number;
}
let obj1: 시그니처 = {
  model: 'k5',
  brand: 'kia',
  price: 6000,
  year: 2030,
  date: '6월',
  percent: '5%',
  dealer: '김차장',
};

interface 리커시브 {
  'font-size': number;
  [key: string]: 리커시브 | number;
}
let obj2 = {
  'font-size': 10,
  secondary: {
    'font-size': 12,
    third: {
      'font-size': 14,
    },
  },
};

interface Personn {
  age: number;
  name: string;
}
type PersonKeys = keyof Person; //'age'| 'name'

//타입 변환기
type 변환용 = {
  color: boolean;
  model: boolean;
  price: boolean | number;
};
type 변환기<T> = {
  [key in keyof T]: string;
};

type newType = 변환기<변환용>;

type Bus = {
  color: string;
  model: boolean;
  price: number;
};

type busType<T> = {
  [key in keyof T]: string | number;
};
type newBus = busType<Bus>;

//조건문으로 타입만들기
type Age<T> = T extends string ? string : unknown;

let aa: Age<string>;
let a2: Age<number>; //unknown

type FirstItem<T> = T extends any[] ? T[0] : any;

type 타입추출<T> = T extends (infer R)[] ? R : unknown;
type abc = 타입추출<string[]>; // R이 string이 되는구망! R이 위치하는 곳의 타입을 뽑아낸다.

type FirstCheck<T> = T extends [string, ...any] ? T[0] : unknown;

type 타입뽑기<T> = T extends (x: infer R) => void ? R : any;
type asdf = 타입뽑기<(x: number) => void>; //이러면 number가 이 자리에 남음
type asdfd = 타입뽑기<(x: string) => void>; //이러면 string이 이 자리에 남음

