var
            $form = $("#our-form"),
            $allCheckboxes = $("input:checkbox", $form),
            $sumOut = $("#checked-sum"),
            $countOut = $("#checked-count"),
            $sumTotal = $("#sumTotal");

        $allCheckboxes.change(function() {
            var sum = 0,
                count = 0;

            $allCheckboxes.each(function(index, el) {
                var $el = $(el);

                if ($el.is(":checked")) {
                    count++;

                    val = parseFloat($el.val());
                    if (!isNaN(val)) {
                        sum += val;
                    }
                }

            });

            $sumOut.text(sum);
            $sumTotal.text(sum);
            $countOut.text(count);
        });