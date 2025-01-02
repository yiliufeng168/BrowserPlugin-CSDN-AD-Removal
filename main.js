// ==UserScript==
// @name         CSDN Element Remover
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  删除CSDN页面中指定的元素
// @author       yiliufeng
// @match        *://blog.csdn.net/*
// @match        *://*.blog.csdn.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 使用document.querySelector()或document.querySelectorAll()选择要删除的元素
    const selectors = [
        '.programmer1Box',  // 替换为你要删除的元素的类名
        '#recommendAdBox',  // 替换为你要删除的元素的ID
        '#footerRightAds',
        '#asideWriteGuide',
        '#remuneration',  // 示例：删除侧边栏
        '.adsbygoogle',
        //'div.advertisement',  // 示例：删除广告元素
        // 添加更多选择器
    ];

    // 遍历选择器并删除对应的元素
    selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.remove();
        });
    });

})();
