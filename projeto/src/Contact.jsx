import { useState } from 'react';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

import Menu from './components/Menu';
import style from "./Contact.module.css"


export const Contact = () => {
    const geoData = ({lat: -25.4355074, lng: -49.3550756})

    const defaultPhoneNumber = '5541999999999'

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleWhatsAppMessage = () => {
        const {name, email, message} = formData;
        
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
        Nome:%20${name}%0D%0A
        Email:%20${email}%0D%0A
        Mensagem:%20${message}`;

        window.open(whatsappUrl, '_blank');
    }

    return(
        <div className={style['wrap-all-contact']}>
            <Menu/>
            <h1 className={style.wrapH1}>Contato</h1>
            <br />
            <div className={style.wrapTwoDivs}>
                <div className={style.wrapMap}>
                    <h2>Map</h2>
                    <MapContainer center={[geoData.lat, geoData.lng]} zoom={14} scrollWheelZoom={false} style={{width: "100%", height: "100%"}}>
                        <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    {geoData.lat && geoData.lng &&
                        <Marker position={[geoData.lat, geoData.lng]}>
                        <Popup>
                        <a target='_blank' href={`https://www.google.com.br/maps/place/Est%C3%A2ncia+Pizzaria+Bar/@${geoData.lat},${geoData.lng},18.75z/data=!4m6!3m5!1s0x94dce1f9fd3a3615:0x6fb6ccacd44fc3dc!8m2!3d-25.4351788!4d-49.3554199!16s%2Fg%2F11bv1sqw67?entry=ttu`}>Google maps view</a>
                        </Popup>
                        </Marker>}
                    </MapContainer>
                </div>
                <div>
                    <h2>Zap</h2>
                    <div className={style.inputsDiv}>
                        <div className={style.wrapLabelInput}>
                            <label htmlFor="name" className={style.labels}>Nome</label>
                            <input className={style.inputS1} type="text" id='name' name='name' value={formData.name} onChange={handleChange} required/>
                        </div>
                        <div className={style.wrapLabelInput}>
                            <label htmlFor="email" className={style.labels}>Email</label>
                            <input className={style.inputS1} type="email" id='email' name='email' value={formData.email} onChange={handleChange} required/>
                        </div>
                        <div className={style.wrapLabelInput}>
                            <label htmlFor="message" className={style.labels}>Mensagem</label>
                            <textarea className={style.txtArea} id='message' name='message' value={formData.message} onChange={handleChange} required></textarea>
                        </div>
                        <button className={style.btnTec} onClick={handleWhatsAppMessage}>Enviar mensagem</button>
                    </div>
                </div>
            </div>
        </div>
    )
}