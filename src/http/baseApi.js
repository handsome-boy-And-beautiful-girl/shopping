
const basePath = "http://localhost:8089"


export default {
    // POST 方法
    post(url,params){
        return new Promise((resolve,reject) => {
            const xhr = new XMLHttpRequest()
            xhr.open("POST" ,basePath+url, true)
            xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
            xhr.setRequestHeader("Accept","*/*")
            xhr.onreadystatechange = () => {
                if(xhr.readyState === 4 ){
                  if(xhr.status === 200){
                    const res = JSON.parse(xhr.responseText)
                      if(res.code === 0){
                        resolve(res)
                        console.log(res)
                      }else{
                        reject(res)
                      }
                  }else{
                    reject(JSON.parse(xhr.responseText))
                  }
                }
            }
            xhr.send(JSON.stringify(params))
        })
    }
}