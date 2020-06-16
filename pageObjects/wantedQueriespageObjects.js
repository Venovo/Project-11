module.exports = {
    url: 'http://localhost:3000',
    elements: {
        menuButton: {
            selector: '//button[contains(text(),"Open Menu")]',
            locateStrategy: 'xpath'
        },
        enterWantedpage: 'p[name="enterOption"]',
        closeMenubutton: 'button[tabindex="0"]',
        header: 'input[name="hdrInput"]',
        MKE: 'input[name="mkeInput"]',
        OAI: 'input[name="oriInput"]',
        name: 'input[name="namInput"]',
        sex: 'select[name="sexInput"]',
        sexFemale: 'option[value="F"]',
        race: 'select[name="racInput"]',
        raceBlack: 'option[value="B"]',
        height: 'input[name="hgtInput"]',
        weight: 'input[name="wgtInput"]',
        hair: 'input[name="haiInput"]',
        offense: 'input[name="offInput"]',
        DOWV: 'input[name="dowInput"]',
        licensePlate: 'input[name="licInput"]',
        licenseState: 'input[name="lisInput"]',
        licenseExpiration: 'input[name="lidInput"]',
        Aquery: 'span[name="queryBody"]'
    }
}