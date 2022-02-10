'use strict';

hexo.extend.filter.register('before_post_render', function (data) {

  let backgroundColor = '#F6F6F6';
  let titleColor = '#121212';
  let descColor = '#999';

  data.content = data.content.replace(/----*\n\n([^\n]*)\n([a-zA-Z]*:\/\/[^\n]*)\n\n----*/g,
  `<a target="_blank" href="$2" style="position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; box-sizing: border-box; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-align-items: center; -webkit-box-align: center; -ms-flex-align: center; align-items: center; width: 390px; min-height: 84px; border-radius: 8px; max-width: 100%; overflow: hidden; margin: 16px auto; padding: 12px 12px 9px 12px; background-color: ${backgroundColor};"><span class="LinkCard-contents"><span style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis; max-height: 40px; line-height: 1.25; color: ${titleColor};">$1</span><span style="display: -webkit-box; font-size: 13px; height: 18px; line-height: 18px; color: ${descColor}; word-break: break-all; text-overflow: ellipsis; overflow: hidden; -webkit-line-clamp: 1; -webkit-box-orient: vertical;"><span style="display: inline-flex; align-items: center;"><svg class="Zi Zi--InsertLink" fill="currentColor" viewBox="0 0 24 24" width="14" height="14"><path d="M13.414 4.222a4.5 4.5 0 1 1 6.364 6.364l-3.005 3.005a.5.5 0 0 1-.707 0l-.707-.707a.5.5 0 0 1 0-.707l3.005-3.005a2.5 2.5 0 1 0-3.536-3.536l-3.005 3.005a.5.5 0 0 1-.707 0l-.707-.707a.5.5 0 0 1 0-.707l3.005-3.005zm-6.187 6.187a.5.5 0 0 1 .638-.058l.07.058.706.707a.5.5 0 0 1 .058.638l-.058.07-3.005 3.004a2.5 2.5 0 0 0 3.405 3.658l.13-.122 3.006-3.005a.5.5 0 0 1 .638-.058l.069.058.707.707a.5.5 0 0 1 .058.638l-.058.069-3.005 3.005a4.5 4.5 0 0 1-6.524-6.196l.16-.168 3.005-3.005zm8.132-3.182a.25.25 0 0 1 .353 0l1.061 1.06a.25.25 0 0 1 0 .354l-8.132 8.132a.25.25 0 0 1-.353 0l-1.061-1.06a.25.25 0 0 1 0-.354l8.132-8.132z"></path></svg></span><span>$2</span></span></span></a>`);

  return data;

});