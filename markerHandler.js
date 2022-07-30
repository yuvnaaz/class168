AFRAME.registerComponent("handler",{
    init: async function(){
        this.el.addEventListener("markerFound", ()=>{
            console.log("markerFound")
        })
        this.el.addEventListener("markerLost",()=>{
            console.log("markerLost")
        })

        
    }
})