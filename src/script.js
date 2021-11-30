$(function () {
    // .js-account-item 分見る
    $(".js-account-item").each(function () {
        const $this = $(this);
        const $thisData = $this.data();
        if ($thisData.follow) {
            $this.find(".js-follow-btn").addClass("isFollow");
        }
    });

    $(".js-follow-btn").on("click", function () {
        const $this = $(this);
        const $accountItem = $this.parents(".js-account-item");
        const $thisData = $accountItem.data();

        if ($thisData.follow) {
            // ajax
            // サーバーサイドにフォロー・フォロー解除の変更がされたことを送信
            // 今回の学習では割愛

            $this.removeClass("isFollow");
            $this.text("フォローする");
            $accountItem.data("follow", false);
        } else {
            // ajax
            // サーバーサイドにフォロー・フォロー解除の変更がされたことを送信
            // 今回の学習では割愛

            $this.addClass("isFollow");
            $this.text("フォロー中");
            $accountItem.data("follow", true);
        }
    });
});