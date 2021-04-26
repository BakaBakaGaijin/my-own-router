
import './styles/styles.css';
import Router from './Router';
import './babel';

const router = new Router({
    mode: 'hash',
    root: '/'
});

router
    .add(/about/, () => {
        alert('welcome in about page');
    })
    .add(/products\/(.*)\/specification\/(.*)/, (id, specification) => {
        alert(`products: ${id} specification: ${specification}`);
    })
    .add('', () => {
        console.log('Welcome in catch all controller');
    });