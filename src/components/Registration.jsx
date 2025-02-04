import React, { useState } from "react";
import { Link, useNavigate} from 'react-router-dom';
import './styles/home.css';
import phonePNG from '../assets/img/phone.png';
import passwdPNG from '../assets/img/passwd.png';
import namePNG from '../assets/img/name.png';
import { registration } from "../action/user";
import { useDispatch } from 'react-redux'; // Импортируем useDispatch

const Registration = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const navigate  = useNavigate(); // Инициализируем useHistory
    
    const dispatch = useDispatch(); // Получаем dispatch

    const handleRegistration = async () => {

        const registrationSuccess = await dispatch(registration(name, surname, phone, password, isChecked));
        if (registrationSuccess) {
            navigate("/main");
        }
    };

    return (
      <div className="auth">
          
      <div className="form">
        <h1 className="h1-auth">Регистрация</h1>
        <div className="input__div"><img src={namePNG} alt="person" className="phonePNG"/>
          <input value={name} onChange={(event) => setName(event.target.value)} setValue={setName} type="text" className="input" placeholder="Имя"/>
        </div>
        <div className="input__div"><img src={namePNG} alt="person" className="phonePNG"/>
          <input value={surname} onChange={(event) => setSurname(event.target.value)} setValue={setSurname} type="text" className="input" placeholder="Фамилия"/>
        </div>
        <div className="input__div"><img src={phonePNG} alt="Phone" className="phonePNG"/>
          <input value={phone} onChange={(event) => setPhone(event.target.value)} setValue={setPhone} type="number" className="input" placeholder="Номер телефона"/>
        </div>
        <div className="input__div"><img src={passwdPNG} alt="Password" className="phonePNG"/>
          <input value={password} onChange={(event) => setPassword(event.target.value)} setValue={setPassword} type="password" className="input" placeholder="Придумайте пароль"/>
        </div>
        {/* <div className="input__div"><img src={passwdPNG} alt="Password" className="phonePNG"/>
          <input type="password" className="input" placeholder="Повторите пароль"/>
        </div> */}
        <div className="checkbox__div">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(event) => setIsChecked(event.target.checked)}
                />
                <span className="checkbox__text">
                Согласен на обработку персональных данных и с 
                            <a href={'https://docs.google.com/document/d/1UR4-FXonBNFzMY6IRM5F2SZUfz4leZVkMEJW_tmD2Lg/edit?usp=sharing'} target="_blank" rel="noopener noreferrer" className="terms-link">
                                условиями
                            </a>
                        
                </span>
            </div>

        <button className="buttonLogin" onClick={handleRegistration}>Зарегестрироваться</button>
        <Link to="/login" className="link__auth">Войти</Link>
      </div>
      
    </div>

    )
}

export default Registration;