// object literal(most basic singleton)

const config = {
    appName: "yahooo",
    version: "1.0.8",
    showInfo() {
        console.log(`${this.appName} - v${this.version}`);
    }
};
config.showInfo();