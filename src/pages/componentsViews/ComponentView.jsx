import './ComponentView.css'

import EditNavbar from "../../components/EditNavbar/EditNavbar";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

export default function ComponentView({component}) {
    
    return (
        <>
            <Header />
            <div style={{display: 'flex', width: '100vw',flexGrow: "1"}}>
                <Navbar />

                <main className="component-view">
                    <section className='component-center'>

                        <div className='component'>
                            {component}
                        </div>

                    </section>
                </main>
                <EditNavbar />
            </div>
        </>
    )
}