
let total =0;
function handleclick(target){

   
    const cartSelectedItems =document.getElementById('selected-cart-items')
    const selected_item =target.childNodes[3].childNodes[3].innerText;
   // console.log(selected_item);

    const count = cartSelectedItems.childElementCount;
    const li = document.createElement("li");
     li.innerText = `${count+1} . ${selected_item} ` ;
     cartSelectedItems.appendChild(li);
     cartSelectedItems.innerText
     console.log( cartSelectedItems.innerText);

     //Total Price
     let lastTotalPrice;
    const price=target.childNodes[3].childNodes[5].innerText.split(" ")[0];
    total=parseFloat(total)+parseFloat(price);
    const  total_price = document.getElementById('total_price');
    total_price.innerText= ` ${total.toFixed(2)} TK`;
     lastTotalPrice= total.toFixed(2);
     lastTotal.innerText =` ${lastTotalPrice} TK`;
    console.log(total_price.innerText);
   
    //Purchase button enable
    const purchaseBtn =document.getElementById('purchase-btn');
    if(parseFloat(total.toFixed(2))>0)
    {
      purchaseBtn.removeAttribute('disabled');
      
    }
    else{
      purchaseBtn.setAttribute('disabled', true);
     
  }
   //apply button enable
  const applyBtn =document.getElementById('apply-btn');
    if(parseFloat(total.toFixed(2))>200)
    {
      applyBtn.removeAttribute('disabled');
      
      
    }
    else{
      applyBtn.setAttribute('disabled', true);
     
  }


}

  //cupon code apply
  const cuponCode =document.getElementById('cuppon-field');
  const lastTotal =document.getElementById('last_total');
  console.log(cuponCode);
  function saleFunc(){
    const cupontext = cuponCode.value
    console.log(cupontext);
    let discountPrice =0;
    if(cupontext=='SELL200')
    {
       const discount = document.getElementById('discount');
       discountPrice =(total* 0.20).toFixed(2);
       discount.innerText =`${discountPrice} TK` ;
       
       console.log(discountPrice);
       cuponCode.value = '';

  
    }

    if(discountPrice>0){
      let lastTotalPrice= total- discountPrice;
    lastTotal.innerText =` ${lastTotalPrice} TK`;

    }
    let lastTotalPrice= total- discountPrice;
    lastTotal.innerText =` ${lastTotalPrice} TK`;
  
      // console.log(lastTotalPrice);

  }
  
  function goHomeFunc()
  {
    document.location.reload();

  }
  
   




   
     

