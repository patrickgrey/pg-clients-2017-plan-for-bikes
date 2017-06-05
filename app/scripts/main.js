var AndyMulholland = (function ($) {

    'use strict';

    var module              = {};

    var IEReplaceSVGPNG = function () {
        $('img[src*="svg"]').attr('src', function() {
            return $(this).attr('src').replace('.svg', '.png');
        });
    };

    module.init = function () {
        if(!Modernizr.svg) {
            IEReplaceSVGPNG();
        }
        $('body').scrollspy({ target: '.navbar-default' });
    };

    return module;

}($));


AndyMulholland.init();