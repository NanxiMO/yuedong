// 获取当前日期
const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

// 获取当前日期是星期几 (0: 周日, 1: 周一, ..., 6: 周六)
const currentWeekday = today.getDay();
const mondayOffset = currentWeekday === 0 ? -6 : 1 - currentWeekday; // 如果是周日，调整为上周一
const weekStartDate = new Date(currentYear, currentMonth, currentDay + mondayOffset); // 本周周一的日期

// 动态生成日期，从周一到周日
const datesContainer = document.getElementById('dates');
for (let i = 0; i < 7; i++) {
  const date = new Date(weekStartDate); // 从周一开始
  date.setDate(weekStartDate.getDate() + i); // 依次增加日期

  const dayDiv = document.createElement('div');
  dayDiv.className = 'day';
  if (date.getDate() === currentDay && date.getMonth() === currentMonth) {
    dayDiv.classList.add('today'); // 标记今天
    dayDiv.textContent = '今'; // 今天显示“今”
  } else {
    dayDiv.textContent = date.getDate(); // 其他日期显示数字
  }
  datesContainer.appendChild(dayDiv);
}

// 计算BMI
document.addEventListener('DOMContentLoaded', function () {
      const weightInput = document.getElementById('weight');
      const heightInput = document.getElementById('height');
      const bmiElement = document.getElementById('bmi-value');

      function calculateBMI() {
          const weight = parseFloat(weightInput.value); // 获取体重
          const height = parseFloat(heightInput.value) / 100; // 获取身高并转换为米

          if (weight && height) {
              const bmi = (weight / (height * height)).toFixed(1); // 计算 BMI，保留一位小数
              bmiElement.textContent = bmi; // 更新 BMI 到页面
          } else {
              bmiElement.textContent = '--'; // 如果数据无效，显示占位符
          }
      }

      // 监听输入框的变化事件
      weightInput.addEventListener('input', calculateBMI);
      heightInput.addEventListener('input', calculateBMI);

      // 初始化计算 BMI
      calculateBMI();
  });