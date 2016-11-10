(function() {
	// 弹题检查
	setInterval(function() {
		// 点击关闭按钮
		$('.popbtn_cancel').click();
	}, 1000);

	// 切课检查
	var MAX_DELAY = 20;	// 切课时的最大延迟，单位：秒
	var timer;

	function check() {
		// 如果进度条已满，则随机等待 1~20 秒后切换到下一课
		if($('.current_play').find('.progressbar').width() == $('.current_play').find('.progressbar_box').width()) {
			clearInterval(timer);
			var delay = Math.floor(Math.random() * MAX_DELAY * 1000) + 1000;
			console.log('本节完成，' + delay / 1000 + ' 秒后将切到下一课');
			setTimeout(function () {
				$('.current_play').nextAll('.lesson')[0].click();
				startCheck();
			}, delay);
		}
	}

	function startCheck() {
		timer = setInterval(check, 1000);
	}

	startCheck();

	return '智慧树助手已启动';
})();
