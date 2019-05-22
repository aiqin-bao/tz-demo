import React, { PureComponent } from 'react'
import './test.scss'

export default class Test extends PureComponent {

	state = {

		test: '测试多个文件～～'
	}

	render() {
		return <div className="box">
			{this.state.test}
		</div>
	}
}