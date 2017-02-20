(function ($) {
    "use strict";
    $(document).ready(function () {

        if (Morris.EventEmitter) {
            // Use Morris.Area instead of Morris.Line
            Morris.Area({
                element: 'graph-area',
                padding: 10,
                behaveLikeLine: true,
                gridEnabled: false,
                gridLineColor: '#dddddd',
                axes: true,
                fillOpacity: .7,
                data: [{
                    period: '2015 Q1',
                    fruits: 10,
                    légumes: 10,
                    produitsRegionnaux: 10
                }, {
                    period: '2015 Q2',
                    fruits: 1778,
                    légumes: 7294,
                    produitsRegionnaux: 18441
                }, {
                    period: '2015 Q3',
                    fruits: 4912,
                    légumes: 12969,
                    produitsRegionnaux: 3501
                }, {
                    period: '2015 Q4',
                    fruits: 3767,
                    légumes: 3597,
                    produitsRegionnaux: 5689
                }, {
                    period: '2016 Q1',
                    fruits: 6810,
                    légumes: 1914,
                    produitsRegionnaux: 2293
                }, {
                    period: '2016 Q2',
                    fruits: 5670,
                    légumes: 4293,
                    produitsRegionnaux: 1881
                }, {
                    period: '2016 Q3',
                    fruits: 4820,
                    légumes: 3795,
                    produitsRegionnaux: 1588
                }, {
                    period: '2016 Q4',
                    fruits: 25073,
                    légumes: 5967,
                    produitsRegionnaux: 5175
                }, {
                    period: '2017 Q1',
                    fruits: 10687,
                    légumes: 34460,
                    produitsRegionnaux: 22028
                }, {
                    period: '2017 Q2',
                    fruits: 1000,
                    légumes: 5713,
                    produitsRegionnaux: 1791
                }
                ],
                lineColors: ['#30d12d', '#281dd4', '#e4801b'],
                xkey: 'period',
                ykeys: ['fruits', 'légumes', 'produitsRegionnaux'],
                labels: ['Fruits', 'Légumes', 'Produits Régionnaux'],
                pointSize: 0,
                lineWidth: 0,
                hideHover: 'auto'

            });

        }
});
})(jQuery);
