import Koa from 'koa';
import Router from '@koa/router';
import axios from "axios";

const app = new Koa();
const router = new Router();
router.get('/', async (ctx, next) => {
    ctx.body = 'Hello World ' + ctx.header['x-forwared'];
});
router.get('/out', async (ctx, next) => {
    try {
        const response = await axios.get('http://index.hu/proxy');
        ctx.body = response.data;
    }
    catch (error) {
        console.log(error)
    }
});

app.use(router.routes());

app.listen(3000);