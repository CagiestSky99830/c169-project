AFRAME.registerComponent("markerHandler",{
    init: async function(){
        this.el.addEventListener("markerFound", ()=>{
            console.log("markerIsFound")
            this.handleMarkerFound();
        })
        this.el.addEventListener("markerLost", ()=>{
            console.log("markerIsLost")
            this.handleMarkerLost();
        })
    },
    handleMarkerFound:function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "flex";
        var ratingButton = document.getElementById("rating-button");
        var orderButton = document.getElementById("order-button");

        ratingButton.addEventListener("click", function(){
            swal({
                icon: "warning",
                title: "rate dish",
                text: "work in progress"
            })
        })

        orderButton.addEventListener("click", function(){
            swal({
                icon: "success",
                title: "thanks for order",
                text: "your order will soon be served"
            })
        })
    },
    handleMarkerLost: function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "none";
    }
})