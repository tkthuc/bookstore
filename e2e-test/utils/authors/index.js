
module.exports = {
    getNamesOfVisibleFields : function(page) {
        let namesOfFields = page.$$eval('div.form-field', (fields) => {
            return fields.map(field => {
                return field.querySelector('label').innerHTML
            })
        });
        return namesOfFields;
    }
}