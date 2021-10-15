import React from 'react'
import { Button, Container } from 'react-bootstrap'
import Styles from '../styles/components/Custom.module.scss'
import Image from 'next/image'

const Custom = () => {
    return (
        <Container fluid className={Styles.container}>
            <div className={Styles.wrapper}>
                <div className={Styles.left}>
                    <h2 className={Styles.title}>Join our community</h2>
                    <div className={Styles.subtitle}>Unlock your true potential</div>
                    <div className={Styles.description}>Lorem Ipsum content set et tu Lorem Ipsum content set et tu Lorem Ipsum content set et tu Lorem Ipsum content set et tu Lorem Ipsum content set et tu tu Lorem Ipsum content set et tu Lorem Ipsum content set et tu </div>
                    <Button className={Styles.btn}>Register Now for early access</Button>
                </div>
                <div className={Styles.right}>
                    <Image src={'/images/boy.svg'} className={Styles.image} width={399} height={403} objectFit="contain" />
                    </div>
            </div>
        </Container>
    )
}

export default Custom
