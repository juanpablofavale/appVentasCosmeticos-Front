import React from 'react'
import Header from '../components/header'

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <footer></footer>
        </>
    )
}
