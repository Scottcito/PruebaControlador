import { useState } from 'react';
import axios from 'axios';

const useTraductor = () => {
    const [texto, setTexto] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const url1 = 'https://apiprueba-production-f996.up.railway.app/api/info';

    const traducirTexto = async (texto) => {
        try {
            const texto2 = texto.trim();
            const res = await axios.post(url1, { texto: texto2 });
            setData(res.data);
            return res.data;
        } catch (err) {
            setError(err);
            console.error(err);
        }
    };

    return {
        texto,
        setTexto,
        data,
        error,
        traducirTexto,
    };
};

export default useTraductor;
