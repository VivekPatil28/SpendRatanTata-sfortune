    let arr = document.getElementsByClassName("card");
    let amount = document.getElementById("amount").innerHTML;
    let amount_temp=amount;
    findpercentage();
    Array.from(arr).forEach(e => {
        let val = e.querySelector('.quantity');
        const buy_btn = e.querySelector(".buy_btn");
        const sell_btn = e.querySelector(".sell_btn");
        buy_btn.addEventListener('click', function () {
            let price = e.querySelector(".price").innerHTML;
            val.innerHTML++;
            price = price.replaceAll(",", '');
            price = price.replace("INR", '');
            price = parseInt(price);
            if ((amount-price)<0) {
                alert("No More Money To Purchase It !")
            }
            else
               amount = amount - price;

                    document.getElementById("amount").innerHTML = amount;
                     findpercentage();
                
        });
        sell_btn.addEventListener('click', function () {
            if (val.innerHTML > 0) {
                val.innerHTML--;
                let price = e.querySelector(".price").innerHTML;
                price = price.replaceAll(",", '');
                price = price.replace("INR", '');
                price = parseInt(price);
                amount = amount + price;
            document.getElementById("amount").innerHTML = amount;
                findpercentage();
                
            }
        });

    });

function findpercentage() {
    document.getElementById("amt").innerHTML=((amount_temp-amount)/amount_temp)*100;

}
