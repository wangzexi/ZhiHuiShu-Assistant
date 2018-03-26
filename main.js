
(function () {
	const MAX_DELAY = 60 // 切课时的最大延迟，单位：秒

	const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time))

	const start = async function () {
		console.log('智慧树助手已启动')

		while (true) {
			console.log('正在检查')
			const delay = Math.floor(Math.random() * MAX_DELAY * 1000) + 1000

			if (!/1\.5/.test($('.speedBox').attr('style'))) {
				console.log('提升到1.5倍速')
				$('.speedTab15').click()
			}

			if (!/biaoqing_2/.test($('.definiBox').attr('style'))) {
				console.log('更改画质')
				$('.line1bq').click()
			}

			if ($('.volumeBox').find('.passVolume').width() != 0) {
				console.log('静音')
				$('.volumeIcon').click()
			}
			
			if ($('.playButton').length > 0) {
				console.log('点击播放')
				$('.playButton').click()
			}

			if ($('.popbtn_cancel')[0]) {
				console.log('发现弹题，将在' + delay / 1000 + ' 秒后点击关闭')
				await sleep(delay)
				$('.popbtn_cancel').click()
			}

			if ($('.current_play').find('.progressbar').width() == $('.current_play').find('.progressbar_box').width()) {
				console.log('本节完成，' + delay / 1000 + ' 秒后将切到下一课')
				await sleep(delay)
				$('.current_play').nextAll('.video')[0].click()
			}

			await sleep(1000)
		}
	}

	start()
}())
