import testData from '../datas/example.json'
describe('數據保存在自定義文件中', function () {
    describe('數據驅動範例', function () {
        for (const data in testData) {
            it(`測試外部數${data}`, function () {
                cy.log(testData[data].name, testData[data].password)
            })
        }
    })
})
