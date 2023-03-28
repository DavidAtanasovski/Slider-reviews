(function (){
    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')


    const btn = document.querySelectorAll('.btn')
    let index = 0
    const customers = []

    function Customer(img, name, text){
        this.img = img
        this.name = name
        this.text = text
    }

    function createCustomer(img, name, text){
        let Img = `./img/${img}.jpg`
        let customer = new Customer(Img,name,text)

        customers.push(customer)

    
    }

    createCustomer(0, 'Wanda', 'Lorem ipsum dolor sit amet. Cum commodi dolores est neque praesentium est odio optio aut voluptatem eaque aut perspiciatis illum vel laudantium cupiditate. Sed deserunt cupiditate qui nostrum porro et accusamus facilis.')
    createCustomer(1, 'Hich', 'Lorem ipsum dolor sit amet. Non rerum facilis ut voluptatum voluptas ad expedita vitae ea quisquam dolor rem sapiente dolorem et velit enim! Non debitis ullam aut dolorem perspiciatis et iure fugit ea magni odit eos assumenda deserunt et nulla quas qui magnam galisum? Sit enim nobis in asperiores voluptas est impedit nihil.')
    createCustomer(2, 'Nick', 'Et animi voluptates ut doloribus repellat est suscipit quia! Qui sequi sint qui reprehenderit officiis vel quasi quia in ullam accusantium At quasi assumenda eum consectetur officiis.')
    createCustomer(3, 'Rina', 'Lorem ipsum dolor sit amet. Ex perspiciatis internos ea internos autem a ducimus quaerat et incidunt doloremque sed magnam omnis sit quia fugiat.')
    createCustomer(4, 'Sandy', 'Lorem ipsum dolor sit amet. Est aliquam molestias aut cumque rerum eos labore architecto eum aliquid quod ut provident ipsa eum dolores molestias. Ea provident sequi in Quis earum non velit magnam sit Quis aspernatur est omnis sapiente.')

    btn.forEach(function(button){
        button.addEventListener('click',function(e){
            if(e.target.parentElement.classList.contains('prevBtn')){
                if(index === 0){
                    index = customers.length
                }
                index--
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }

            if(e.target.parentElement.classList.contains('nextBtn')){
                index++
                if(index === customers.length){
                    index = 0
                }
               
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
        })
    })
})()