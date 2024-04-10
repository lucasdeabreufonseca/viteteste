import { useState } from 'react'
import Card from './components/Card'
import Menu from './components/Menu'
import style from './Tecnologies.module.css'

import reactImg from './assets/svg/react.svg'
import htmlImg from './assets/img/HTML.png'
import cssImg from './assets/img/CSS.png'
import javascriptImg from './assets/img/JS.png'

export const Tecnologies = () => {
    const [show, setShow] = useState('all');

    return(
        <>
            <Menu/>
            <section className={style['wrap-tec']}>
                <h1>TEC´s</h1>
               <div className={style['wrap-btns-tec']}>
                <button className={style.btnTec} onClick={() => setShow('html')}>HTML</button>
                <button className={style.btnTec} onClick={() => setShow('css')}>CSS</button>
                <button className={style.btnTec} onClick={() => setShow('js')}>JAVASCRIPT</button>
                <button className={style.btnTec} onClick={() => setShow('react')}>REACT</button>
                <button className={style.btnTec} onClick={() => setShow('all')}>All tec´s</button>
               </div>
                <div className={style['wrap-cards-tec']}>
                   {show === 'html' && <Card title='HTML' imgSrc={htmlImg} desc='HTML'/>}
                   {show === 'css' && <Card title='CSS' imgSrc={cssImg} desc='CSS'/>}
                   {show === 'js' && <Card title='JAVASCRIPT' imgSrc={javascriptImg} desc='JAVASCRIPT'/>}
                   {show === 'react' && <Card title='REACT JS' imgSrc={reactImg} desc='REACT'/>}
                   {show === 'all' && 
                   <>
                   <Card title='HTML' imgSrc={htmlImg} desc='HTML'/> 
                   <Card title='CSS' imgSrc={cssImg} desc='CSS'/>
                   <Card title='JAVASCRIPT' imgSrc={javascriptImg} desc='JAVASCRIPT'/>
                   <Card title='REACT JS' imgSrc={reactImg} desc='REACT'/>
                   </>}
                </div>
            </section>
        </>
    )
}