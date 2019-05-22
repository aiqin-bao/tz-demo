import React, { PureComponent } from 'react'
import  {TestDemo} from './export.js'
import { render } from 'react-dom'

const App = () => {
	return <TestDemo></TestDemo>
	
}


render(<App /> , document.getElementById('app'))