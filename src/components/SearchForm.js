import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchFirstName: '',
            searchLastName: '',
            modal: false
        };
    }
    static propTypes = {
        searchFirstName: PropTypes.string.isRequired,
        searchLastName: PropTypes.string.isRequired,
        onSubmit: PropTypes.func.isRequired
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onSubmit = event => {
        event.preventDefault()
        const { searchFirstName, searchLastName } = this.state
        if (searchFirstName === "" || searchLastName === "") {
            this.toggle()
        }
        else {
            this.props.onSubmit(this.state)
        }
    }
    onFieldChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }
    render() {
        const { searchFirstName, searchLastName } = this.state
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Warning message</ModalHeader>
                    <ModalBody>
                        Please input first name and last name for the search.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                <form className="form-inline">
                    <div className="form-group mb-2">
                        <label htmlFor='searchFirstName'>First Name: </label>
                        <input
                            type='text'
                            className='form-control'
                            id='searchFirstName'
                            name='searchFirstName'
                            value={searchFirstName}
                            onChange={this.onFieldChange}
                            placeholder='Enter first name' />{' '}
                    </div>
                    <div className="form-group mx-sm-2 mb-2">
                        <label htmlFor='searchLastName'>Last Name: </label>
                        <input
                            type='text'
                            className='form-control'
                            id='searchLastName'
                            name='searchLastName'
                            value={searchLastName}
                            onChange={this.onFieldChange}
                            placeholder='Enter last name' />{' '}
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary mb-1"
                        onClick={this.onSubmit}> Search  </button>
                </form>
                <hr />
            </div >
        )
    }
}
export default SearchForm