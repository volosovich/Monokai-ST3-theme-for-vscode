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
const b = Class(); // comment @return (boolean)


/**
   * Required to validate if the target container is correct.
   *
   * @param container {Object|String} The container to validate.
   * @return {boolean} If the container is valid or not.
   * @private
   */
var test_a = test1.bind(this, arg1, "arg2");
var testb = test2.call(this, arg1, "arg2");
var testc = test3.apply(this, arg1, "arg2");