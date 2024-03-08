import testData from '../datas/example.json'
describe('測試數據放在前置條件裡', () => {
    let testDatas = [
        { 'name': 'yy', 'password': 'helloqa' },
        { 'name': 'age', 'password': 'helloqa2' }
    ]
    //循環生成測試用例
    for (const data in testDatas) {

        it(`測試外部數據${data}`, function () {
            cy.log(testDatas[data].name, testDatas[data].password)
        })
    }

})