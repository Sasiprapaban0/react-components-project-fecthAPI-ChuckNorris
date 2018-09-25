import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { SearchForm } from '../components'
class SearchFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchFirstName: '',
            searchLastName: ''
        };
    }

    onSearch = (keyword) => {
        const { history } = this.props
        const firstName = keyword.searchFirstName
        const lastName = keyword.searchLastName
        history.push(`/jokes/Search/firstName=${firstName}&lastName=${lastName}`)
    }

    render() {
        return (
            <div>
                <SearchForm
                    {...this.state}
                    onSubmit={this.onSearch} />

            </div >
        )
    }
}
export default withRouter(SearchFormContainer)