
export  default {
    
    state: {
       headerclass:{
        backgroundcolor:'none',
        position:'absolute',
        leftcolour:'#ffffff',
        rightcolour:'#ffffff',
        uploadcolour:'#ffffff',
        searchexsits:true
       }
    },
    mutations: {
        setheaderclass(state,cl){
            state.headerclass={...state.headerclass,...cl}
        }
    },
    actions: {
       
    },
    getters: {
      
    },
    namespaced:true
}
