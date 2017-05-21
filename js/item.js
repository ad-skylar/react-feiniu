
var Item=React.createClass({
    render:function(){
        return(
			<div>
				<Header/>
				<Section />
			</div>
        )
    }
})


var Header=React.createClass({
    back:function(){
        window.history.go(-1);
    },
    render:function(){
        return(
			<header className="mui-bar mui-bar-nav">
				<a onClick={this.back} className="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
				<span className="mui-input-row mui-search">
				    <input type="search"  className="mui-input-clear icon iconfont" placeholder="&#xe66a;" />
				</span>
				<span className='mui-icon mui-icon-bars '></span>
			</header>

        )
    }
})

var Section=React.createClass({

    render: function () {
        return (
            <section>
                <div className='box-left'>
                    <ul className='list'></ul>
                </div>
                <div className='box-right'></div>
            </section>
        )
    },
    componentDidMount: function () {
        $.get('../data/class.json', function (data) {
            var ul = "";
            var right = "";
            var rt = '';
            for (var i in data) {
                ul += '<li id="' + i + '"><span>' + data[i]['title'] + '</span></li>'
            }
            $('.box-left .list').html(ul);
            var up = '<div class="banner"><img src="' + data[0]['banner'] + '" alt="banner" /></div>' +
                '<h3>' + data[0]['title'] + '</h3>'
            for (var k in data[0]['detail']['hot']) {
            	
                rt += '<div class="box-dl"><dl><dt><a href="###"><img src="' + data[0]['detail']['hot'][k]['pic'] + '" alt="" /></a></dt><dd><a href="###">' + data[0]['detail']['hot'][k]['name'] + '</a></dd></dl></div>'

            }
            right = up + rt;
            $('.box-right').html(right);

            $('.list li').on('tap', function () {
                var id = $(this).index()
                try{
                	$.get('../data/class.json',function(data){
                		 var rt = '';
                		for(var m in data[id]['detail']){
				            var up = '<div class="banner"><img src="' + data[id]['banner'] + '" alt="banner" /></div>' +
				                '<h3>' + data[id]['title'] + '</h3>'
				            for (var n in data[id]['detail'][m]) {
				            		
				             		   rt += '<div class="box-dl"><dl><dt><a href="###"><img src="' + data[id]['detail'][m][n]['pic'] + '" alt="" /></a></dt><dd><a href="###">' + data[id]['detail'][m][n]['name'] + '</a></dd></dl></div>'
				            }
				            
                		}
                		right = up + rt;
				        $('.box-right').html(right);
                		
                	})
                }
                catch(e){
                	
                	alert(1)
                }

            })


        })
    }
})
  




ReactDOM.render(<Item />,document.getElementById("panel"))