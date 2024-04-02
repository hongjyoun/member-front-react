import { Button, Modal } from 'antd';
import React from 'react';
import { useModal } from '@/plugins/modal/useModal';


const HelloModal = ({ name, resolve, reject }) => {
  const handleOk = () => resolve('Bye!')
  const handleCancel = () => reject('Go away!')
  return (
    <Modal title="Basic Modal" open={true} onOk={handleOk} onCancel={handleCancel}>
      <p>Hello, {name} :)</p>
    </Modal>
  )
}


const TextAsyncAwaitModal = () => {
  const modal = useModal()
  const openModal = async () => {
    const res = await modal.push('Modal1', HelloModal, { name: 'hong'})
    alert('See ya!')
  }

  return (
    <>
      <Button type='primary' onClick={openModal}>모달을 띄워보자</Button>
    </>
  )
}

export default TextAsyncAwaitModal;