import React, { Component } from 'react'
import { Button, ButtonToolbar, Modal } from 'react-bootstrap'
import { browserHistory } from 'react-router'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {show: true}
    this.hideModal = this.hideModal.bind(this)
  }

  hideModal() {
    this.setState({show: false})
    const { userId } = this.props
    browserHistory.push('/user/' + userId + '/team/')
  }

  render() {
    return (
      <div>
        <Modal show={this.state.show} onHide={this.hideModal} bsSize="large" aria-labelledby="contained-modal-title-lg">
          <Modal.Header closeButton>
            <Modal.Title className='center' id="contained-modal-title-lg"><p className='text-primary'>Create a New Team!</p></Modal.Title>
          </Modal.Header>
          <Modal.Body>
          </Modal.Body>
          <Modal.Footer>
            <Button className='button btn btn-danger' id='closeModal' onClick={this.hideModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
