
module.exports = {
    getNamesOfVisibleFields : async function(page) {
        let namesOfFields = await page.$$eval('div.book-form-field', (fields) => {
            return fields.map(field => {
                return field.querySelector('label').innerHTML
            })
        });
        return namesOfFields;
    }
}