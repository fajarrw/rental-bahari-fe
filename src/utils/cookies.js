import Cookies from 'js-cookie';

export default function getToken() {
    return Cookies.get('token') || null;
}