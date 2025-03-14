// Random integer generator within range
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let width = getRandomInt(500, 800) + "px";
let height = getRandomInt(70, 370) + "px";
let randomColorOne = getRandomInt(0, 255);
let randomColorTwo = getRandomInt(0, 255);
let randomColorThree = getRandomInt(0, 255);

// Texts Array
const texts = [
  "الحياة مثل الدراجة، يجب أن تواصل التقدم حتى لا تقع.",
  "من جدّ وجد، ومن زرع حصد.",
  "النجاح هو مجموعة من الجهود الصغيرة المتكررة يوميًا.",
  "كل يوم هو فرصة جديدة لبداية جديدة.",
  "لا تنتظر الفرصة، اصنعها بنفسك!",
  "عقلك هو أقوى سلاح لديك، استخدمه بحكمة.",
  "الفشل ليس عكس النجاح، بل هو جزء منه.",
  "افعل اليوم ما تخشى فعله، فالمستقبل يُبنى اليوم.",
  "الأحلام لا تتحقق بالكلام، بل بالعمل الجاد والمثابرة.",
  "كل تأخير في حياتك هو لحكمة، لا تستعجل.",
  "المحاولة والفشل خير من عدم المحاولة إطلاقًا.",
  "لا يوجد مستحيل، فقط إرادة لم تُختبر بعد.",
  "سر النجاح هو أن تؤمن بنفسك حتى عندما لا يؤمن بك أحد.",
  "إذا كنت تستطيع أن تحلم به، يمكنك تحقيقه.",
  "لا تندم على الأيام الصعبة، فهي التي صنعتك أقوى.",
  "ثق بنفسك، فأنت أقوى مما تعتقد.",
  "الأشياء العظيمة تبدأ بخطوات صغيرة، لا تتوقف.",
  "الطريق إلى القمة يبدأ بخطوة، فلا تتردد.",
  "ابتسم، فالحياة أقصر من أن تقضيها في الحزن.",
  "حافظ على شغفك، فهو الوقود الذي يجعلك تستمر.",
  "الحياة حلوة، بس لو عندك فلوس أكتر شوية تبقى أحلى! 💸",
  "والله منتا نافع",
  "خد الأمور ببساطة... يعني لو وقعت، استمتع بالسقوط! ",
  "لو فشلت في حاجة، افتكر إنك على الأقل حاولت، احسن من اللي نايمين!",
  "قانون الباشمهندسين: مهما نظفت الكود، هيفضل في نظرهم وسخ! 🤦‍♂️",
  "الحياة فيها حاجتين أكيدتين: الموت... وإن الباشمهندس مش هيعجبوا الكود من أول مرة! ",
  "الحياة زي الكود، لازم تعمل refresh علشان تشوف التغييرات!",
  "الحياة مثل الكود، لازم تعمل commit قبل أي تغيير!",
  "الحياة مثل الكود، لازم تعمل pull قبل أي push!",
  "الباشمهندس مش بيصحح الكود، ده بيصحح مستقبلك المهني بالكامل! 🤡",
  "مستقبلك ملوش ملامح",
];
// choose random text
const randomText = texts[Math.floor(Math.random() * texts.length)];

// Function to get luminance of a color
function getLuminance(r, g, b) {
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

let luminance = getLuminance(randomColorOne, randomColorTwo, randomColorThree);
let textColor = luminance < 0.5 ? "#FFF" : "#000"; // لو اللون غامق، خليه أبيض
document.body.innerHTML += `<div  class="tips-box" style="width: ${width}; height: ${height}; background: rgb(${randomColorOne}, ${randomColorTwo}, ${randomColorThree}); color: ${textColor}"><p>${randomText}😂</p></div>`;

// If the random text is one of these texts, add a video
if (
  randomText === texts[12] ||
  randomText === texts[22] ||
  randomText === texts[23] ||
  randomText === texts[24]
) {
  document.body.innerHTML += `     
    <iframe 
    src="https://www.youtube-nocookie.com/embed/mALaSutcxIs?autoplay=1&start=72"
    frameborder="0" 
    allow="autoplay; encrypted-media" 
    allowfullscreen
    >
</iframe> `;
}

console.log(
  texts.indexOf(
    "لو فشلت في حاجة، افتكر إنك على الأقل حاولت، احسن من اللي نايمين!"
  )
);
console.log(
  texts.indexOf("قانون الباشمهندسين: مهما نظفت الكود، هيفضل في نظرهم وسخ! 🤦‍♂️")
);
