class Vector {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    set(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    copy () {
        return new Vector(this.x, this.y);
    }

    add(v) {
        this.x += v.x;
        this.y += v.y;
    }

    sub(v) {
        this.x -= v.x;
        this.y -= v.y;
    }

    mult(value) {
        this.x *= value;
        this.y *= value;
    }

    clamp (min, max) {
        this.x = clamp (this.x, min.x, max.x);
        this.y = clamp (this.y, min.y, max.y);
    }

    static add (v1, v2) {
        return new Vector(v1.x + v2.x, v1.y + v2.y);
    }

    static sub (v1, v2) {
        return new Vector(v1.x - v2.x, v1.y - v2.y);
    }
    
    static mult (v, x) {
        return new Vector(v.x * x, v.y * x);
    }

    static clamp(vector, min, max){
        return new Vector(clamp (vector.x, min.x, max.x), clamp (vector.y, min.y, max.y));
      }
}