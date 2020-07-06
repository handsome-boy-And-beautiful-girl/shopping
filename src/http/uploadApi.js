
export default {
    // POST 方法
    updateFile(file){
      const form = new FormData()
      console.log('11'+file)
      form.append('file', file)
        return new Promise((resolve,reject) => {
            const xhr = new XMLHttpRequest()
            xhr.open("POST" ,"http://localhost:8089/uploadFiles", true)
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
            xhr.send(form)
        })
    }
}