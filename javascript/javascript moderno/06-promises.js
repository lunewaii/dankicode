// function teste(){
//     return new Promise(function(resolve, reject){

//         const erro = false;
//         if(erro){
//             reject('erro...')
//         }else{
//             resolve('a promise foi resolvida com sucesso');
//         }

//     })
// }

// teste().then(function(res){
//     alert(res);
// }).catch(function(err){
//     alert(err);
// })

//função assincrona = forma mais elegante de lidar com a promise, da pra usar await

function testes(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            const erro = false;
            if(erro){
                reject('num vai dar nao');
            }else{
                resolve('a promise foi resolvida com sucesso! ihuuu');
            }
        }, 2000);
    })
}

async function testes2(){
    await testes().then(function(res){ //o then faz ele executar o que ta la em cima no res
        alert(res);
    });
    alert('oia, deu certo');
}

testes2();