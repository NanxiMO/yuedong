document.addEventListener('DOMContentLoaded', function () {
    function updateDate() {
        const now = new Date();
        const month = now.getMonth() + 1; // 月份从 0 开始，需要加 1
        const day = now.getDate(); // 获取当前日期

        // 更新页面上的日期
        const monthElement = document.getElementById('event-month');
        const dayElement = document.getElementById('event-day');

        if (monthElement && dayElement) {
            monthElement.textContent = `${month}月`;
            dayElement.textContent = day < 10 ? `0${day}` : day; // 补零处理
        }
    }

    // 初始化日期
    updateDate();

    // 每天更新一次日期（设置为 1 小时检查一次）
    setInterval(updateDate, 3600000); // 3600000 毫秒 = 1 小时
});