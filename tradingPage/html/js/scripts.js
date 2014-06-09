(function ($) {
    "use strict";
    $(document).ready(function () {

//
        /*== ROUTING ==*/
        $(document).ready(function(){
             /*== NAVIGATION ==*/

             //Account
             $("#navigation-accounts").click(function(){
                console.log('loading not-ready');
                 $(".wrapper").load("./eugene/not-ready.html");
             });

             //Trade
             $("#trade-buy").click(function(e){
                $(".wrapper").load("./eugene/buy.html", function(){
                    $( ".chartsrc" ).remove();
                    // setTimeout(function(){
                        console.log('loading data!');
                        var script1 = document.createElement('script');                    
                        script1.src = "js/morris-chart/raphael-min.js";
                        script1.className = "chartsrc";
                
                        var script2 = document.createElement('script');
                        script2.src = "js/morris-chart/morris.js";
                        script2.className = "chartsrc";
                        
                        var script3 = document.createElement('script');
                        script3.src = "eugene/chartData/buy.js";
                        script3.className = "chartsrc";

                        document.body.appendChild(script1);
                        document.body.appendChild(script2);
                        setTimeout(function(){
                            document.body.appendChild(script3);
                        }, 250);
                    // }, 500);
                });

                // if (!$('#container').hasClass('open-right-panel')) {
                //     console.log('hi');
                //     $('#container').toggleClass('open-right-panel');
                // }
                // if (!$('.right-sidebar').hasClass('open-right-bar')) {
                //     $('.right-sidebar').toggleClass('open-right-bar');
                // }

                // if ($('.header').hasClass('merge-header')) {
                //     $('.header').removeClass('merge-header');
                // }

                $('#container').toggleClass('open-right-panel');
                $('.right-sidebar').toggleClass('open-right-bar');
                $('.header').toggleClass('merge-header');

                e.stopPropagation(); 
             });



             $("#chart-morris").click(function(){
                $(".wrapper").load("./eugene/morris.html", function(){
                    
                    $( ".chartsrc" ).remove();

                    var script1 = document.createElement('script');
                    script1.src = "js/morris-chart/morris.js";
                    script1.className = "chartsrc";
                    
                    var script2 = document.createElement('script');                    
                    script2.src = "js/morris-chart/raphael-min.js";
                    script2.className = "chartsrc";
                    
                    var script3 = document.createElement('script');
                    script3.src = "js/morris.init.js";
                    script3.className = "chartsrc";

                    document.body.appendChild(script1);
                    document.body.appendChild(script2);
                    document.body.appendChild(script3);

                 });
             });

            $("#chart-chartjs").click(function(){
                 $(".wrapper").load("./eugene/chartjs.html", function(){

                    $( ".chartsrc" ).remove();

                    var script1 = document.createElement('script');
                    script1.src = "js/chart-js/Chart.js";
                    script1.className = "chartsrc";

                    var script2 = document.createElement('script');
                    script2.src = "js/chartjs.init.js";
                    script2.className = "chartsrc";

                    document.body.appendChild(script1);
                    document.body.appendChild(script2);
                 });
            });

            $("#chart-flot").click(function(){
                 $(".wrapper").load("./eugene/flot_chart.html", function(){
                    
                    $( ".chartsrc" ).remove();

                    var script1 = document.createElement('script');
                    script1.src = "js/flot-chart/jquery.flot.js";
                    script1.className = "chartsrc";

                    var script2 = document.createElement('script');
                    script2.src = "js/flot-chart/jquery.flot.tooltip.min.js";
                    script2.className = "chartsrc";
                    
                    var script3 = document.createElement('script');
                    script3.src = "js/flot-chart/jquery.flot.resize.js";
                    script3.className = "chartsrc";
                    
                    var script4 = document.createElement('script');
                    script4.src = "js/flot-chart/jquery.flot.pie.resize.js";
                    script4.className = "chartsrc";
                    
                    var script5 = document.createElement('script');
                    script5.src = "js/flot-chart/jquery.flot.selection.js";
                    script5.className = "chartsrc";
                    
                    var script6 = document.createElement('script');
                    script6.src = "js/flot-chart/jquery.flot.stack.js";
                    script6.className = "chartsrc";
                    
                    var script7 = document.createElement('script');
                    script7.src = "js/flot-chart/jquery.flot.time.js";
                    script7.className = "chartsrc";
                    
                    var script8 = document.createElement('script');
                    script8.src = "js/flot.chart.init.js";
                    script8.className = "chartsrc";

                    document.body.appendChild(script1);
                    document.body.appendChild(script2);
                    document.body.appendChild(script3);
                    document.body.appendChild(script4);
                    document.body.appendChild(script5);
                    document.body.appendChild(script6);
                    document.body.appendChild(script7);
                    document.body.appendChild(script8);
                 });
            });

        });

        /*==Left Navigation Accordion ==*/
        if ($.fn.dcAccordion) {
            $('#nav-accordion').dcAccordion({
                eventType: 'click',
                autoClose: true,
                saveState: true,
                disableLink: true,
                speed: 'slow',
                showCount: false,
                autoExpand: true,
                classExpand: 'dcjq-current-parent'
            });
        }
        /*==Slim Scroll ==*/
        if ($.fn.slimScroll) {
            $('.event-list').slimscroll({
                height: '305px',
                wheelStep: 20
            });
            $('.conversation-list').slimscroll({
                height: '360px',
                wheelStep: 35
            });
            $('.to-do-list').slimscroll({
                height: '300px',
                wheelStep: 35
            });
        }
        /*==Nice Scroll ==*/
        if ($.fn.niceScroll) {


            $(".leftside-navigation").niceScroll({
                cursorcolor: "#1FB5AD",
                cursorborder: "0px solid #fff",
                cursorborderradius: "0px",
                cursorwidth: "3px"
            });

            $(".leftside-navigation").getNiceScroll().resize();
            if ($('#sidebar').hasClass('hide-left-bar')) {
                $(".leftside-navigation").getNiceScroll().hide();
            }
            $(".leftside-navigation").getNiceScroll().show();

            $(".right-stat-bar").niceScroll({
                cursorcolor: "#1FB5AD",
                cursorborder: "0px solid #fff",
                cursorborderradius: "0px",
                cursorwidth: "3px"
            });

        }

        /*==Easy Pie chart ==*/
        if ($.fn.easyPieChart) {

            $('.notification-pie-chart').easyPieChart({
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                },
                barColor: "#39b6ac",
                lineWidth: 3,
                size: 50,
                trackColor: "#efefef",
                scaleColor: "#cccccc"

            });

            $('.pc-epie-chart').easyPieChart({
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                },
                barColor: "#5bc6f0",
                lineWidth: 3,
                size:50,
                trackColor: "#32323a",
                scaleColor:"#cccccc"

            });

        }

        /*== SPARKLINE==*/
        if ($.fn.sparkline) {

            $(".d-pending").sparkline([3, 1], {
                type: 'pie',
                width: '40',
                height: '40',
                sliceColors: ['#e1e1e1', '#8175c9']
            });



            var sparkLine = function () {
                $(".sparkline").each(function () {
                    var $data = $(this).data();
                    ($data.type == 'pie') && $data.sliceColors && ($data.sliceColors = eval($data.sliceColors));
                    ($data.type == 'bar') && $data.stackedBarColor && ($data.stackedBarColor = eval($data.stackedBarColor));

                    $data.valueSpots = {
                        '0:': $data.spotColor
                    };
                    $(this).sparkline($data.data || "html", $data);


                    if ($(this).data("compositeData")) {
                        $spdata.composite = true;
                        $spdata.minSpotColor = false;
                        $spdata.maxSpotColor = false;
                        $spdata.valueSpots = {
                            '0:': $spdata.spotColor
                        };
                        $(this).sparkline($(this).data("compositeData"), $spdata);
                    };
                });
            };

            var sparkResize;
            $(window).resize(function (e) {
                clearTimeout(sparkResize);
                sparkResize = setTimeout(function () {
                    sparkLine(true)
                }, 500);
            });
            sparkLine(false);



        }



        if ($.fn.plot) {
            var datatPie = [30, 50];
            // DONUT
            $.plot($(".target-sell"), datatPie, {
                series: {
                    pie: {
                        innerRadius: 0.6,
                        show: true,
                        label: {
                            show: false

                        },
                        stroke: {
                            width: .01,
                            color: '#fff'

                        }
                    }




                },

                legend: {
                    show: true
                },
                grid: {
                    hoverable: true,
                    clickable: true
                },

                colors: ["#ff6d60", "#cbcdd9"]
            });
        }



        /*==Collapsible==*/
        $('.widget-head').click(function (e) {
            var widgetElem = $(this).children('.widget-collapse').children('i');

            $(this)
                .next('.widget-container')
                .slideToggle('slow');
            if ($(widgetElem).hasClass('ico-minus')) {
                $(widgetElem).removeClass('ico-minus');
                $(widgetElem).addClass('ico-plus');
            } else {
                $(widgetElem).removeClass('ico-plus');
                $(widgetElem).addClass('ico-minus');
            }
            e.preventDefault();
        });




        /*==Sidebar Toggle==*/

        $(".leftside-navigation .sub-menu > a").click(function () {
            var o = ($(this).offset());
            var diff = 80 - o.top;
            if (diff > 0)
                $(".leftside-navigation").scrollTo("-=" + Math.abs(diff), 500);
            else
                $(".leftside-navigation").scrollTo("+=" + Math.abs(diff), 500);
        });



        $('.sidebar-toggle-box .fa-bars').click(function (e) {
            console.log('sidebar toggle box clicked')
            $(".leftside-navigation").niceScroll({
                cursorcolor: "#1FB5AD",
                cursorborder: "0px solid #fff",
                cursorborderradius: "0px",
                cursorwidth: "3px"
            });

            $('#sidebar').toggleClass('hide-left-bar');
            if ($('#sidebar').hasClass('hide-left-bar')) {
                $(".leftside-navigation").getNiceScroll().hide();
            }
            $(".leftside-navigation").getNiceScroll().show();
            $('#main-content').toggleClass('merge-left');
            e.stopPropagation();
            if ($('#container').hasClass('open-right-panel')) {
                $('#container').removeClass('open-right-panel')
            }
            if ($('.right-sidebar').hasClass('open-right-bar')) {
                $('.right-sidebar').removeClass('open-right-bar')
            }

            if ($('.header').hasClass('merge-header')) {
                $('.header').removeClass('merge-header')
            }


        });
        $('.toggle-right-box .fa-bars').click(function (e) {
            console.log('right toggle box clicked')

            $('#container').toggleClass('open-right-panel');
            $('.right-sidebar').toggleClass('open-right-bar');
            $('.header').toggleClass('merge-header');

            e.stopPropagation();
        });

        // $('.header,#main-content,#sidebar').click(function () {
        //     console.log('main-content sidebar toggle box clicked')

        //     if ($('#container').hasClass('open-right-panel')) {
        //         $('#container').removeClass('open-right-panel')
        //     }
        //     if ($('.right-sidebar').hasClass('open-right-bar')) {
        //         $('.right-sidebar').removeClass('open-right-bar')
        //     }

        //     if ($('.header').hasClass('merge-header')) {
        //         $('.header').removeClass('merge-header')
        //     }


        // });


        $('.panel .tools .fa').click(function () {
            var el = $(this).parents(".panel").children(".panel-body");
            if ($(this).hasClass("fa-chevron-down")) {
                $(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
                el.slideUp(200);
            } else {
                $(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
                el.slideDown(200); }
        });



        $('.panel .tools .fa-times').click(function () {
            $(this).parents(".panel").parent().remove();
        });

        // tool tips

        $('.tooltips').tooltip();

        // popovers

        $('.popovers').popover();


    });


})(jQuery);
