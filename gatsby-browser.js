import './node_modules/bootstrap/scss/bootstrap-grid.scss';
import './src/styles/syntax.scss';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

const onServiceWorkerUpdateReady = () => window.location.reload(true);
export default onServiceWorkerUpdateReady;
