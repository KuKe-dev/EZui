import { useState } from "react";

import './ComponentView.css'

import EditNavbar from "../../components/EditNavbar/EditNavbar.jsx";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

import { componentConfig } from './components/componentConfig.js';

export default function ComponentView({component: Component}) {
    
  // Obtener el nombre del componente (ej: "Button" o "Card")
    const componentName = Component.name;

  // Cargar configuración inicial desde componentConfig
    const initialProps = Object.entries(componentConfig[componentName]).reduce(
    (acc, [prop, config]) => ({ ...acc, [prop]: config.default }),
    {}
    );

  const [props, setProps] = useState(initialProps);

  /* console.log(props); */

  // Función para actualizar cualquier prop
  const handlePropChange = (propName, value) => {
    setProps(prev => ({ ...prev, [propName]: value }));
  };

return (
    <>
        <Header />
        <div style={{display: 'flex', width: '100vw',flexGrow: "1"}}>
            <Navbar />

            <main className="component-view">
                <section className='component-center'>

                    <div className='component'>
                        <Component {...props} />
                    </div>

                </section>
            </main>
            <EditNavbar
                componentName={componentName}
                props={props}
                onPropChange={handlePropChange}
                config={componentConfig[componentName]}
            />
        </div>
    </>
)
}