class ModuleInterface {
    constructor() {
        this.name = 'ModuleA';
        globalThis.moduleA = this;
    }
}

new ModuleInterface();