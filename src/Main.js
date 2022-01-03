import React, { useContext } from 'react'
import { Route, Router, Routes } from 'react-router'
import { Navbar } from '../components/Navbar'
import { ServiceContext } from '../context/ServiceContext'
import { Attorneys } from './Attorneys'
import { Contacts } from './Contacts'
import { Home } from './Home'
import { What_We_Do } from './What_We_Do'
import { Where_We_Work } from './Where_We_Work'
import { Who_We_Are } from './Who_We_Are'

export const Main = () => {
    const {search} = useContext(ServiceContext)
    return (
        <React.Fragment>
            <div className="container bg-white">
                <header>
                    <Navbar />
                </header>
                <main>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/who-we-are/attorneys' element={<Attorneys />} />
                        <Route exact path='/contact-us' element={<Contacts />} />
                        <Route exact path='/who-we-are' element={<Who_We_Are />} />
                        <Route exact path='/what-we-do' element={<What_We_Do s={ search }/>} />
                        <Route exact path='/where-we-work' element={<Where_We_Work />} />
                    </Routes>
                </main>

            </div>

        </React.Fragment>
    )
}