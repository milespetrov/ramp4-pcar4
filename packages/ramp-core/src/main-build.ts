// this file is used when running `rush build`
// the default export is exposed as window.RAMP by the library build itself
// `initRAMP` function call is attached during the library build and executed automatically as well.
import api from '@/api';

import '@/styles/main.css';

export default api;
