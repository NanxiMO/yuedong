document.addEventListener('DOMContentLoaded', function () {
    var modeSwitch = document.querySelector('.mode-switch');

    modeSwitch.addEventListener('click', function () {
    document.documentElement.classList.toggle('dark');
      modeSwitch.classList.toggle('active');
    });
    
    var listView = document.querySelector('.list-view');
    var gridView = document.querySelector('.grid-view');
    var projectsList = document.querySelector('.project-boxes');
    
    listView.addEventListener('click', function () {
      gridView.classList.remove('active');
      listView.classList.add('active');
      projectsList.classList.remove('jsGridView');
      projectsList.classList.add('jsListView');
    });
    
    gridView.addEventListener('click', function () {
      gridView.classList.add('active');
      listView.classList.remove('active');
      projectsList.classList.remove('jsListView');
      projectsList.classList.add('jsGridView');
    });
    
    document.querySelector('.messages-btn').addEventListener('click', function () {
      document.querySelector('.messages-section').classList.add('show');
    });
    
    

    document.querySelector('.messages-close').addEventListener('click', function() {
      document.querySelector('.messages-section').classList.remove('show');
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    // 获取当前日期并格式化
    function updateDate() {
        const today = new Date();
        const month = today.getMonth() + 1; // 月份从 0 开始，需要加 1
        const day = today.getDate();
        const formattedDate = `${month}月${day}日`;

        // 更新页面上的日期
        const dateElement = document.querySelector('.time');
        if (dateElement) {
            dateElement.textContent = formattedDate;
        }
    }

    // 调用函数更新日期
    updateDate();
  });

  