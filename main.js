let x = 4;
let otpSecretCode = [];
let enteredValues=[];
let otpMsg = document.querySelector("#otpMsg");
let inputNumbers = document.querySelectorAll(".otp input");
//---------------------------------------------------------------------------------------
// إنشاء مصفوفة بطول 4 مع قيم عشوائية
for (let i = 0; i < x; i++) {
      otpSecretCode.push(Math.floor(Math.random() * 10)); // استخدام 10 إذا كنت تريد أرقام بين 0 و 9
}
console.log('Initial otpSecretCode:', otpSecretCode);
//---------------------------------------------------------------------------------------

inputNumbers.forEach((input, index) => {
    input.addEventListener('input', () => {
        input.value = input.value.slice(0, 1);  // يسمح بإدخال رقم واحد فقط

        // إذا كانت القيمة فارغة، نقوم بإزالة العنصر من المصفوفة
        if (input.value === "") {
            enteredValues.splice(index, 1);  // إزالة العنصر الفارغ
            checkOtp()
        } else {
          
                        enteredValues[index] = parseInt(input.value, 10); // تحويل القيمة إلى عدد صحيح

        }

        // التحقق من أن المصفوفة تحتوي على 4 قيم غير فارغة
        if (enteredValues.filter(value => value !== '').length === 4) {
            checkOtp()
            console.log('All 4 values entered:', enteredValues);
            return;  // التوقف عن إضافة المزيد من القيم
        }

        // نقل التركيز إلى الحقل التالي إذا كانت القيمة الحالية تحتوي على رقم
        if (input.value.length === 1 && index < inputNumbers.length - 1) {
            inputNumbers[index + 1].focus();
        }

        console.log(enteredValues); // طباعة المصفوفة المحدثة
       
    });
});

//is valid or not
function checkOtp() {
    let isValid = true; // متغير لتحديد ما إذا كانت القيم المدخلة صحيحة

    for (let i = 0; i < otpSecretCode.length; i++) {
        if (otpSecretCode[i] !== enteredValues[i]) {
            isValid = false; // إذا كان هناك اختلاف، نجعلها غير صحيحة
            otpMsg.style.background = 'red';
            otpMsg.innerHTML = "Invalid Otp";
            console.log('invalid Otp');
            break;
        }
    }

    // إذا كانت جميع القيم صحيحة
    if (isValid) {
        otpMsg.style.background = 'green';
        otpMsg.innerHTML = "Success Otp";
        console.log('done');
    }
}