(function() {
    var iconPath = 'img/icons/';
    d3.csv('data/data.csv', function(vitaminsData) {
        console.log(vitaminsData);
        d3.csv('data/organs.csv', function(organsData) {
            console.log(organsData);

            _.each(vitaminsData, function(d) {
                d.organs = d.organs.split(', ');

                for(var i = 0; i < d.organs.length; i++) {
                    var organ = _.findWhere(organsData, {organ:d.organs[i]});
                    if(organ) {
                        d.organs[i] = organ;
                        if(!organ.vitamins) {
                            organ.vitamins = [];
                        }
                        organ.vitamins.push(d);
                    } else {
                        console.log('problem', d.organs[i]);
                    }

                }
            });

            var vitaminsView = d3.select('.content .vitamins').selectAll('.vitamin')
                .data(vitaminsData, function (d) {return d.name + d.index;}).enter()
                .append('div')
                .attr('class', 'vitamin btn')
                .on('click', function(d){
                    d3.select('.content .vitamins').selectAll('.vitamin')
                        .classed('selected', false);
                    d3.select(this)
                        .classed('selected', true);

                    d3.select('.content .organs').selectAll('.organ')
                        .classed('selected', false)
                        .data(d.organs, function(d){return d.organ;})
                        .classed('selected', true);

                    var hordes = [];
                    _.each(d.organs, function(organ) {
                        hordes.push({key:d.name + d.index + organ.organ});
                    });
                    selectHordes(hordes);
                });

            var vitaminSize = {w:86, h:29};
            vitaminsView.append('svg')
                .attr('height', vitaminSize.h)
                .attr('width', vitaminSize.w)
                .append('path')
                .attr('class', 'bgr')
                .attr('d', 'M68.6,0c0.2,0,0.4,0.1,0.5,0.2c0.1,0.1,0.2,0.2,0.2,0.4c3.7,5.5,8.8,9.9,14.9,12.7c0.6,0.3,0.8,0.4,1.2,0.5c0,0,0,0,0,0c0.3,0.1,0.5,0.4,0.5,0.8c0,0.3-0.2,0.5-0.4,0.7c-0.1,0-0.2,0.1-0.2,0.1c-0.4,0.2-0.7,0.3-1.1,0.5c-6.1,2.8-11.2,7.2-14.9,12.7c-0.1,0.1-0.2,0.2-0.2,0.4C69,28.9,68.8,29,68.6,29H0V0H68.6z');


            vitaminsView.append('div')
                .text(function(d){return d.name + d.index;})
                .attr('class', 'name');

            vitaminsView.each(function(d){
                var bb = this.getBoundingClientRect();
                d.bb = {x:bb.left + vitaminSize.w, y:bb.top + vitaminSize.h/2};
            });

            var organsView = d3.select('.content .organs').selectAll('.organ')
                .data(organsData, function(d){return d.organ;}).enter()
                .append('div')
                .attr('class', 'organ btn')
                .on('click', function(d){
                    d3.select('.content .organs').selectAll('.organ')
                        .classed('selected', false);
                    d3.select(this)
                        .classed('selected', true);

                    d3.select('.content .vitamins').selectAll('.vitamin')
                        .classed('selected', false)
                        .data(d.vitamins, function(d){return d.name + d.index;})
                        .classed('selected', true);

                    var hordes = [];
                    _.each(d.vitamins, function(vitamin) {
                        hordes.push({key:vitamin.name + vitamin.index + d.organ});
                    });
                    selectHordes(hordes);
                });

            var organsSize = {w:45, h:51};
            organsView.append('svg')
                .attr('height', organsSize.h)
                .attr('width', organsSize.w)
                .append('polygon')
                .attr('class', 'bgr')
                .attr('points', '44.4,38.5 22.2,51.3 0,38.5 0,12.8 22.2,0 44.4,12.8');

            organsView.append('img')
                .attr('src', function(d){return iconPath + d.img;})
                .attr('class', 'pic')
                .attr('height', organsSize.w)
                .attr('width', organsSize.w);

            organsView.append('div')
                .text(function(d){return d.organ;})
                .attr('class', 'name');

            organsView.each(function(d){
                var bb = this.getBoundingClientRect();
                d.bb = {x:bb.left, y:bb.top + organsSize.h/2};
            });

            function selectHordes(hordes) {
                svg.selectAll('path')
                    .classed('selected', false)
                    .data(hordes, function(d) {return d.key;})
                    .classed('selected', true);
            }
            var svg = d3.select('.graph');
            var svgBB = svg[0][0].getBoundingClientRect();

            var diagonalPattern = d3.svg.diagonal()
                .source(function(d) { return {x: d.pos[0].y - svgBB.top, y:d.pos[0].x - svgBB.left}; })
                .target(function(d) { return {x:d.pos[1].y - svgBB.top, y:d.pos[1].x - svgBB.left}; })
                .projection(function(d) { return [d.y, d.x]; });

            var hordes = createHordeData();
            function createHordeData() {
                var hordes = [];
                _.each(vitaminsData, function(vitamin){
                    _.each(vitamin.organs, function(organ){
                        hordes.push({pos:[vitamin.bb, organ.bb], key:vitamin.name + vitamin.index + organ.organ});
                    });
                });
                return hordes;
            }

            svg.selectAll('path')
                .data(hordes, function(d) {return d.key;}).enter()
                .append('path')
                .attr('class', 'horde')
                .attr('d', diagonalPattern);
        });
    });
})();

