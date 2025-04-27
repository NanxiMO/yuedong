document.addEventListener('DOMContentLoaded', function() {
    function generateCalendar() {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth(); // 0 - 11, where 0 = January
        const date = today.getDate();
        
        const daysInMonth = new Date(year, month + 1, 0).getDate(); // 当月的总天数
        const firstDayOfMonth = new Date(year, month, 1).getDay(); // 当月1号是星期几
        const daysInPrevMonth = new Date(year, month, 0).getDate(); // 上月的总天数
        
        const calendarBody = document.getElementById('calendar-body');

        // 更新header
        document.getElementById('calendar-day').textContent = date;
        document.getElementById('calendar-month').textContent = `${year}年${month + 1}月`;

        let calendarHTML = '<tr>';
        let day = 1;
        let i = (firstDayOfMonth === 0) ? 6 : firstDayOfMonth - 1; // 调整为从星期一开始

        // 填充上个月的最后几天
        for (let j = i; j > 0; j--) {
            calendarHTML += `<td class="prev-month">${daysInPrevMonth - j + 1}</td>`;
        }

        // 填充当前月的天数
        while (day <= daysInMonth) {
            if (i > 6) {
                calendarHTML += '</tr><tr>';
                i = 0;
            }
            const isToday = (day === date) ? 'current-day' : '';
            calendarHTML += `
                <td class="${isToday}" data-day="${day}">
                    ${day}
                    <div class="dot" style="display: none;"></div> <!-- 红色圆点默认隐藏 -->
                </td>`;
            day++;
            i++;
        }

        // 填充下个月的前几天
        let nextMonthDay = 1;
        while (i <= 6) {
            calendarHTML += `<td class="next-month">${nextMonthDay}</td>`;
            nextMonthDay++;
            i++;
        }

        calendarHTML += '</tr>';
        calendarBody.innerHTML = calendarHTML;

        // 为每个日期单元格绑定点击事件
        const days = calendarBody.querySelectorAll('td[data-day]');
        days.forEach(day => {
            day.addEventListener('click', function() {
                const selectedDay = this.getAttribute('data-day');
                addPlanToDay(selectedDay, month + 1, year);

                // 显示红色圆点
                const dot = this.querySelector('.dot');
                if (dot) {
                    dot.style.display = 'block';
                }
            });
        });
    }

    function addPlanToDay(day, month, year) {
        const planContainer = document.querySelector('.right-content .surveys');
        const newPlan = document.createElement('li');
        newPlan.className = 'survey-item';
        newPlan.innerHTML = `
            <span class="survey-name">健身计划 - ${year}年${month}月${day}日</span>
            <span class="survey-country grid-only">K1初学</span>
            <div class="pull-right">
                <span class="survey-end-date">计划已添加</span>
            </div>
        `;
        planContainer.appendChild(newPlan);
        alert(`已为 ${year}年${month}月${day}日 添加健身计划！`);
    }

    generateCalendar();
});