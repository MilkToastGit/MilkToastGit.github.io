class PopupSmiley{
    constructor(size, parent){
        this.base = document.createElement('div');
        this.base.style.width = size.x + 'px';
        this.base.style.height = size.y + 'px';
        parent.append(this.base);
    }
}