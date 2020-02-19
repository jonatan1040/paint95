function drew() {
    let color = 'black';
    let container_div;
    let menu_container;
    let curser_image = "url('./images/pencil_black.png'), auto";
    let canvas_height_value = '500';
    let canvas_width_value = '500';
    let drew_div_height = '5';
    let drew_div_width = '5';
    let mouse = false;
    menu_div();
    color_palate();
    eraser();
    canvas_size();
    div_container();
    create_divs();

    function div_container() {
        container_div = document.createElement('div');
        container_div.style.height = "canvas_height_value";
        container_div.style.width = "canvas_width_value";
        container_div.setAttribute("class", "container_div");
        container_div.style.backgroundColor = "lightgray";
        document.body.appendChild(container_div);
    }

    function create_divs() {
        for (let i = 0; i < ((canvas_width_value / drew_div_width) * (canvas_height_value / drew_div_height)); i++) {
            let drew_div = document.createElement('div');
            drew_div.style.height = drew_div_height + "px";
            drew_div.style.width = drew_div_width + "px";
            drew_div.style.backgroundColor = "lightgray";
            drew_div.style.display = "inline-block";
            container_div.appendChild(drew_div);
            drew_div.addEventListener('mousedown', () => {
                drew_div.style.backgroundColor = color;
                drew_div.style.cursor = curser_image;
                mouse = true;
            });
            drew_div.addEventListener('mouseover', mouseover);

            function mouseover() {
                if (mouse === true) {
                    drew_div.style.backgroundColor = color;
                    drew_div.style.cursor = curser_image;
                }
            }
            drew_div.addEventListener('mouseup', () => {
                mouse = false;
            });
        }
    }

    function menu_div() {
        menu_container = document.createElement('div');
        menu_container.setAttribute("class", "menu_container");
        document.body.appendChild(menu_container);
    }

    function color_palate() {
        let color_palate = document.createElement('div');
        color_palate.setAttribute("class", "color_palate");
        menu_container.appendChild(color_palate);

        const red = document.createElement('button');
        red.setAttribute("id", "red");
        red.style.backgroundColor = "red";
        color_palate.appendChild(red);
        red.addEventListener('click', () => {
            color = event.target.style.backgroundColor;
            curser_image = "url('./images/pencil_red.png'), auto";
        });

        const yellow = document.createElement('button');
        yellow.setAttribute("id", "yellow");
        yellow.style.backgroundColor = "yellow";
        color_palate.appendChild(yellow);
        yellow.addEventListener('click', () => {
            color = event.target.style.backgroundColor;
            curser_image = "url('./images/pencil_yellow.png'), auto";
        });

        const green = document.createElement('button');
        green.setAttribute("id", "green");
        green.style.backgroundColor = "green";
        color_palate.appendChild(green);
        green.addEventListener('click', () => {
            color = event.target.style.backgroundColor;
            curser_image = "url('./images/pencil_green.png'), auto";
        });

        const blue = document.createElement('button');
        blue.setAttribute("id", "blue");
        blue.style.backgroundColor = "blue";
        color_palate.appendChild(blue);
        blue.addEventListener('click', () => {
            color = event.target.style.backgroundColor;
            curser_image = "url('./images/pencil_blue.png'), auto";
        });

        const black = document.createElement('button');
        black.setAttribute("id", "black");
        black.style.backgroundColor = "black";
        color_palate.appendChild(black);
        black.addEventListener('click', () => {
            color = event.target.style.backgroundColor;
            curser_image = "url('./images/pencil_black.png'), auto";
        });

        let color_picker = document.createElement('button');
        color_picker.setAttribute("class", "jscolor");
        color_picker.setAttribute("valueElement", "valueInput");
        color_picker.setAttribute("styleElement", "valueInput");
        color_picker.innerHTML = 'Click here to pick a color';
        menu_container.appendChild(color_picker);
        color_picker.addEventListener('blur', (event) => {
            color = '#' + event.target.innerHTML;
        });

        let color_picker_input = document.createElement('input');
        color_picker_input.setAttribute("id", "valueInput");
        color_picker_input.setAttribute("value", "Set Color");

        menu_container.appendChild(color_picker_input);
        color_picker_input.addEventListener('input', (event) => {
            color = '#' + event.target.value;
            color_picker_input.style.backgroundColor = "#" + event.target.value;
        });
    }

    function eraser() {
        const erase = document.createElement('button');
        erase.setAttribute("id", "eraser");
        erase.style.backgroundImage = "url('https://img.icons8.com/officel/30/000000/eraser.png')";
        erase.style.backgroundSize = "contain";
        erase.style.backgroundRepeat = "no-repeat";

        menu_container.appendChild(erase);
        erase.addEventListener('mousedown', () => {
            color = event.target.style.backgroundColor;
            curser_image = "url('https://img.icons8.com/officel/30/000000/eraser.png'), auto";
            mouse = true;
        });
        erase.addEventListener('mouseover', mouseover);

        function mouseover() {
            if (mouse === true) {
                color = event.target.style.backgroundColor;
                curser_image = "url('https://img.icons8.com/officel/30/000000/eraser.png'), auto";
            }
        }
        erase.addEventListener('mouseup', () => {
            mouse = false;
        });
    }

    function canvas_size() {
        let canvas_height = document.createElement('input');
        canvas_height.setAttribute("class", "canvas_height");
        canvas_height.setAttribute("type", "text");
        canvas_height.setAttribute("placeholder", "Enter Height");
        canvas_height.style.textAlign = "center";
        menu_container.appendChild(canvas_height);
        canvas_height.style.border = "1px solid black";

        canvas_height.addEventListener('input', (event) => {
            canvas_height_value = event.target.value;
        });

        let canvas_width = document.createElement('input');
        canvas_width.setAttribute("class", "canvas_width");
        canvas_width.setAttribute("type", "text");
        canvas_width.setAttribute("placeholder", "Enter width");
        canvas_width.style.textAlign = "center";
        menu_container.appendChild(canvas_width);
        canvas_width.style.border = "1px solid black";

        canvas_width.addEventListener('input', (event) => {
            canvas_width_value = event.target.value;
        });

        let resize = document.createElement('button');
        resize.setAttribute("class", "resize");
        resize.style.width = "90px";
        resize.style.height = "50px";
        resize.innerHTML = 'Resize';
        menu_container.appendChild(resize);
        resize.addEventListener('click', () => {
            container_div.remove();
            div_container();
            create_divs();
        });
    }
}

drew();