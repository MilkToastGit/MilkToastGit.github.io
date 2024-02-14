const AllClickys = [];

class Clicky {
    constructor(position, size, parent, draggable = false, clamp = false, anchor='top-left') {
        this.size = size;
        this.halfSize = Vector.mult(size, 0.5);
        this.position = position;
        this.mouseDown = false;
        this.draggable = draggable;
        this.clamp = clamp;
        
        this.base = document.createElement('div');
        this.base.style.width = size.x + 'px';
        this.base.style.height = size.y + 'px';
        this.base.style.position = 'absolute';

        let anchorComponents = anchor.split('-');
        console.log(anchorComponents[0]);
        console.log(anchorComponents[1]);

        if(anchorComponents[0] == 'top')
            this.base.style.top = position.y + 'px';
        else
            this.base.style.bottom = position.y + 'px';

        if(anchorComponents[1] == 'left')
            this.base.style.left = position.x + 'px';
        else
            this.base.style.right = position.x + 'px';
        
        parent.append(this.base);

        this.base.addEventListener('mousedown', () => { if (typeof this.onMouseDownDefault === 'function') this.onMouseDownDefault() });
        this.base.addEventListener('mousedown', () => { if (typeof this.onMouseDown === 'function') this.onMouseDown() });
        this.base.addEventListener('mouseover', () => { if (typeof this.onMouseOver === 'function') this.onMouseOver() });
        this.base.addEventListener('mouseout', () => { if (typeof this.onMouseOut === 'function') this.onMouseOut() });
        this.base.addEventListener('click', () => { if (typeof this.onClick === 'function') this.onClick() });
        this.base.addEventListener('dblclick', () => { if (typeof this.onDblClick === 'function') this.onDblClick() });
        
        AllClickys.push(this);
    }

    onMouseDownDefault() {
        this.mouseDown = true;
        this.mouseOffset = Vector.sub(this.position, mousePos);
    }

    onMouseUpDefault() {
        this.mouseDown = false;
    }

    onMouseMoveDefault() {
        if (!this.draggable || !this.mouseDown) return;

        this.position = Vector.add(mousePos, this.mouseOffset);

        if(this.clamp) {
            const max = new Vector(document.getElementById('body').clientWidth,
                document.getElementById('body').clientHeight);
            max.sub(this.halfSize);
            this.position.clamp(new Vector(), max);

        }

        this.base.style.left = this.position.x + "px";
        this.base.style.top = this.position.y + "px";
    }
}

class Dragger extends Clicky{
    constructor(position, size, parent, target, clamp = false) {
        super(position, size, parent, true, clamp);
        this.target = target;
        this.position = new Vector(pxToNumber(this.target.style.left), pxToNumber(this.target.style.top));
    }

    onMouseMoveDefault() {
        if (!this.mouseDown) return;

        this.position = Vector.add(mousePos, this.mouseOffset);

        if(this.clamp) {
            const max = new Vector(document.getElementById('body').clientWidth,
                document.getElementById('body').clientHeight);
            max.sub(this.halfSize);
            this.position.clamp(new Vector(), max);
        }

        this.target.style.left = this.position.x + "px";
        this.target.style.top = this.position.y + "px";
    }
}

class Shortcut extends Clicky {
    constructor(position, size, parent, target, icon, anchor='top-left') {
        super(position, size, parent, false, false, anchor);
        this.target = target;
        this.icon = icon;
        this.base.classList.add('shortcut');

        if (typeof icon === 'string') {
            const img = document.createElement('img');
            img.style.width = size.x + 'px';
            img.style.height = size.y + 'px';
            img.src = icon;
            this.base.append(img);
        }
    }

    onClick() {
        this.target.show();
    }
}