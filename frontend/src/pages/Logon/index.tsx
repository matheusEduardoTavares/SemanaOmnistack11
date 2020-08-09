import React from 'react'

import './styles.css'

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

import { FiLogIn } from 'react-icons/fi'

import { Link } from 'react-router-dom'

export default function Logon(){
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />

                <form>
                    <h1>Faça seu Logon</h1>

                    <input placeholder="Sua ID" />

                    <button className="button">Entrar</button>

                    <Link to="/register">
                        <FiLogIn size={16} color="red" />
                        Não possuo cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="heroes" />
        </div>
    )
}