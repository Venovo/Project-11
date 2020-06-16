var enterWantedFunction = (applePie, data) => {
    applePie
        .click('@menuButton')
        .pause(3000)
        .click('@enterWantedpage')
        .pause(3000)
        .click('@closeMenubutton')
        .pause(3000)
        .setValue('@header', data.header)
        .setValue('@MKE', data.MKE)
        .setValue('@OAI', data.OAI)
        .setValue('@name', data.name)
        .pause(3000)
        .click('@sex')
        .click('@sexFemale')
        .click('@race')
        .click('@raceBlack')
        .setValue('@height', data.height)
        .setValue('@weight', data.weight)
        .setValue('@hair', data.hair)
        .setValue('@offense', data.offense)
        .setValue('@DOWV', data.DOWV)
        .setValue('@licensePlate', data.licensePlate)
        .setValue('@licenseState', data.licenseState)
        .setValue('@licenseExpiration', data.licenseExpiration)
        .click('button[id="saveBtn"]')
        .expect.element('@Aquery').text.to.contain(data.result)
}
var Project11 = {}
module.exports = {
    beforeEach: browser => {
        Project11 = browser.page.wantedQueriespageObjects()
        Project11
            .navigate()
    },
    after: browser => {
        Project11
            .end()
    },
    'Check the home page': browser => {
        Project11
            .verify.visible('.bm-burger-button')
            .verify.containsText('h1.titleBar', 'Wanted Queries')
            .verify.containsText('div#welcomeScreen', 'Welcome to "Wanted Queries".')
            .verify.containsText('div#welcomeScreen', 'Enter Wanted')
            .verify.containsText('div#welcomeScreen', 'Modify Wanted')
            .verify.containsText('div#welcomeScreen', 'Cancel Wanted')
            .verify.visible('.required')
            .verify.visible('.error')
    },
    'Enter Wanted Test': browser => {
        enterWantedFunction(Project11, {
            header: 'ABC123456789',
            MKE: 'ABC',
            OAI: '123456789',
            name: 'Sara Baker',
            height: '510',
            weight: '150',
            hair: 'Black',
            offense: 'Arson',
            DOWV: '06142020',
            licensePlate: '93HG123',
            licenseState: 'CA',
            licenseExpiration: '06152020',
            result: 'ABC123456789.ABC.123456789.Sara Baker.F.B.510.150.Black.Arson.2020-06-14....93HG123.CA.2020-06-15'
        })
    }
}