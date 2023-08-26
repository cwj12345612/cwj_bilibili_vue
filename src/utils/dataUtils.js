//数据处理工具js

let temp=null
export   const dataUtils= {
   
    antishake_fun:(fun)=>{
        
        if(temp) {
            clearTimeout(temp)
        }
        temp=setTimeout(()=>{
    
            fun()
        },100)
    }
}


