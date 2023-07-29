
export default {
    /*
    判断number是否在m1~m2/m2~m1范围内 
        是 返回number
        否 返回最大值或最小值
    */
    scopenumber:(number,m1,m2)=>{
        if(m1===m2) return m1;
        const max=Math.max(m1,m2);
        const min=Math.min(m1,m2)
        if(number>=min && number<=max ) return number
        if(number<min) return min
        if(number>max) return max
    },
   
}