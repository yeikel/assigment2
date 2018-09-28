import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            filterBox: '',
        }
    }

    filterUpdate() {
        let value = this.filterBox.value;
        this.props.filterUpdate(value);
    }

    render() {
        return (
            <form>
                <input value={this.value} onChange={(e) => {
                    this.filterUpdate(e)
                }} ref={(input) => this.filterBox = input} type="text" placeholder="Type to Filter"/>
            </form>
        );
    }
}

export default Search;
