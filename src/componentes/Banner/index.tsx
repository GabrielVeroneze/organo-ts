import React from 'react'
import './Banner.css'

interface BannerProps {
    enderecoImagens: string[]
}

const Banner = ({ enderecoImagens } : BannerProps) => {
    return (
        <header
            className='banner'
            style={{
                backgroundImage: `
                    url(${enderecoImagens[0]}),
                    url(${enderecoImagens[1]})
                `
            }}
        >
            <div className='banner__caixa'>
                <img className='banner__logo' src="/imagens/logo.png" alt="Logo do Organo" />
                <h1 className='banner__titulo'>
                    Pessoas e times <span className='banner__titulo--inferior'>organizados em um só lugar!</span>
                </h1>
            </div>
        </header>
    )
}

export default Banner