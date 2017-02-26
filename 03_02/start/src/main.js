var React = require('react');
var ReactDOM = require('react-dom');
require('./style.scss');
class Content extends React.Component {
    render () {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <br></br>
                <p>{this.props.content}</p>
            </div>
        );
    }
}

ReactDOM.render(<Content title="Practice Webpack with React and SCSS" content="This is use react and react-dom" />,
    document.getElementById('react-container')
    );