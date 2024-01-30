//créer un tableau pour stocker les produits


let products = [ 
    {
        name : "Valkyrie",
        price: 4000000,
        quantity : 5,
        category : "voiture de sport"
        
    }, 
    {
        name : " Stage avec Cresus johnson",
        price: 100000,
        quantity : 11,
        category : "Coach de vie"
        
    },
    {
        name : " Mizuno Wave neo ultra",
        price: 110,
        quantity : 150,
        category : "Chaussure de running"
        
    } 

];


 

const app = {
    data()
    {
        return{
            prods : products,
            // créer un tableau pour stocker les produits
            newValue:{},
            editeIndex:-1,
            modal : false,

        }
    },
    methods:{
        caisse(){
            if(
                this.newValue.name && this.newValue.price && this.newValue.quantity && this.newValue.category){ 
                this.prods.push(this.newValue)
                this.newValue = {}             
            }
        else {
            alert("Veuillez remplir tous les champs")
            }
    },
        removeProduct(index){
            if (confirm("Voulez-vous supprimer ce produit ?")){
                this.prods.splice(index,1)
            }
    },

        openModal(index){
            this.modal = true;
            this.editIndex = index;
            this.newValue = {...this.prods[index]};
    },
        closeModal(){
            this.modal = false;
            this.editIndex = -1;
            this.newValue={};
    },
        editProds(){
            if(
                this.newValue.name && this.newValue.price && this.newValue.quantity && this.newValue.category){ 
                    this.prods[this.editIndex] = this.newValue
                    this.newValue={}
                    this.closeModal()           
            }
            else{
                alert("Veillez remplir tous les champs")
            }
    },
        saveToLocalStorage(){
            localStorage.setItem("prods", JSON.stringify(this.prods))
    }
},


    watch:{
        prods:{
            deep:true,
            handler(){
                this.saveToLocalStorage()
            }
        }
},

    created(){
        let storedProducts = localStorage.getItem("prods")
            if (storedProducts) {
                try{
                    this.prods = JSON.parse(storedProducts)
                }
                catch(e){
                    console.log(e)
                }            
        }
}

};

Vue.createApp(app).mount("#app")




