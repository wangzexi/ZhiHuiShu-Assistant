
(function () {
	const MAX_DELAY = 30 // 切课时的最大延迟，单位：秒

	const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time))

	SpeedFlag = 0
	VolumeFlag = 0

	const start = async function () {
		console.log('智慧树助手已启动')

		while (true) {
			console.log('正在检查')
			const delay = Math.floor(Math.random() * MAX_DELAY * 1000) + 1000

			// if (!/liuchang/.test($('.definiBox').attr('style'))) {
			// 	console.log('更改画质')
			// 	$('.line1bq').click()
			// }

			if (!/1\.5/.test($('.speedBox').attr('style')) && !SpeedFlag) {
				console.log('提升到1.5倍速')
				SpeedFlag = 1
				$('.speedTab15').click()
			}

			//静音处理，不需要可以注释此函数
			if ($('.volumeBox').find('.passVolume').width() != 0 && !VolumeFlag) {
				console.log('静音')
				VolumeFlag = 1
				$('.volumeIcon').click()
			}
			
			//弹题处理
			if ($('.popbtn_cancel')[0]) {
				console.log('发现弹题，将在' + delay / 1000 + ' 秒后点击关闭')
				await sleep(delay / 2)
				const iframe = document.getElementById('tmDialog_iframe').contentWindow
				iframe.document.querySelector('.answerOption label').click()
				await sleep(delay / 2)
				$('.popbtn_cancel').click()
				await sleep(2000)
			}

			//下一课处理
			if ($('.playButton').length > 0) {
				console.log('本节完成，' + delay / 1000 + ' 秒后将切到下一课')
				await sleep(delay)
				$('.current_play').nextAll('.video')[0].click()
				console.log('已经切换到下一课')
				console.log('点击播放')
				$('.playButton').click()
				await sleep(2000) //这个延时是为了保证能正确打开静音与倍速。可根据网络情况调整
				SpeedFlag = 0
				VolumeFlag = 0
			}

			await sleep(1000)
		}
	}

	start()
}())
