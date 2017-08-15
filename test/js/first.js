var test = {
    first: function (params) {
        return params;
    },
    click: function (params) {
        return params + 1;
    }
}

test.first(params);
test.click(params);

function anotherName(params) {
    return params;
}
anotherName(params);

let a = new Class();
const b = Class();