let p = new Promise((resolve,reject)=>{
    let a=1+1;
    if(a==2){
        resolve('ok')
    }else{
        reject('fail')
    }
})

p().then((message)=>{
    console.log('this is resolve msg '+message);
}).catch((message)=>{
    console.log('this is reject  msg '+message)
})

function watchTutorialPromise(){
    let userLeft = false;
    let userWatchingCatMeme = false ;

    return new Promise((resolve,reject)=>{
        if(userLeft){
            reject({
                name:'user left',
                message:':-('
            })
        }else if(userWatchingCatMeme){
            reject({
                name:'user watching cat meme',
                message:'webDevSimplified < Cat'
            })
        }else{
            resolve('thumbs up and subcribes')
        }
    })
}
watchTutorialPromise().then(message=>{
    console.log(message)
}).catch(error=>{

})


new Promise(function(resolve,reject){
    setTimeout(()=>resolve(1),1000)
}).then(function(result){
    alert(result);
    return result*2;
}).then(function(result){
    alert(result);
    return result*2;
}).then(function(result){
    alert(result);
    return result*2;
}).catch(error=>{
    console.log('Finished')
})

let p= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10);
    },300);
});

p.then((result)=>{
    console.log(result);
    return result*2;
}).then((result)=>{
    console.log(result);
    return result*3
}).then((result=>console.log(result)))

