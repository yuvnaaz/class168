AFRAME.registerComponent("handler",{
    init: async function(){
        this.el.addEventListener("markerFound", ()=>{
            var buttonDiv = document.getElementById("button-div")
            buttonDiv.style.display = "flex"
            var rating = document.getElementById("rating-button")
            var order = document.getElementById("order-button")

            rating.addEventListener("click", function(){
                swal({
                    icon: "warning",
                    title: "Rating",
                    text: "Work In Progress"
                })
            })
            order.addEventListener("click", function(){
                swal({
                    title: "Order",
                    icon: "success",
                    text: "Order Successfully Placed!"
                })
            })
        })
        this.el.addEventListener("markerLost",()=>{
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "none"


        })

        
    }
})