/**
 * Created by zhongshuai on 2016/8/1.
 */

jQuery.fn.myPlugin = function () {
    $.fn.maxHeight = function () {
        var max = 0;
        this.each(function () {
            max = Math.max(max,$(this).height());
        });
        return max;
    }
};

