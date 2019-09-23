// ==UserScript==
// @name         Zendesk queues colors
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Color coding ticket queues
// @author       Senff
// @updateURL    https://github.com/senff/Zendesk-queues-colors/raw/master/zendesk-queues-colors.user.js
// @match        https://woothemes.zendesk.com/agent/filters/*
// @grant        none
// ==/UserScript==

var $ = window.jQuery;
var stylesAreSet = false;

function colorCoding() {
    if(!$('.zdstyles').length) {
        $('.left.section .ember-view.filters li a').each(function(filterName) {
            var insideHTML = $(this).html();
            if(insideHTML.indexOf('WP.com::') !== -1) {
                $(this).addClass('zdstyles');
                $(this).css('background','#016087').css('color','#ffffff');
                $(this).find('.count').css('background','#016087').css('color','#ffffff');
                stylesAreSet = true;
            }
            else if(insideHTML.indexOf('JPOP::') !== -1) {
                $(this).addClass('zdstyles');
                $(this).css('background','#00BE28').css('color','#ffffff');
                $(this).find('.count').css('background','#00BE28').css('color','#ffffff');
                stylesAreSet = true;
            }
            else if(insideHTML.indexOf('Woo::') !== -1) {
                $(this).addClass('zdstyles');
                $(this).css('background','#96588A').css('color','#ffffff');
                $(this).find('.count').css('background','#96588A').css('color','#ffffff');
                stylesAreSet = true;
            }
            else {
                $(this).addClass('zdstyles');
                $(this).css('background','#e0e0e0');
                $(this).find('.count').css('background','#e0e0e0');
                stylesAreSet = true;
            }
        });
    }
}

$(document).ready(function() {
    colorCoding();
});

window.setInterval(function(){
    colorCoding();
}, 2500);
