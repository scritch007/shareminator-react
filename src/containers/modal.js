import React from 'react'
import { connect } from 'react-redux'
import LoginPopUp from '../components/LoginPopUp'


const MODAL_COMPONENTS = {
  'LOGIN': LoginPopUp,
}

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return <span /> // after React v15 you can return null here
  }
  const SpecificModal = MODAL_COMPONENTS[modalType]
  return <SpecificModal {...modalProps} />
}

export default connect(
  state => state.modal
)(ModalRoot)