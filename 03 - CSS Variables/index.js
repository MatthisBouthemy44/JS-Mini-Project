const inputs = document.querySelectorAll('.controls input');

function handleUp(){
    const suffix = this.dataset.sizing || '';
     let test = document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
     console.log(test);
}

inputs.forEach(input => input.addEventListener('changé',handleUp));
inputs.forEach(input => input.addEventListener('mousemove',handleUp));


