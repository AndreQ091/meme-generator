import React from 'react'
import './Footer.css'
import vk from '../../img/vk_icon-icons.com_66102.png'
import inst from '../../img/1491580635-yumminkysocialmedia26_83102.png'
import telegram from '../../img/telegram_logo_icon_147228.png'


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__left">
                <p className={'footer__author'}>Автор: <a href="https://vk.com/venv7" target="_blank" rel="noreferrer" title={'Андрей Долгов'}>AndreQ</a></p>
                <p className={'footer__copy'}>Copyright &copy;</p>
            </div>
            <div className="footer__right">
                <div className="footer__social">
                    <a href="https://vk.com/venv7" target='_blank' rel="noreferrer" title={'Vkontakte'}><img src={vk} alt=""/></a>
                    <a href="https://www.instagram.com/roosevelt0ff82/" rel="noreferrer" target='_blank' title={'Instagram'}><img src={inst}
                                                                                                                 alt=""/></a>
                    <a href="/" target='_blank' rel="noreferrer" title={'Тут ничего нет)'}><img src={telegram} alt=""/></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer