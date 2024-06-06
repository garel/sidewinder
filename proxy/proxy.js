import Koa from 'koa';
import Router from '@koa/router';
import axios from "axios";

const app = new Koa();
const router = new Router();

router.get('/forward', async (ctx, next) => {
    try {
        const response = await axios.get('http://main:3000', {
            headers: {
                'x-forwared': 'yeeeehaaaaaa'
            }
        })
        ctx.body = response.data;
    }
    catch (error) {
        console.log(error)
    }
});
router.get('/proxy', async (ctx, next) => {
    ctx.body = ctx.request;
});
app.use(router.routes());

// app.use(async ctx => {
//     try {
//         const response = await axios.get('http://main:3000', {
//             headers: {
//                 'x-forwared': 'yeeeehaaaaaa'
//             }
//         })
//         ctx.body = response.data;
//     }
//     catch (error) {
//         console.log(error)
//     }
// });

app.listen(3001);