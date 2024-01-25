class View {
    constructor() {
        this._name = 'view';
        ElementJS.namespaceMap.get('default').componentMap.set(this._name,this);
    }
    get name(){ return this.name; }
    get struct() { }
    get handler() {
        return (event) => {
            console.log('View handle event : ' + event.source);
        }
    }
}

let v = new View();