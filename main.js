(function () {
	const MAX_DELAY = 60;	// 切课时的最大延迟，单位：秒

	let sleep = (time) => {
	    return new Promise((resolve, reject) => {
	        setTimeout(() => {
	            resolve();
	        }, time);
	    })
	};

	let start = async function () {
		console.log('智慧树助手已启动');
		while (1) {
			console.log('正在检查');
			let delay = Math.floor(Math.random() * MAX_DELAY * 1000) + 1000;

			if ($('.popbtn_cancel')[0]) {
				console.log('发现弹题，将在' + delay / 1000 + ' 秒后点击关闭');
				await sleep(delay);
				$('.popbtn_cancel').click();
			}

			if ($('.current_play').find('.progressbar').width() == $('.current_play').find('.progressbar_box').width()) {
				console.log('本节完成，' + delay / 1000 + ' 秒后将切到下一课');
				await sleep(delay);
				$('.current_play').nextAll('.video')[0].click();
			}

			await sleep(1000);
		}
	}

	start();
})();