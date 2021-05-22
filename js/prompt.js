var promptContainer;

(function(root, factory) {
    // commonjs
    if (typeof exports === 'object') {
        module.exports = factory();
        // global
    } else {
        root.Prompt = factory();
    }
})(this, function() {

    // We need DOM to be ready
    if (document.readyState === 'complete') {
        init();
    } else {
        window.addEventListener('DOMContentLoaded', init);
    }

    // Initialize library
    function init() {
        // Toast container
        promptContainer = document.createElement('div');
        promptContainer.id = 'prompt-container';
        document.body.appendChild(promptContainer);
    }

    var Prompt = {};
    var autoincrement = 0;

    Prompt.create = function(options) {
        var toast = document.createElement('div');
        toast.id = ++autoincrement;
        toast.id = 'toast-' + toast.id;
        toast.className = 'prompt-toast';

        // title
        if (options.title) {
            var h4 = document.createElement('h4');
            h4.className = 'prompt-title';
            h4.innerHTML = options.title;
            toast.appendChild(h4);
        }

        // text
        if (options.text) {
            var p = document.createElement('p');
            p.className = 'prompt-text';
            p.innerHTML = options.text;
            toast.appendChild(p);
        }

        // TODO: icon
        // if (options.icon) {
        //     var img = document.createElement('img');
        //     img.src = options.icon;
        //     img.className = 'prompt-icon';
        //     toast.appendChild(img);
        // }

        // click callback
        if (typeof options.callback === 'function') {
            toast.addEventListener('click', options.callback);
        }

        // toast api
        toast.hide = function() {
            toast.className += ' prompt-fadeOut';
            toast.addEventListener('animationend', removeToast, false);
        };

        // autohide
        if (options.timeout) {
            setTimeout(toast.hide, options.timeout);
        }

        if (options.type) {
            toast.className += ' prompt-' + options.type;
        }

        if (options.position) {
            promptContainer.className += ' prompt-' + options.position;
        }
        else {
            promptContainer.className += ' prompt-top-right';
        }

        toast.addEventListener('click', toast.hide);


        function removeToast() {
            document.getElementById('prompt-container').removeChild(toast);
        }

        document.getElementById('prompt-container').appendChild(toast);
        return toast;

    };

    return Prompt;

});
