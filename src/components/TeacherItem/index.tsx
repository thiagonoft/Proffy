import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return(
        <article className="teacher-item">
                <header>
                    <img src="https://scontent.fsdu9-1.fna.fbcdn.net/v/t1.0-9/41948665_2076785605699167_6059245414865960960_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=mjjUQOBf85oAX_WKkHM&_nc_ht=scontent.fsdu9-1.fna&oh=4db36adf882b55602d6d45da647acc26&oe=5F511EF0" alt="Thiago"/>
                    <div>
                        <strong>Thiago Lemos</strong>
                        <span>Química</span>
                    </div>
                </header>

                <p>
                    Percebemos, cada vez mais, que a revolução dos costumes deve passar por modificações independentemente das condições financeiras e administrativas exigidas. No mundo atual, a complexidade dos estudos efetuados cumpre um papel essencial na formulação dos níveis de motivação departamental. 
                    <br /> <br />
                    O incentivo ao avanço tecnológico, assim como o comprometimento entre as equipes nos obriga à análise dos relacionamentos verticais entre as hierarquias.
                </p>

                <footer>
                    <p>
                        Preço/hora
                        <strong>R$ 80,00</strong>
                    </p>
                    <button type="button">
                        <img src={whatsappIcon} alt="Whatsapp"/>
                        Entrar em contato
                    </button>
                </footer>

            </article>
    )
}

export default TeacherItem