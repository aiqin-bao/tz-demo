import React, { PureComponent } from 'react'


export default class TestDemo extends PureComponent {

	state = {

		test: '测试npm'
	}

	render() {
		return <> {this.state.test}</>
	}
}