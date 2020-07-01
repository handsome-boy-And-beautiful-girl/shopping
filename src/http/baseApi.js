
const basePath = "hhtp://localhsot:8089/"


export default {
    // POST 方法
    post(url,params){
        return new Promise((resolve,reject) => {
            const xhr = new XMLHttpRequest()
            xhr.setRequestHeader("Content-Type","application/json")
            xhr.setRequestHeader("Accept","*/*")
            xhr.open("POST",basePath+url,true)
            xhr.onreadystatechange = () =>{
                if(xhr.readyState === 4 ){
                    if(xhr.status === 200){
                        const res = JSON.parse(xhr.responseText)
                        if(res.status === 200){
                            resolve(res)
                        }else{
                            reject(res)
                        }
                    }
                }else{
                    reject(JSON.parse(xhr.responseText))
                }
            }

            xhr.send(JSON.stringify(params))
        })
    },
    // GET 方法
    get(url,params){
        return new Promise((resolve,reject)=>{
            const xhr = new XMLHttpRequest()
            xhr.setRequestHeader("Content-Type","application/json")
            xhr.setRequestHeader("Acccpt","*/*")
            xhr.open("GET",basePath+url,true)

            xhr.onreadystatechange = () =>{
                if(xhr.readyState === 400){
                    if(xhr.status === 200){
                        const res = JSON.parse(xhr.responseText)
                        if(res.status === 200){
                            resolve(res)
                        }else{
                            reject(xhr.responseText)
                        }
                    }
                }else{
                    reject(xhr.responseText)
                }
            }
            xhr.send(JSON.stringify(params))
        })
    }
}