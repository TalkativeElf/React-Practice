import React, { useCallback, useRef, useEffect } from "react";
import styled from "styled-components";
import './modal.css';
import { Col, Container, Row, Nav, CloseButton, } from "react-bootstrap";

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ModalWrapper = styled.div`
    width: 550px;
    height: auto;
    box-shadow: 0 5px 16px rgba(0,0,0, 0.2);
    background: #fff;
    display: flex;
    grid-template-columns: auto auto auto auto;
    z-index: 10;
    border-radius: 8px;
    padding: 8px;
`;
export const Modal = ({ showModal, setShowModal }) => {
    const modalRef = useRef();

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false)
        }
    };

    const keyPress = useCallback(e => {
        if (e.key === 'Escape' && showModal) {
            setShowModal(false)
        }
    }, [setShowModal, showModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress])
    return (
        <>
            {showModal ? (
                <Background ref={modalRef} onClick={closeModal}>
                    <ModalWrapper showModal={showModal}>
                        <Container>
                            <Row>
                                <Col md={11}>
                                    <h4>ROI Calculator</h4>

                                </Col>
                                <Col md={1}>
                                    <CloseButton aria-label='close modal'
                                        onClick={() => setShowModal(prev => !prev)} />
                                </Col>
                            </Row>
                            <Row className="justify-content-end align-items-center toggle-text">
                                Cake
                                <Col md={1}>
                                    <label className="switch2">
                                        <input type="checkbox" checked />
                                        <span className="slider2 round2"></span>
                                    </label>
                                </Col>
                                USD
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <div className="cal-area">
                                        <h4> 0.000 USD</h4>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <div className="div1">
                                        <p>$1000</p>
                                    </div>
                                </Col>
                                <Col md={2}>
                                    <div className="div1">
                                        <p>$100</p>
                                    </div>
                                </Col>
                            </Row>
                            <h5 className="heading">Timeframe</h5>
                            <Row>
                                <Col md={12}>
                                    <Nav variant="pills" defaultActiveKey="/" className="pills">
                                        <Nav.Item className="pills-inner">
                                            <Nav.Link href="/">1 Day</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item >
                                            <Nav.Link eventKey="link-1">7 Days</Nav.Link>
                                        </Nav.Item >
                                        <Nav.Item >
                                            <Nav.Link eventKey="link-2">30 Days</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item >
                                            <Nav.Link eventKey="link-3">1 Year</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item >
                                            <Nav.Link eventKey="link-4">5 Years</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                            </Row>
                            <Row className="align-items-center">
                                <Col md={10}>
                                    <h5 className="heading">Enable Accelerated APY</h5>
                                </Col>
                                <Col md={2}>
                                    <label className="switch">
                                        <input type="checkbox" checked />
                                        <span className="slider round"></span>
                                    </label>

                                </Col>
                            </Row>
                            <Row>
                                <p className="extra-text text-muted">Select Tier</p>
                                <Col md={12}>
                                    <Nav variant="pills" defaultActiveKey="/" className="pills">
                                        <Nav.Item className="pills-inner">
                                            <Nav.Link href="/">Tier 1</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item >
                                            <Nav.Link eventKey="link-1">Tier 2</Nav.Link>
                                        </Nav.Item >
                                        <Nav.Item >
                                            <Nav.Link eventKey="link-2">Tier 3</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item >
                                            <Nav.Link eventKey="link-3">Tier 4</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item >
                                            <Nav.Link eventKey="link-4">Tier 5</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} className="text-wrapper">
                                    <p>ROI at Current Rates</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <div className="cal-area">
                                        <h4> 0.000 USD</h4>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} className="text-wrapper2">
                                    <p>~0.000 CAKE + 0.000000 DON</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} className="text-center align-items-center">
                                    <p className="icon-text"> More Info <i class="bi bi-chevron-up"></i></p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} className="list-group">
                                    <p>APY</p>
                                    <ul>
                                        <li>Calculated based on current rates</li>
                                        <li>All figures are estimated provided for your convenience only, and by no means represent guaranteed returns</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                    </ModalWrapper>
                </Background>
            ) : null
            }
        </>
    )
}