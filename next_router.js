import Router from 'next/router'

Router.events.on('routeChangeStart', (e)=>{
    console.log('routeChangeStart', e)
})

// Router.events.on('beforeHistoryChange', (e)=>{
//     console.log('beforeHistoryChange', e)
// })
// Router.events.on('routeChangeComplete', (e)=>{
//     console.log('routeChangeComplete', e)
// })
// Router.events.on('routeChangeError', (e)=>{
//     console.log('routeChangeError', e)
// })

export default Router