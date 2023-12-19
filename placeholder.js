document.addEventListener('DOMContentLoaded', function () {
    var inputs = document.querySelectorAll('input, textarea');

    inputs.forEach(function(input) {
        var defaultPlaceholder = input.placeholder;

        input.onfocus = function() {
            input.placeholder = '';
        };

        input.onblur = function() {
            input.placeholder = defaultPlaceholder;
        };
    });
});
