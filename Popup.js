const popupContainer = document.getElementById('popups');
const headerThickness = 40;

class Popup {
    constructor(position, size, templateId) {
        this.position = position;
        this.size = size;

        this.base = document.createElement('div');
        this.base.classList.add('popup');
        this.base.style.width = size.x + 'px';
        this.base.style.height = size.y + headerThickness + 'px';
        this.base.style.left = position.x + 'px';
        this.base.style.top = position.y + 'px';
        popupContainer.append(this.base);

        this.content = document.createElement('div');
        this.content.classList.add('popup-content');
        this.content.style.width = '100%';
        this.content.style.height = 'calc(100% - ' + headerThickness + 'px)';
        this.content.style.position = 'absolute';
        this.content.style.left = '0';
        this.content.style.top = headerThickness + 'px';
        this.base.append(this.content);

        if(typeof templateId === 'string') {
            let templateNode = document.getElementById(templateId).cloneNode(true);
            templateNode.id = '';
            templateNode.classList.add(templateId);
            this.content.appendChild(templateNode);
        }

        this.header = new Dragger(new Vector(), new Vector(this.size.x, headerThickness), this.base, this.base, true);
        this.header.base.classList.add('popup-header');
        this.header.base.style.width = '100%';
        // let headerShadow = document.createElement('div');
        // headerShadow.classList.add('header-shadow');
         this.header.onMouseDown = function() {
            this.target.parentNode.appendChild(this.target);
         };

        this.closeClicky = new Clicky(new Vector(this.size.x - headerThickness / 2 - 10, headerThickness / 2 - 10), new Vector(20, 20), this.header.base);
        this.closeClicky.base.classList.add('popup-close');
        this.closeClicky.closeTarget = this;
        this.closeClicky.onClick = function() {
            this.closeTarget.hide();
        }

        this.hide();
    }

    show() {
        // this.base.style.width = this.size.x;
        // this.base.style.height = this.size.y;
        this.base.style.display = "";
        popupContainer.append(this.base);
    }

    hide() {
        // this.base.style.width = 0;
        // this.base.style.height = 0;
        // this.closeClicky.base.style.display = "none";
        this.base.style.display = "none";
    }
}