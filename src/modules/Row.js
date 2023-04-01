import { useState,useEffect } from "react";

export default function Row(props) {
    const [temp, setTemp] = useState('---')
    let city = props.city;
    let isUnitCelsius = props.isUnitCelsius
    
    function convert(isUnitCelsius, temp) {
        if (isUnitCelsius) {
            return (Math.round ((((temp - 32) * 5 / 9)*100)))/100 + " ºC"
        }
        return temp + " ºF"
    }
    
    useEffect(() => {
        fetch("https://api.openweathermap.org/data/2.5/weather?lat="+city.latitude+"&lon="+city.longitude+"&appid=f18990c88bc8b4ee6e6437fa90c1a562&units=imperial")
        .then(resp => resp.json())
        .then(data => {
            setTemp(data.main.temp)
        });
    }, [city.latitude, city.longitude]);
    

    return (
        <tr>
            <th scope="row">{props.sno}</th>
            <td>{city.name}</td>
            <td>{city.latitude}</td>
            <td>{city.longitude}</td>
            <td>{convert(isUnitCelsius, temp)}</td>
            <td>
                <button className="btn btn-primary btn-sm edit me-1" onClick={props.onEdit}><i className="far fa-edit"></i></button>
                <button className="btn btn-danger btn-sm trash" onClick={props.onDelete}><i className="fa-sharp fa-solid fa-trash"></i></button>
            </td>
        </tr>
    );
}