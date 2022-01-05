import styled from 'styled-components';
import { useState } from 'react';
import { Modal } from './component/Modal';
import { GlobalStyle } from './component/globalStyle';
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Button = styled.button`
  min-width: 100px;
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`
function App() {
  const [showModal, setShowModal] = useState(false)
  const openModal = () => {
    setShowModal(prev => !prev)
  }
  return (
    <>
      <Box>
        <Button onClick={openModal}>Open Me</Button>
        <Modal showModal={showModal} setShowModal=
          {setShowModal} />
        <GlobalStyle />
      </Box>
    </>
  );
}

export default App;





















