const

function () {
    return class extends Component {
        constructor(props) {
            super(props);
        }
 
        render() {
            return < {...this.props} />
        }
    }
}


