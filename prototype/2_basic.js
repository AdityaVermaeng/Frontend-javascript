function Smartphone(modelName, storage, camera, battery, charger) {
    this.modelName = modelName
    this.storage = storage
    this.camera = camera
    this.battery = battery
    this.charger = charger
    this.getInfo = function() {
        console.log(`${this.modelName} comes with
         ${this.storage} GB RAM ,
          ${this.camera} megapixel camera ,
          ${this.charger} mAh battery and
           ${this.charger} watt superfast charging`);
    }

    this.getKey = function() {
        // console.log(this.modelName)
        console.log(this)
    }
}
obj1 = new Smartphone("Oneplus", 8, 32, 5000, 95);
obj1.getInfo();
obj2 = new Smartphone("Samsung", 16, 12, 4800, 35);
obj2.getInfo();
obj1.getKey();
console.log(obj1);
console.log(obj1.modelName);