function changeCoffee(coffee) {
    if (coffee === 'americano') {
        document.getElementById('coffee-type').style.background = 'linear-gradient(#180D01, #180D01)';
    } else if (coffee === 'latte'){
        document.getElementById('coffee-type').style.background = 'radial-gradient(#fff,#DB8C44)';
    } else if (coffee === 'capa') {
        document.getElementById('coffee-type').style.background = 'linear-gradient(#180D01, #DB8C44)';
    }
}