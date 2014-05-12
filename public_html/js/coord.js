define(function(require, exports, module){
    
    /**
     * constructor
     * @returns {_L1.coord}
     */
    function coord(){
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.vx = 0;
        this.vy = 0;
        this.vz = 0;
        this.ax = 0;
        this.ay = 0;
        this.az = 0;
        this.r = 20.0;
        this.m = 1.0;
        this.color = 'f00';
        return this;
    }
    
    //function privateMethod()
    //cord.prototype.publicMethod
    //coord.prototype.constructor = coord;
    return exports = coord;
});