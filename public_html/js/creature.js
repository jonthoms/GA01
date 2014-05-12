define(function(require, exports, module){
    
    /**
     * constructor
     * @returns {_L1.coord}
     */
    function creature(){
        this.genes = new Object();
        this.balls = new Object();
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.vx = 0;
        this.vy = 0;
        this.vz = 0;
        return this;
    }
    
    creature.prototype.tick = function(){
        // process muscle movements
    }
    
    creature.prototype.force = function(){
        
    }
    
    creature.prototype.evolve = function(){
        
    };
    
    
    //function privateMethod()
    //cord.prototype.publicMethod
    //coord.prototype.constructor = coord;
    return exports = creature;
});