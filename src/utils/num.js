// 数值处理工具类
export default {
    /**
     *  判断num是否在[x,y]或[y,x]的区间 ,
     *是返回num,
     *不是返回x或y
     */
    scopenum(num,x,y){
        
        if(x===y) return x;
        const max=Math.max(x,y)
        const min=Math.min(x,y)
        if(num>=min && num<=max) return num
        if(num<min) return min
        if(num > max) return max
        console.log('比较数值范围出错'+JSON.stringify({num,max,min}))
    }
}